import Header from '../Components/Header'
import Footer from '../Components/Footer'
import NavbarLogin from '../Components/NavbarLogin';
import { UserContext } from '../UserContext.jsx';
import React, { useContext, useEffect, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { generateClient } from "aws-amplify/api";
import { createUser } from '../graphql/mutations';
import { listUsers, getUser } from "../graphql/queries";
import { DataStore, Predicates} from "@aws-amplify/datastore";
import { User} from '../models/index.js';

const HomeLogin = () => {
  const client = generateClient();

  const containerStyle = {
    position: 'relative',
    backgroundColor: '#243C54',
    width: '100vw',
    paddingLeft: 0,
  };
  const { user } = useContext(UserContext);
  const handleButtonClick = async () => {
    try {
      const newUser = await client.graphql({
        query: createUser,
        variables: {
            input: {
        "User_Pool_Id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
        "Company_Name": "",
        "Phone_Number": "",
        "City": "",
        "Business_Field": "",
        "Contact_Person": "",
        "Contact_Phone_Number": "",
        "Description": "",
        "Amount_People": 0,
        "Plan_Id": ""
      }
        }
    });

    } catch (error) {
      console.log('Error saving post', error);
    }
  };

  const handleGetButtonClick = async () => {
    try {
      // Get a specific item
      const oneUser = await client.graphql({
        query: getUser,
        variables: { Email_Address: 'trung.le.tmt@gmail.com'  }
      });
      console.log(oneUser);

    } catch (error) {
      console.log('Error saving post', error);
    }
  };

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

      <Footer />
      <MDBBtn onClick={handleButtonClick}>Save Post</MDBBtn>
      <MDBBtn onClick={handleGetButtonClick}>Get Post</MDBBtn>
    </div>
  )
}

export default HomeLogin;
