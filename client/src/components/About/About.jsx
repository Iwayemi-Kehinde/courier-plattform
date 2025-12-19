import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about">
      <div className="about-container">

        {/* WHO WE ARE */}
        <div className="about-section">
          <h1>Who We Are</h1>
          <p>
            RDI2Go is dedicated to providing a seamless delivery experience for
            online shoppers. Our focus is on ensuring the safe pickup and
            delivery of packages, making it easy for you to manage your online
            orders without stress.
          </p>

          {/* <button onClick={() => navigate("/auth")} className="about-btn">
            Get Started
          </button> */}
        </div>

        <div className="about-divider"></div>

        {/* JOIN US */}
        <div className="about-section">
          <h2>Join Us Today</h2>
          <p>
            Discover why we are the preferred choice for countless online
            shoppers. Enjoy a reliable, safe, and convenient package pickup
            experience designed with your needs in mind.
          </p>

          <button onClick={() => navigate("/auth")} className="about-btn">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
