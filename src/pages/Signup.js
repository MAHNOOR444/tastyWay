import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPizzaSlice, FaHamburger, FaIceCream } from "react-icons/fa";

const Signup = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#fff8e1",
        overflow: "hidden",
      }}
    >
      {/* Floating Food Icons */}
      <FaPizzaSlice
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "4rem",
          color: "#ffc107",
          opacity: 0.4,
          transform: "rotate(-20deg)",
        }}
      />
      <FaHamburger
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          fontSize: "4rem",
          color: "#ff9800",
          opacity: 0.4,
        }}
      />
      <FaIceCream
        style={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          fontSize: "4rem",
          color: "#e91e63",
          opacity: 0.4,
        }}
      />

      {/* Signup Form */}
<div
  className="bg-white p-5 rounded shadow mt-8"
  style={{ 
    width: "100%", 
    maxWidth: "450px", 
    zIndex: 1, 
    marginTop: "100px"  // 👈 Push it below the navbar
  }}
  data-aos="zoom-in"
>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="example@mail.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" id="password" placeholder="******" />
          </div>

          <div className="mb-3">
            <label htmlFor="userType" className="form-label fw-semibold">I am a</label>
            <select className="form-select" id="userType">
              <option value="customer">Customer</option>
              <option value="provider">Food Provider</option>
              <option value="rider">Rider</option>
            </select>
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-decoration-none fw-semibold">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
