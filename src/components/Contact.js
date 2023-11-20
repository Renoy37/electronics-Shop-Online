import React from "react"
import "./Contact.css"

const Contact = () => {
  return (
    <section id="Contact">
      <div
        id="Contact"
        className="contact-container"
        style={{ color: "black" }}
      >
        <div className="question">
          <h2 className="Contact">Contact Us</h2>
          <div>
            <p>
              At Renon, we offer a wide selection of high-quality electronics,
              from smartphones and smartwatches to woofers, flash drives,
              laptops, Wi-Fi routers, and memory cards. We are committed to
              providing the latest in technology and innovation to enhance your
              daily life. Our feedback panel ensures that we are always
              listening to our customers, to provide them with the best possible
              experience.
            </p>

            <p>Have any Suggestions to help us become better?</p>
            <p>
              You can also read our{" "}
              <span className="policy">Privacy Policy</span>
            </p>
          </div>
        </div>

        <div className="form-contain">
          <form className="form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
