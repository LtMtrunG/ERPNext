
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <a className="navbar-brand" href="#">
                <img className="navbar-brand" href="#" src="./src/assets/brand.png" width="80" alt="" />
            </a>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link fs-3 fw-bold" href="#">Last Breath</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5 fw-bold" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5 fw-bold" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

