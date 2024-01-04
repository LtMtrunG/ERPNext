import React from 'react';
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import NavbarLogin from '../Components/NavbarLogin';

const Freetrial1 = () => {

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

  const navigate = useNavigate();

  return (
    <div>
      <NavbarLogin />
      <div className="container-fluid" style={containerStyle}>

        <MDBRow>

          <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
            <img className='image-fluid' href="#" src="./src/assets/brand.png" width="400" alt="" />
            <h1 className='display-1' style={textStyle}>Last Breath</h1>
          </MDBCol>

          <MDBCol col='10' md='6'>

            <div className="d-flex flex-column ms-5 mt-5">
              <h1 className="mt-1 mb-5 mt-5 pb-1 text-center" style={loginStyle}>Free trial</h1>
              <p className='text-center mb-5' style={loginStyle}>Your trial will last for 14 days; after that, if you do not purchase a plan, all your data will be LOST</p>


              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-4">

                <MDBBtn 
                  className="col-md-4 mb-1" 
                  style={{ color: '#243C54', background: 'white', border: 'none' }}
                  onClick={() => navigate('/Freetrial2')}
                >Get started</MDBBtn>

              </div>

            </div>

          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default Freetrial1;