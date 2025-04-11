import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from './hero-bg1.webp';
import mobileMock from './mobile-ui.jpeg';
import mobileMockRider from './Riders.webp';
import mobileMockProvider from './resturants.png';
import './App.css'; // Add this for extra custom CSS

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "Lightning-fast delivery",
      description: "Get your meals delivered hot and fresh, faster than ever."
    },
    {
      title: "Top-rated food providers",
      description: "Partnered with the best local restaurants and cloud kitchens."
    },
    {
      title: "Real-time tracking",
      description: "Track your order from kitchen to doorstep live on your phone."
    },
    {
      title: "Secure payments",
      description: "Multiple secure payment options including UPI, cards, and wallets."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex flex-column justify-content-center align-items-center text-white text-center hero-section"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "zoomFade 4s ease-in-out"
        }}
      >
        <h1 className="display-3 fw-bold animate__animated animate__fadeInDown" style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "1rem 2rem",
          borderRadius: "12px"
        }}>
          Welcome to <span style={{ color: "#ffc107" }}>TastyWay</span>
        </h1>
        <p className="lead mt-3 animate__animated animate__fadeInUp" style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "0.5rem 1rem",
          borderRadius: "8px"
        }}>
          Get your best Appetite with us!
        </p>
      </section>

      {/* Features */}
      <section className="container py-5 text-start">
        <h2 className="mb-5 fw-bold text-center">Why Choose TastyWay?</h2>
        <div className="row">
          {features.map((feature, idx) => (
            <div className="col-md-6 mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
              <div className="p-4 shadow rounded feature-box h-100 feature-hover bg-light">
                <div className="feature-title fw-semibold fs-5 mb-2">{feature.title}</div>
                <div className="feature-desc text-muted">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customers Section */}
      <section className="bg-white py-5 section-decor" data-aos="fade-right">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="mb-4 mb-lg-0 col-lg-6">
            <h3 className="fw-bold mb-3">For Customers</h3>
            <p>
              Discover the tastiest dishes from local restaurants, track your order in real-time,
              and enjoy a seamless food delivery experience like never before.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img src={mobileMock} alt="Mobile UI" className="img-fluid shadow rounded" />
          </div>
        </div>
      </section>

      {/* Riders Section */}
      <section className="bg-light py-5 section-decor" data-aos="fade-left">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-6 text-center order-lg-2 mb-4 mb-lg-0">
            <img src={mobileMockRider} alt="Rider UI" className="img-fluid shadow rounded"
              style={{ width: "250px", height: "450px" }} />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">For Riders</h3>
            <p>
              Join our fleet, earn on your own schedule, and help connect people with the food they
              love. Full support and flexible shifts guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Food Providers Section */}
      <section className="bg-white py-5 section-decor" data-aos="zoom-in-up">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-6 text-center">
            <img src={mobileMockProvider} alt="Provider UI" className="img-fluid shadow rounded" />
          </div>
          <div className="ms-lg-5 mb-4 mb-lg-0 col-lg-6">
            <h3 className="fw-bold mb-3">For Food Providers</h3>
            <p>
              Expand your reach and grow your business by partnering with TastyWay. We provide
              intuitive dashboards, order management tools, and access to a growing customer base.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
