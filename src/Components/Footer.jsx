
const Footer = () => {

    const cardStyle = {
        backgroundColor: '#243C54',
        width: '20rem',
    };

    const itemStyle = {
        backgroundColor: '#243C54',
    }

    const textStyle = {
        color: '#243C54',
    };

    const buttonStyle = {
        backgroundColor: '#EA0774',
    }


    return (
        <nav className="footer" style={{width: '100vw'}}>
            <div className="container-fluid text-center mb-5">
            <h1 className="nav-link fs-3  fw-bold mt-5 mb-5" style={textStyle} href="#">Pricing</h1>
                <div className="row align-items-center pl-pricing">
                    <div className="col">
                        <div className="card lower-card" style={cardStyle}>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h4 className="card-title text-start text-white">Standard</h4>
                                <h1 className="card-title text-center text-white mt-4 mb-4">$15.00</h1>
                                <ul className="list-group">
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 1 hour CPU time per day</li>
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 0.5 GB Database</li>
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 5 GB Storage</li>
                                </ul>
                                <a href="#" className="btn text-white mt-4" style={buttonStyle}>Get started today</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={cardStyle}>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h4 className="card-title text-start text-white">Professional</h4>
                                <h1 className="card-title text-center text-white mt-4 mb-4">$30.00</h1>
                                <ul className="list-group">
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 3 hours CPU time per day</li>
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 1 GB Database</li>
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 25 GB Storage</li>
                                </ul>
                                <a href="#" className="btn text-white mt-4 p-2" style={buttonStyle}>Get started today</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card lower-card" style={cardStyle}>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h4 className="card-title text-start text-white">Enterprise</h4>
                                <h1 className="card-title text-center text-white mt-4 mb-4">$60.00</h1>
                                <ul className="list-group">
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 6 hours CPU time per day</li>
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 3 GB Database</li>
                                    <li className="list-group-item border-0 pl-4 text-start text-white" style={itemStyle}>&#8226; 25 GB Storage</li>
                                </ul>
                                <a href="#" className="btn text-white mt-4" style={buttonStyle}>Get started today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Footer
