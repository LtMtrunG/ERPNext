import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SubscriptionList from "../Components/SubscriptionList"
import NavbarLogin from '../Components/NavbarLogin';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { UserContext } from '../UserContext.jsx';
import { generateClient } from "aws-amplify/api";
import { listUsers, getUser } from "../graphql/queries";
import { listPlans, getPlan } from "../graphql/queries";
import { loadStripe } from '@stripe/stripe-js';
import { fetchUserAttributes } from 'aws-amplify/auth';
import axios, { all } from 'axios';
import { updateUser } from '../graphql/mutations'

const Mysubscription = () => {

    const textStyle = {
        color: '#243C54',
        fontWeight: 'bold',
    };

    const loginStyle = {
        color: '#FFFFFF',
        fontWeight: 'bold',
    };

    const containerStyle = {
        position: 'relative',
        backgroundColor: '#243C54',
        width: '100vw',
        height: '100vh',
        paddingLeft: 0,
    };

    const tableStyle = {
        backgroundColor: '#243C54',
    }

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [currUser, setCurrUser] = useState();
    const [plan, setPlan] = useState();
    const [product, setProduct] = useState();
    const [company, setCompany] = useState();
    const client = generateClient();
    const [subscriptionData, setSubscriptionData] = useState([]);
    const [sendRequest, setSendRequest] = useState(false);
    const [email, setEmail] = useState();
    const [companyList, setCompanyList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [allDataFetched, setAllDataFetched] = useState(false);
    const uniqueCompanies = new Set();
    const uniqueProducts = new Set();

    useEffect(() => {

        if (allDataFetched) {
            return;
        }
        setSubscriptionData([]); // Clear the existing data

        setUser(JSON.parse(localStorage.getItem("user")));
        const getUserData = async () => {
            try {
                const oneUser = await client.graphql({
                    query: getUser,
                    variables: { User_Pool_Id: user }
                });
                setCurrUser(oneUser);
            } catch (error) {
                console.log('Error getting user', error);
            }
        }

        const updateUserData = async () => {
            try {
                const oneUser = await client.graphql({
                    query: updateUser,
                    variables: {
                        input: {
                            // Assuming you have other fields in UpdateUserInput, add them here
                            User_Pool_Id: user,
                            EventID: currUser.data.getUser.EventID,
                        },
                    }
                });
            } catch (error) {
                console.log('Error updatting user', error);
            }
        }

        const secretKey = 'sk_test_51OV2cBCI8KCBgRqhzwFZ18vrlxmlMEYnxPyC3Vte4mjid3hdAkFVLNNIEB02062CQrjFWnsXtzBxkR3qMzXyvEIg00961E4LUm';
        //const apiUrl = 'https://api.stripe.com/v1/customers';
        const apiUrl = 'https://api.stripe.com/v1/subscriptions';
        const apiUrl1 = 'https://api.stripe.com/v1/events';
        let subscriptionData1;
        // get email
        // get customer id, start data, cancel date
        if (email !== null) {
            axios.get(apiUrl1, {
                headers: {
                    'Authorization': `Bearer ${secretKey}`,
                },
            })
                .then(response => {
                    subscriptionData1 = response.data;
                    subscriptionData1.data.forEach(item => {
                        const customerDetails = item.data.object.customer_details;
                        if (customerDetails?.email && customerDetails.email === email && item.data.object?.custom_fields) {
                            const customFields = item.data.object.custom_fields;
                            if (Array.isArray(customFields) && customFields.length > 0) {
                                if (!currUser.data.getUser.EventID.includes(item.id)) {
                                    // If item.id is not in the array, add it
                                    currUser.data.getUser.EventID.push(item.id);
                                }
                                updateUserData();
                            } else {
                                console.log("The 'custom_fields' field exists but is either null or an empty array.");
                            }
                        }
                    });
                    console.log(currUser);
                    currUser.data.getUser.EventID.forEach(item => {
                        getEventDetail(item);
                    })
                })
                .catch(error => {
                    console.error(error);
                });
        }

        const getEventDetail = (eventID) => {
            if (companyList.length <= currUser.data.getUser.EventID.length) {
                const eventApiUrl = 'https://api.stripe.com/v1/events/' + eventID;
                axios.get(eventApiUrl, {
                    headers: {
                        'Authorization': `Bearer ${secretKey}`,
                    },
                })
                    .then(response => {
                        const subscriptionID = response.data.data.object.subscription;
                        const companyName = response.data.data.object.custom_fields.find(field => field.key === "companyname").text.value;
                        console.log(companyName);
                        if (!uniqueCompanies.has(companyName) && uniqueCompanies.size <= currUser.data.getUser.EventID.length) {
                            uniqueCompanies.add(companyName);
                            setCompanyList(prevCompanyList => [...prevCompanyList, companyName]);
                            setSubscriptionData(prevData => [
                                ...prevData,
                                {
                                    companyName,
                                    subscriptionID,
                                },
                            ]);

                            console.log(subscriptionData.length);
                            console.log(companyList.length);
                        }
                        const numberOfEmployee = response.data.data.object.custom_fields.find(field => field.key === "numberofemployees").numeric.value;
                        console.log(numberOfEmployee);
                        getSubscription(subscriptionID);
                    })
                    .catch(error => {
                        console.error(error.response.data);
                    });
            }
        }

        const fetchEmail = async () => {
            try {
                const userAttributes = await fetchUserAttributes();
                setEmail(userAttributes.email);
            } catch (error) {
                console.log(error);
            }
        }

        const getSubscription = (subscriptionID) => {
            const eventApiUrl = 'https://api.stripe.com/v1/subscriptions/' + subscriptionID;
            axios.get(eventApiUrl, {
                headers: {
                    'Authorization': `Bearer ${secretKey}`,
                },
            })
                .then(response => {
                    const endDate = response.data.current_period_end;
                    const productID = response.data.plan.product;
                    var productName = '';
                    const date = new Date(endDate * 1000); // Convert seconds to milliseconds
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const endDateFormatted = date.toLocaleDateString('en-US', options); // Get formatted date

                    console.log(endDateFormatted);

                    if (productID === 'prod_PJicsjP3eLEi7o') {
                        productName = 'Enterprise';
                    } else if (productID === 'prod_PJibf5hoA80aW1') {
                        productName = 'Professional';
                    } else {
                        productName = 'Standard';
                    }

                    if (!uniqueProducts.has(productName) && uniqueProducts.size <= currUser.data.getUser.EventID.length) {
                        uniqueProducts.add(productName);
                        setProductList(prevProductList => [...prevProductList, productName]);
                        setSubscriptionData(prevData => {
                            const updatedData = prevData.map(entry => {
                                if (entry.subscriptionID === subscriptionID) {
                                    return {
                                        ...entry,
                                        endDateFormatted,
                                        productName,
                                    };
                                }
                                return entry;
                            });
                            return updatedData;
                        });
                    }

                    console.log(productName);
                })
                .catch(error => {
                    console.error(error.response.data);
                });
        }
        if (companyList.length === productList.length && companyList.length !== 0) {
            setAllDataFetched(true);
            console.log('End' + companyList.length);
        }

        console.log(companyList);
        console.log(productList);

        getUserData();
        fetchEmail();

    }, [currUser, companyList, productList, allDataFetched]);

    const handleRowClick = (entry) => {
        // Perform actions when a row is clicked, e.g., navigate to a new page

        console.log(`Row clicked: ${entry.companyName}`);
        // Add your navigation logic or other actions here
        // Assuming companyName is a variable containing the company name
        const companyName = entry.companyName.toLowerCase();

        // Construct the destination URL
        const destinationURL = `https://${companyName}.erpconnect.online`;

        // Redirect to the destination URL
        window.location.href = destinationURL;
    };

    return (
        <div>
            <NavbarLogin />
            <div className="container-fluid" style={containerStyle}>

                <MDBRow>

                    <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
                        <img className='image-fluid' href="#" src="https://amplify-erpconnect-dev-135834-deployment.s3.amazonaws.com/brand.png" width="400" alt="" />
                        <h1 className='display-1' style={textStyle}>ERPConnect</h1>
                    </MDBCol>

                    <MDBCol col='4' md='6' style={containerStyle}>

                        <div className="d-flex flex-column ms-5 mt-5">

                            <div className="text-center">
                                <h1 className="mt-1 mb-5 mt-5 pb-1" style={loginStyle}>My subscription</h1>
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Plan</th>
                                        <th scope="col">End Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscriptionData.slice(0, 3).map(entry => (
                                        <tr key={entry.subscriptionID} onClick={() => handleRowClick(entry)}>
                                            <td>{entry.companyName}</td>
                                            <td>{entry.productName}</td>
                                            <td>{entry.endDateFormatted}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </MDBCol>

                </MDBRow>
            </div>
        </div>
    );
}

export default Mysubscription;