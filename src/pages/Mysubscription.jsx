import React from 'react';
import { useNavigate } from "react-router-dom";
import SubscriptionList from "../Components/SubscriptionList"
import NavbarLogin from '../Components/NavbarLogin';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const Mysubscription = () => {

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
            <NavbarLogin/>
            <div className="container-fluid" style={containerStyle}>

                <MDBRow>

                    <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
                        <img className='image-fluid' href="#" src="./src/assets/brand.png" width="400" alt="" />
                        <h1 className='display-1' style={textStyle}>Last Breath</h1>
                    </MDBCol>

                    <MDBCol col='4' md='6' style={containerStyle}>

                        <div className="d-flex flex-column ms-5 mt-5">

                            <div className="text-center">
                                <h1 className="mt-1 mb-5 mt-5 pb-1" style={loginStyle}>My subscription</h1>
                            </div>

                            <SubscriptionList/>

                        </div>

                    </MDBCol>

                </MDBRow>
            </div>
        </div>
    );
}

export default Mysubscription;