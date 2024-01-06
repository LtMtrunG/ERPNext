
const Header = () => {
  const containerStyle = {
    position: 'relative',
    backgroundColor: '#243C54',
    width: '100vw',
    paddingLeft: 0,
    // Other styles
    // padding: '0', // Reset padding
    // margin: '0', // Reset margin
  };

  return (
    <div className="container-fluid section" id="aboutUs" style={containerStyle}>
      <div className="row align-items-center">
        <div className="col pl-6">
          <h1 className="nav-link fs-3  fw-bold text-white" href="#">About us</h1>
          <p className="text-white">ERPConnect makes it easy to operate, monitor and manage all activities of departments such as production, logistics, sales, accounting, human resources... on a single platform. With Last Breath, you can manage your business anytime, anywhere on all operating systems and internet-connected devices such as laptops, phones, tablets,...</p>
        </div>
        <div className="col ml-aboutUs">
          <img className="navbar-brand" href="#" src="./src/assets/aboutUs.png" width="430" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
