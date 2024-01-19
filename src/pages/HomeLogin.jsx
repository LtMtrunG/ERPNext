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
    </div>
  )
}

export default HomeLogin;
