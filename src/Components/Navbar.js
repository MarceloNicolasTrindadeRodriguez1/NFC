import './Navbar.css'

function Navbar(){
    return ( 
        <div className="container-fluid">
        <a className="navbar-brand d-flex justify-content-center">
          <img
            src="/img/logo.png"
            alt="Logo"
            width={300}
            height={120}
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
  );
}

export default Navbar;