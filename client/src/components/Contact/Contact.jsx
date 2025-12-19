import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-card">
        <h2>Get in Touch</h2>
        <p>
          Have questions or need assistance? Reach out to us and our team will
          get back to you as soon as possible.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
