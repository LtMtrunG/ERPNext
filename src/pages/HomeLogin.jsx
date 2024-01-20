import Header from '../Components/Header'
import NavbarLogin from '../Components/NavbarLogin';
import { UserContext } from '../UserContext.jsx';
import React, { useContext, useEffect, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { generateClient } from "aws-amplify/api";
import { createUser } from '../graphql/mutations';
import { listUsers, getUser } from "../graphql/queries";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { User } from '../models/index.js';
import FooterLogin from '../Components/FooterLogin.jsx';
import { fetchUserAttributes } from 'aws-amplify/auth';
import axios from 'axios';
import { updateUser } from '../graphql/mutations';


const HomeLogin = () => {

  const containerStyle = {
    position: 'relative',
    backgroundColor: '#243C54',
    width: '100vw',
    paddingLeft: 0,
  };

  const { user, setUser } = useContext(UserContext);
  const [currUser, setCurrUser] = useState();
  const [plan, setPlan] = useState();
  const [product, setProduct] = useState();
  const [company, setCompany] = useState();
  const client = generateClient();
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const [email, setEmail] = useState();
  const [inf, setInf] = useState();
  const [companyList, setCompanyList] = useState([]);
  const [productList, setProductList] = useState([]);
  let run = 1000000;

  useEffect(() => {
    setInf(run);
    const getUserData = async () => {
      try {
        const oneUser = await client.graphql({
          query: getUser,
          variables: { User_Pool_Id:  JSON.parse(localStorage.getItem("user"))}
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
      const eventApiUrl = 'https://api.stripe.com/v1/events/' + eventID;
      axios.get(eventApiUrl, {
        headers: {
          'Authorization': `Bearer ${secretKey}`,
        },
      })
        .then(response => {
          const companyName = response.data.data.object.custom_fields.find(field => field.key === "companyname").text.value;
          console.log(companyName);
          if (!companyList.includes(companyName)) {
            setCompanyList(prevCompanyList => {
              const uniqueCompanies = new Set([...prevCompanyList, companyName]);
              return Array.from(uniqueCompanies);
            });
          }          
          const numberOfEmployee = response.data.data.object.custom_fields.find(field => field.key === "numberofemployees").numeric.value;
          console.log(numberOfEmployee);
          const subscriptionID = response.data.data.object.subscription;
          getSubscription(subscriptionID);
        })
        .catch(error => {
          console.error(error.response.data);
        });
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
          if (!productList.includes(productName)) {
            setProductList(prevProductList => {
              const uniqueProducts = new Set([...prevProductList, productName]);
              return Array.from(uniqueProducts);
            });
          }
        })
        .catch(error => {
          console.error(error.response.data);
        });
    }

    console.log(companyList);
    console.log(productList)

    for (let i = 0; i < Math.min(companyList.length, productList.length); i++) {
      
      const requestData = {
        body: JSON.stringify({
          subscriptionType: productList[i].toLowerCase(),
          companySubdomain: companyList[i].toLowerCase(),
        }),
      };

      axios.post('https://qzvhm4juig.execute-api.us-east-1.amazonaws.com/prod/stripe-webhook', requestData)
        .then(response => {
          console.log("Response from the server:", response.data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }

    getUserData();
    fetchEmail();

  }, [currUser, company, companyList, productList]);

  return (
    <div>
      <NavbarLogin />
      <Header />
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <img href="#" src="https://erpnext.com/files/erpnext-comic400604.png" width="1100" alt="" />
      </div>
      <div className="container-fluid" style={containerStyle}>
        <div className="row align-items-center">
          <div className="col pl-6">
            <h1 className="nav-link fs-3  fw-bold text-white" href="#">Comprehensive Business Management and Operation Platform</h1>
            <p className="text-white">Reasonable price</p>
            <p className="text-white">Suitable for different business fields</p>
            <p className="text-white">Based on the Frappe Framework</p>
          </div>
          <div className="col ml-aboutUs">
            <img className="navbar-brand mt-5 mb-5" href="#" src="https://erpnext.com/files/erpnext-hero-compressed.png" width="450" alt="" />
          </div>
        </div>
      </div>

      <FooterLogin />
    </div>
  )
}

export default HomeLogin;
