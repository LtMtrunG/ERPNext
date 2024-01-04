import React from 'react';
import Navbar from './Components/Navbar'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const Signup = () => {

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
            <Navbar />
            <MDBContainer fluid className="p-3  h-custom">

                <MDBRow>

                    <MDBCol col='10' md='6' className='d-flex flex-column align-items-center'>
                        <img className='image-fluid' href="#" src="./src/assets/brand.png" width="400" alt="" />
                        <h1 className='display-1' style={textStyle}>Last Breath</h1>
                    </MDBCol>

                    <MDBCol col='4' md='6' style={containerStyle}>

                        <div className="d-flex flex-column ms-5 mt-5">

                            <div className="text-center">
                                <h1 className="mt-1 mb-5 mt-5 pb-1" style={loginStyle}>Sign up</h1>
                            </div>

                            <div className="container d-flex flex-column justify-content-center">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 mb-5">
                                        <MDBInput
                                            type="text"
                                            id="username"
                                            className="form-control"
                                            placeholder="Username"
                                            style={{ width: '100%' }}
                                        />
                                    </div>

                                    <div className="col-md-10 mb-5">
                                        <MDBInput
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div className="col-md-10 mb-5">
                                        <MDBInput
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    <MDBBtn className="col-md-4 mb-1" style={{ color: '#243C54', background: 'white', border: 'none' }}>Sign up</MDBBtn>
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-4">

                                <p class="text-muted mb-0">Already have an account?</p>
                                <MDBBtn outline className='mx-2' color='#FFFFFF' style={{ color: '#FFFFFF', fontWeight: 'bold', border: 'none' }}>
                                    Log in
                                </MDBBtn>

                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>


            </MDBContainer>
        </div>
    );
}

export default Signup;