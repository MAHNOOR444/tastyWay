import { Outlet, Link } from "react-router-dom";
import logo from './logo.png'; 
import './App.css';
import './Footer.css'; // Add this new CSS file for custom footer styling

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow-sm fixed-top">
        <div className="container-fluid">
          {/* Left-most Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="TastyWay Logo"
              height="40"
              className="me-2"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <span className="fw-bold text-dark">TastyWay</span>
          </Link>

          {/* Center Navigation */}
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav w-100 d-flex justify-content-center">
              {["Home", "Customers", "Riders", "Restaurant Owner", "About Us"].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link text-dark fw-semibold nav-full"
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-side Buttons */}
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-dark" to="/login">Login</Link>
            <Link className="btn btn-dark" to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>

      <Outlet />

      {/* Footer */}
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Brand Info */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">TastyWay</h5>
              <p>Your go-to destination for lightning-fast, delicious, and reliable food delivery — connecting you with your favorite local flavors.</p>
            </div>

            {/* Social Links */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light"><i className="fab fa-facebook-f "></i></a>
                
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light"><i className="fab fa-twitter"></i></a>
                
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light"><i className="fab fa-instagram"></i></a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Contact</h5>
              <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i>123 Foodie Lane, FlavorTown</p>
              <p className="mb-1"><i className="fas fa-envelope me-2"></i>support@tastyway.com</p>
              <p><i className="fas fa-phone me-2"></i>+91 98765 43210</p>
            </div>
          </div>

          <hr className="border-light" />
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} TastyWay. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
