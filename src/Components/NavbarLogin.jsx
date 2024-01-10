import { MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

const NavbarLogin = () => {
    const textStyle = {
        color: '#243C54',
    };

    const scrollToSection = (id) => {
        scroll.scrollTo(document.getElementById(id).offsetTop, {
            smooth: true,
            duration: 500,
        });
    };

    const navigate = useNavigate();

    const handleLogoutAndNavigate = () => {
        // Assuming userStateToUpdate is the new user state value
        signOut()
        navigate('/'); // Replace '/newPage' with your desired path
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '100vw' }} >
            <Link className="navbar-brand pl-logo" to="/HomeLogin">
                <img className="navbar-brand" to="/HomeLogin" src="https://amplify-erpconnect-dev-135834-deployment.s3.amazonaws.com/brand.png" width="80" alt="" style={{ marginRight: '-40px' }}/>
            </Link>
            <div class="container">
                <div className="col-10 col-md-8">
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link fs-5  fw-bold" style={textStyle} to="/HomeLogin">ERPConnect</Link>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link fs-5 fw-bold hello"
                                    style={textStyle}
                                    to="aboutUs"
                                    onClick={() => scrollToSection('aboutUs')}
                                >About Us</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link fs-5 fw-bold hello"
                                    style={textStyle}
                                    to="pricing"
                                    onClick={() => scrollToSection('pricing')}                                
                                >Pricing</ScrollLink> 
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5 fw-bold hello"
                                    style={textStyle}
                                    to="/Mysubscription"
                                >My subscription</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col align-items-center">
                    <MDBBtn
                        className="col-sm-5 fs-5"
                        style={{ color: '#FFFFFF', background: '#243C54', border: 'none', height: '40px' }}
                        onClick={() => navigate('/Freetrial1')}
                    >Try for free</MDBBtn>
                    <MDBBtn 
                        className="col-sm-5 ml-3 fs-5" 
                        style={{ color: '#FFFFFF', background: '#243C54', border: 'none', height: '40px' }}
                        onClick={() => handleLogoutAndNavigate()}
                    >Sign out</MDBBtn>
                </div>
            </div>
        </nav>

    )
}

export default NavbarLogin;

