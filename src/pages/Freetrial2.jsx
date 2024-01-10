import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import NavbarLogin from '../Components/NavbarLogin';
import { useState } from "react";

const Freetrial2 = () => {

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

 function save(e) {
  e.preventDefault();
  var name = document.getElementById("companyName").value;
  console.log(name);
  localStorage.setItem("companyName",name);
  location.href("Freetrial2.jsx");
 }

  return (
    <div>
      <NavbarLogin />
      <div className="container-fluid" style={containerStyle}>

        <MDBRow>

          <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
            <img className='image-fluid' href="#" src="https://amplify-erpconnect-dev-135834-deployment.s3.amazonaws.com/brand.png" width="400" alt="" />
            <h1 className='display-1' style={textStyle}>ERPConnect</h1>
          </MDBCol>

          <MDBCol col='10' md='6' style={containerStyle}>

            <div className="d-flex flex-column ms-5 mt-5">


              <h1 className="mt-1 mb-5 pb-1 text-center" style={loginStyle}>Free trial</h1>

              <form className="row g-3 mr-2 ml-2">
                <div className="col-12">
                  <label for="companyName" className="form-label text-white">Company's name</label>
                  <input type="text" name ="companyName" className="form-control" id="companyName"/>
                </div>
                <div className="col-md-6">
                  <label for="city" className="form-label text-white">City</label>
                  <input type="email" className="form-control" id="city" />
                </div>
                <div className="col-md-6">
                  <label for="businessField" className="form-label text-white">Company's Field of Business</label>
                  <input type="password" className="form-control" id="businessField" />
                </div>
                <div className="col-md-6">
                  <label for="contactPerson" className="form-label text-white">Contact Person</label>
                  <input type="email" className="form-control" id="contactPerson" />
                </div>
                <div className="col-md-6">
                  <label for="contactPhoneNum" className="form-label text-white">Contact Phone Number</label>
                  <input type="password" className="form-control text-white" id="contactPhoneNum" />
                </div>
                <div className="col-12">
                  <label for="description" className="form-label text-white">Description</label>
                  <textarea type="text" className="form-control" id="description" placeholder="Write short description about your company" />
                </div>
                <div className="col-12">
                  <button type="submit"className="btn btn-primary" value="Save" onClick="save()">Submit</button>
                </div>

              </form>
            </div>

          </MDBCol>

        </MDBRow>
      </div>
    </div >
  );
}

export default Freetrial2;