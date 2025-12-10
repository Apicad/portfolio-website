import "./Contact.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "5a30158b-ea8e-406b-accc-19dc613b7a4f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult(data.message || "Something went wrong!");
    }
  };

  return (
    <div className="container">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={onSubmit}>
          <h2>Contact</h2>
          <p id="contact-p">Lets get connected!</p>
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="field"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="field"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="message">Leave a message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
          {result && <p className="result-message">{result}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
