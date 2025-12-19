import "./Hero.css";
import courierimg from "../../assets/images/courier.png"
import pickup from "../../assets/images/pickup.png"
import trackingImg from "../../assets/images/tracking.jpg"
import customersupport from "../../assets/images/customersupport.png"
import safetyandsecurityimg from "../../assets/images/safetyandsecurity.webp"
import {useNavigate} from "react-router-dom"

const Hero = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Reliable Courier Service for Online Shoppers</h1>

                        <p>
                            RDI2Go Courier Service is a convenient pickup hub for online shoppers,
                            providing a safe and reliable location to collect their packages
                            with ease.
                        </p>

                        <button className="hero-btn" onClick={ () => navigate("/about")}>Learn More</button>
                    </div>
                </div>
            </section>


            {/* TRUST SECTION */}
            <section className="trust">
                <div className="trust-card">
                    <div className="trust-container">
                        {/* Text */}
                        <div className="trust-text">
                            <h2>Your Trusted Courier Partner</h2>

                            <p>
                                At RDI2Go, we prioritize your package safety. Our efficient pickup
                                solutions ensure you receive your orders hassle-free.
                            </p>

                            <p>
                                Experience unparalleled service that simplifies your online shopping
                                journey. We are committed to providing reliable and timely pick-up
                                and deliveries.
                            </p>

                            <button className="hero-btn" onClick={ () => navigate("/about")}>Learn More</button>
                        </div>

                        {/* Image */}
                        <div className="trust-image">
                            <img src={courierimg} alt="Courier service" />
                        </div>
                    </div>
                </div>
            </section>


            {/* STATS BAR */}
            <section className="stats">
                <div className="stats-container">
                    <div className="stat-item">
                        <span className="stat-icon">📦</span>
                        <h3>10k</h3>
                        <p>Packages Delivered</p>
                    </div>

                    <div className="stat-divider"></div>


                    <div className="stat-item">
                        <span className="stat-icon">😊</span>
                        <h3>15k</h3>
                        <p>Satisfied Customers</p>

                    </div>

                    <div className="stat-divider"></div>


                    <div className="stat-item">
                        <span className="stat-icon">📍</span>
                        <h3>1</h3>
                        <p>Locations Available</p>
                    </div>
                </div>
            </section>


            {/* TRUST SECTION */}
            <section className="trust">
                <div className="trust-card">
                    <div className="trust-container">
                        {/* Image */}
                        <div className="trust-image">
                            <img src={pickup} alt="Pickup location" />
                        </div>

                        {/* Text */}
                        <div className="trust-text">
                            <h2>Convenient Pickup Locations</h2>

                            <p>
                                Picking up your packages has never been easier! With RDI2Go’s
                                strategically placed hubs, you can choose the most convenient
                                location and collect your items on your own schedule — no long
                                waits, no missed deliveries.
                            </p>

                            <button className="hero-btn" onClick={ () => navigate("/about")}>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* REAL-TIME TRACKING SECTION */}
            <section className="trust">
                <div className="trust-card">
                    <div className="trust-container">


                        {/* Text */}
                        <div className="trust-text">
                            <h2>Real-time Tracking</h2>

                            <p>
                                Stay in control with real-time shipment tracking. RDI2Go keeps you informed
                                every step of the journey, so you always know where your package is and
                                when it’s ready for collection.
                            </p>

                            <button className="hero-btn" onClick={ () => navigate("/about")}>Learn More</button>
                        </div>

                        {/* Image */}
                        <div className="trust-image">
                            <img src={trackingImg} alt="Real-time tracking" />
                        </div>
                    </div>
                </div>
            </section>





            {/* CUSTOMER SUPPORT SECTION */}
            <section className="trust">
                <div className="trust-card">
                    <div className="trust-container">
                        {/* Image */}
                        <div className="trust-image">
                            <img src={customersupport} alt="Real-time tracking" />
                        </div>

                        {/* Text */}
                        <div className="trust-text">
                            <h2>Customer Support</h2>

                            <p>
                                Our support team is always just a message or call away! At RDI2Go, we believe great service doesn’t stop with delivery, that’s why our friendly team is ready to help with tracking updates, pickup inquiries, and any questions you may have.
                            </p>

                            <button className="hero-btn" onClick={ () => navigate("/about")}>Learn More</button>
                        </div>


                    </div>
                </div>
            </section>





            {/* SAFETY AND SECURITY SECTION */}
            <section className="trust">
                <div className="trust-card">
                    <div className="trust-container">


                        {/* Text */}
                        <div className="trust-text">
                            <h2>Safety and Security</h2>

                            <p>
                            Your packages are secure with our reliable storage solutions. At RDI2Go Courier Service, we prioritize safety and care. Every parcel is handled, stored, and monitored in a controlled environment to ensure it stays protected until you’re ready to collect it.
                            </p>

                            <button className="hero-btn" onClick={ () => navigate("/about")}>Learn More</button>
                        </div>

                        {/* Image */}
                        <div className="trust-image">
                            <img src={safetyandsecurityimg} alt="Real-time tracking" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Hero;
