import React, { useContext, useEffect } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import NavbarLogin from '../Components/NavbarLogin';
import { useState } from "react";
import { updateUser } from '../graphql/mutations';
import { Form } from "react-bootstrap";
import { UserContext } from '../UserContext.jsx';
import { generateClient } from "aws-amplify/api";

const CompanyRegistration = () => {

  const { user } = useContext(UserContext);
  const [submit, setSubmit] = useState(false);
  const client = generateClient();

  const [companyName, setCompanyName] = useState();
  const onCompanyNameInput = (e) => {
    setCompanyName(e.target.value);
  };

  const [amountPeople, setAmountPeople] = useState();
  const onAmountPeopleInput = (e) => {
    setAmountPeople(e.target.value);
  }

  const [city, setCity] = useState();
  const onCityInput = (e) => {
    setCity(e.target.value);
  };

  const [businessField, setBusinessField] = useState();
  const onBusinessFieldInput = (e) => {
    setBusinessField(e.target.value);
  };

  const [contactPerson, setContactPerson] = useState();
  const onContactPersonInput = (e) => {
    setContactPerson(e.target.value);
  };

  const [contactPhoneNum, setContactPhoneNum] = useState();
  const onContactPhoneNumInput = (e) => {
    setContactPhoneNum(e.target.value);
  };

  const [description, setDescription] = useState();
  const onDescriptionInput = (e) => {
    setDescription(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log(user);
    console.log(companyName);
    console.log(city);
    console.log(businessField);
    console.log(contactPerson);
    console.log(contactPhoneNum);
    console.log(description);
  }

  useEffect(() => {
    const updateUserData = async () => {
      if (submit) {
        try {
          const updatedUser = await client.graphql({
            query: updateUser,
            variables: {
              input: {
                "User_Pool_Id": user,
                "Company_Name": companyName,
                "Phone_Number": "",
                "City": city,
                "Business_Field": businessField,
                "Contact_Person": contactPerson,
                "Contact_Phone_Number": contactPhoneNum,
                "Description": description,
                "Amount_People": amountPeople,
                "Plan_Id": ""
              }
            }
          });
        } catch (error) {
          console.log('Error saving post', error);
        }
      }
    }
    updateUserData();
  }, [submit]);

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


              <h1 className="mt-1 mb-5 pb-1 text-center" style={loginStyle}>Company Information</h1>

              <Form onSubmit={onFormSubmit} className='row g-3 mr-2 ml-2'>

                <Form.Group className="col-md-6" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text-white'>Company's name</Form.Label>
                  <Form.Control type="string" onChange={onCompanyNameInput} value={companyName} />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="exampleForm.ControlInput6">
                  <Form.Label className='text-white'>Number of employee</Form.Label>
                  <Form.Control type="number" onChange={onAmountPeopleInput} value={amountPeople} />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="exampleForm.ControlInput2">
                  <Form.Label className='text-white'>City</Form.Label>
                  <Form.Control type="string" onChange={onCityInput} value={city} />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="exampleForm.ControlInput3">
                  <Form.Label className='text-white'>Company's Field of Business</Form.Label>
                  <Form.Control type="string" onChange={onBusinessFieldInput} value={businessField} />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="exampleForm.ControlInput4">
                  <Form.Label className='text-white'>Contact Person</Form.Label>
                  <Form.Control type="string" onChange={onContactPersonInput} value={contactPerson} />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="exampleForm.ControlInput5">
                  <Form.Label className='text-white'>Contact Phone Number</Form.Label>
                  <Form.Control type="string" onChange={onContactPhoneNumInput} value={contactPhoneNum} />
                </Form.Group>

                <Form.Group className="col-12 mb-5" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='text-white'>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button type="submit col-12" className="btn btn-primary">submit</button>
              </Form>

            </div>

          </MDBCol>

        </MDBRow>
      </div>
    </div >
  );
}

export default CompanyRegistration;