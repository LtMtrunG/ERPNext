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
    const [plan, setPlan] = useState();
    const [companyName, setCompanyName] = useState();
    const [planName, setPlanName] = useState();
    const [endDate, setEndDate] = useState();
    const client = generateClient();


    useEffect(() => {
        const getUserData = async () => {
            try {
                const oneUser = await client.graphql({
                    query: getUser,
                    variables: { User_Pool_Id: user }
                });
                console.log(oneUser);
                if (oneUser.data.getUser.Plan_Id === "") {
                    console.log('No plan');
                    setPlan('No plan');
                    setEndDate();
                } else {
                    setPlan(oneUser.data.getUser.Plan_Id);
                }
            } catch (error) {
                console.log('Error getting user', error);
            }
        }

        const getPlanData = async () => {
            try {
                // Get a specific item
                if (plan !== null) {
                    const onePlan = await client.graphql({
                        query: getPlan,
                        variables: { id: plan }
                    });
                    console.log(onePlan);
                    setCompanyName(onePlan.data.getPlan.Company_Name);
                    setPlanName(onePlan.data.getPlan.Types);
                    setEndDate(onePlan.data.getPlan.Next_Payment_Date);
                }
            } catch (error) {
                console.log('Error getting plan', error);
            }
        }
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:4242/customers'); // Assuming your server is running on the same host as your React app
              //const data = await response.json();
              //console.log(data); // This will log the response from the server
      
              // You can now do something with the data, update your component state, etc.
            } catch (error) {
              console.error('Error fetching data:', error);
              // Handle the error, display an error message, etc.
            }
          };
      
          fetchData();
        getUserData();
        getPlanData();

    }, [client, plan]);

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

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Plan</th>
                                        <th scope="col">End Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{companyName}</td>
                                        <td>{planName}</td>
                                        <td>{endDate}</td>
                                    </tr>
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