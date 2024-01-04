import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import NavbarLogin from '../Components/NavbarLogin';

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

  return (
    <div>
      <NavbarLogin />
      <div className="container-fluid" style={containerStyle}>

        <MDBRow>

          <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
            <img className='image-fluid' href="#" src="./src/assets/brand.png" width="400" alt="" />
            <h1 className='display-1' style={textStyle}>Last Breath</h1>
          </MDBCol>

          <MDBCol col='4' md='6' style={containerStyle}>

            <div className="d-flex flex-column ms-5 mt-5">


              <h1 className="mt-1 mb-3 mt-5 pb-1 text-center" style={loginStyle}>Free trial</h1>

              <div className="container d-flex flex-column justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-md-10 mb-3">
                    <label className='text-white' htmlFor="name">Company's Name</label>
                    <MDBInput
                      type="text"
                      id="companyName"
                      className="form-control"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex mb-3 ms-6">
                <div className="mr-5">
                  <label className='text-white' htmlFor="city">City</label>
                  <MDBInput
                    type="text"
                    id="city"
                    className="form-control"
                    style={{ width: '120%' }}
                  />
                </div>
                <div className="ml-5">
                  <label className='text-white' htmlFor="field">Company's Field of Business</label>
                  <MDBInput
                    type="text"
                    id="field"
                    className="form-control"
                    style={{ width: '120%' }}
                  />
                </div>
              </div>

              <div className="d-flex mb-3 ms-6">
                <div className="mr-5">
                  <label className='text-white' htmlFor="contactPerson">Contact Person</label>
                  <MDBInput
                    type="text"
                    id="contactName"
                    className="form-control"
                    style={{ width: '120%' }}
                  />
                </div>
                <div className="ml-5">
                  <label className='text-white' htmlFor="contactPhone">Contact Phone Number</label>
                  <MDBInput
                    type="tel"
                    id="contactPhoneNum"
                    className="form-control"
                    style={{ width: '123%' }}
                  />
                </div>
              </div>

              <div className="container d-flex flex-column justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-md-10 mb-5">
                    <label className='text-white' htmlFor="description">Description</label>
                    <MDBInput
                      type="text"
                      id="description"
                      className="form-control"
                      style={{ width: '100%' }}
                    />
                  </div>

                  <MDBBtn 
                    className="col-md-4 mb-1" 
                    style={{ color: '#243C54', background: 'white', border: 'none', height: '40px' }}
                    onClick={() => navigate('/Successfulpayment')}
                  >Get started</MDBBtn>
                </div>

              </div>


            </div>

          </MDBCol>

        </MDBRow>
      </div>
    </div >
  );
}

export default Freetrial2;