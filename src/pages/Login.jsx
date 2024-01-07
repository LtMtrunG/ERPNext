import React, { useContext, useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Authenticator } from "@aws-amplify/ui-react";
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { UserContext } from '../UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Hub } from 'aws-amplify/utils'
import '@aws-amplify/ui-react/styles.css'

const Login = () => {

    const textStyle = {
        color: '#243C54',
        fontWeight: 'bold',
    };

    const loginStyle = {
        color: '#FFFFFF',
        fontWeight: 'bold',
    };

    const nameStyle = {
        color: '#FFFFFF',
        fontWeight: 'medium',
    };

    const containerStyle = {
        position: 'relative',
        backgroundColor: '#243C54',
        width: '100vw',
        height: '100vh',
        paddingLeft: 0,
    };

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    Hub.listen('auth', ({ payload }) => {
        switch (payload.event) {
            case 'signedIn':
                console.log('user have been signedIn successfully.');
                if (redirect !== false) {
                    console.log(user);
                    navigate('/HomeLogin');
                }
                break;
            case 'signedOut':
                console.log('user have been signedOut successfully.');
                break;
            case 'tokenRefresh':
                console.log('auth tokens have been refreshed.');
                break;
            case 'tokenRefresh_failure':
                console.log('failure while refreshing auth tokens.');
                break;
            case 'signInWithRedirect':
                console.log('signInWithRedirect API has successfully been resolved.');
                break;
            case 'signInWithRedirect_failure':
                console.log('failure while trying to resolve signInWithRedirect API.');
                break;
            case 'customOAuthState':
                logger.info('custom state returned from CognitoHosted UI');
                break;
        }
    });

    const handleUserUpdateAndNavigate = (currUser) => {
        // Assuming userStateToUpdate is the new user state value
        setUser(currUser);
        navigate('/HomeLogin'); // Replace '/newPage' with your desired path
    };


    return (
        <div className="container-fluid" style={containerStyle}>
            <MDBRow>

                <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
                    <img className='image-fluid' href="#" src="./src/assets/brand.png" width="400" alt="" />
                    <h1 className='display-1' style={textStyle}>Last Breath</h1>
                </MDBCol>

                <MDBCol col='10' md='6'>

                    <div className="d-flex flex-column ms-5 mt-5">

                        <Authenticator>
                            {({ signOut, user }) => (
                                <main>
                                    <div class="col  d-flex justify-content-end align-items-start">
                                    <h3 style={nameStyle}>Hi, {user.username}</h3>

                                    </div>
                                    <div className="text-center">
                                        <h1 className="mb-5 mt-5 pb-1" style={loginStyle}>Log in successfully</h1>
                                    </div>
                                    <div className="container d-flex flex-column justify-content-center">
                                        <div className="row justify-content-center">
                                            <MDBBtn
                                                className="col-md-7 mb-1"
                                                style={{ color: '#243C54', background: 'white', border: 'none', height: '40px' }}
                                                onClick={() => handleUserUpdateAndNavigate(user)}
                                            >Go to home page</MDBBtn>
                                        </div>
                                    </div>
                                    {/* <button onClick={signOut}>Sign out</button> */}
                                </main>
                            )}
                        </Authenticator>

                    </div>

                </MDBCol>

            </MDBRow>
        </div>
    );
}

export default Login;