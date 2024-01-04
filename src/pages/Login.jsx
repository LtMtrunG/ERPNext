import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

const Login = () => {

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
        <div className="container-fluid" style={containerStyle}>

            <MDBRow>

                <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
                    <img className='image-fluid' href="#" src="./src/assets/brand.png" width="400" alt="" />
                    <h1 className='display-1' style={textStyle}>Last Breath</h1>
                </MDBCol>

                <MDBCol col='10' md='6'>

                    <div className="d-flex flex-column ms-5 mt-5">

                        <div className="text-center">
                            <h1 className="mt-1 mb-5 mt-5 pb-1" style={loginStyle}>Log in</h1>
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

                                <MDBBtn
                                    className="col-md-4 mb-1"
                                    style={{ color: '#243C54', background: 'white', border: 'none', height: '40px' }}
                                    onClick={() => navigate('/HomeLogin')}
                                >Log in</MDBBtn>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-4">

                            <p class="text-muted mb-0">Don't have an account?</p>
                            <MDBBtn 
                                outline 
                                className='mx-2' 
                                color='#FFFFFF' 
                                style={{ color: '#FFFFFF', fontWeight: 'bold', border: 'none', height: '40px' }} 
                                onClick={() => navigate('/Signup')}
                            >Sign up</MDBBtn>

                        </div>

                    </div>

                </MDBCol>

            </MDBRow>
        </div>
    );
}

export default Login;