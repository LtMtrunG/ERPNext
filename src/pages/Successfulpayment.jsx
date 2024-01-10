import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import NavbarLogin from '../Components/NavbarLogin';

const Successfulpayment = () => {

  const textStyle = {
    color: '#243C54',
    fontWeight: 'bold',
  };

  const loginStyle = {
    color: '#FFFFFF',
    fontWeight: 'bold',
  };

  const containerStyle = {
    backgroundColor: '#243C54',
  };

  return (
    <div>
      <NavbarLogin/>
      <MDBContainer fluid className="p-3  h-custom">

        <MDBRow>

          <MDBCol col='10' md='6' className='d-flex flex-column align-items-center'>
            <img className='image-fluid' href="#" src="https://amplify-erpconnect-dev-135834-deployment.s3.amazonaws.com/brand.png" width="400" alt="" />
            <h1 className='display-1' style={textStyle}>ERPConnect</h1>
          </MDBCol>

          <MDBCol col='4' md='6' style={containerStyle}>

            <div className="d-flex flex-column ms-5 mt-5">


                <h1 className="mt-1 mb-5 mt-5 pb-1 text-center" style={loginStyle}>Successful Payment</h1>
        
                
              <p className='text-center mb-5' style={loginStyle}>Thank you for choosing our service, you can now access the software and use it.</p>


              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-4">

              <MDBBtn className="col-md-4 mb-1" style={{ color: '#243C54', background: 'white', border: 'none' }}>Get started</MDBBtn>


              </div>

            </div>

          </MDBCol>

        </MDBRow>


      </MDBContainer>
    </div>
  );
}

export default Successfulpayment;