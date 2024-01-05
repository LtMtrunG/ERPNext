import { MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '100vw' }} >
            <Link className="navbar-brand pl-logo" to="/">
                <img className="navbar-brand" to="/" src="./src/assets/brand.png" width="80" alt="" style={{ marginRight: '-40px' }}/>
            </Link>
            <div class="container">
                <div className="col">

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link fs-5 fw-bold" style={textStyle} to="/">Last Breath</Link>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link fs-5 fw-bold hello"
                                    style={textStyle}
                                    to="aboutUs"
                                    smooth={true}
                                    onClick={() => scrollToSection('aboutUs')}
                                >About Us</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link fs-5 fw-bold hello"
                                    style={textStyle}
                                    to="pricing"
                                    smooth={true}
                                    onClick={() => scrollToSection('pricing')}
                                >Pricing</ScrollLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col align-items-center">
                    <MDBBtn
                        className="col-sm-3 ml-6 fs-5"
                        style={{ color: '#FFFFFF', background: '#243C54', border: 'none', height: '40px' }}
                        onClick={() => navigate('/Login')}
                    >Try for free</MDBBtn>
                    {/* <a href="https://erpconnect.auth.us-east-1.amazoncognito.com/login?client_id=32snlld19t64ftvfuqjgonk2ib&login_uri=https%3A%2F%2Flocalhost%3A5173%2FLogin"> */}
                    <MDBBtn 
                        className="col-sm-3 ml-5 fs-5" 
                        style={{ color: '#FFFFFF', background: '#243C54', border: 'none', height: '40px' }}
                        onClick={() => navigate('/Login')}
                    >Log in</MDBBtn>
                    {/* </a> */}
                </div>
            </div>
        </nav>

    )
}

export default Navbar;

