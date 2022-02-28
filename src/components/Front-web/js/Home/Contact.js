import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../css/Contact.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneCallbackSharpIcon from "@material-ui/icons/PhoneCallbackSharp";
import MailIcon from "@material-ui/icons/Mail";
import { toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      return toast.dark("Please fill in all fields!");
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email.toLowerCase()
      )
    ) {
      return toast.warning("Please enter valid email!");
    }
    if (phone.length !== 10) {
      return toast.warning("Please enter valid phone number!");
    }
    if (message.length < 20) {
      return toast.dark("Message should be of atleast 20 characters!");
    }

    const emailData = {
      from_name: name,
      to_name: "Project planet",
      email,
      phone,
      message,
    };

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div
      id="contactUs"
      style={{
        backgroundImage: "url(/img/nature8.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        position: "relative",
        top: "10%",
      }}
    >
      <div className="container">
        <div className="row">
          <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
            Do you want to Reach out to us?
          </h1>
        </div>
        <div className="contactSection">
          <div className="row1 col-lg-6">
            <h4>We'd love to hear from you!</h4>

            <form onSubmit={handleSubmit}>
              <div className="row input-container">
                <div className="col-md-12">
                  <input type="hidden" name="to_name" value="Project planet" />
                  <div className="styled-input wide">
                    <input
                      className="inputForm"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="from_name"
                    />
                    <label>Name</label>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="styled-input">
                    <input
                      className="inputForm"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                    />
                    <label>Email</label>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 ">
                  <div className="styled-input">
                    <input
                      className="inputForm"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                    />
                    <label>Phone Number</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="styled-input wide">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="inputForm"
                      name="message"
                    ></textarea>
                    <label>Message</label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-ctnus">
                Submit
              </button>
            </form>
          </div>
          <div className="row2 col-lg-6">
            <h4>Reach out us</h4>
            <div className="col-xl-12 ">
              <div className="single-cta">
                <div className="cta-text">
                  <LocationOnIcon className="ctn-icon" />
                  <br />
                  <h5>Find us</h5>
                  <span>Lovely Professional University, Punjab</span>
                </div>
              </div>
            </div>
            <div className="col-xl-12 ">
              <div className="single-cta">
                <div className="cta-text">
                  <PhoneCallbackSharpIcon className="ctn-icon" />
                  <br />
                  <h5>Call us</h5>
                  <span>+91 8146 XXX XXX</span>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="single-cta">
                <div className="cta-text">
                  <MailIcon className="ctn-icon" />
                  <br />
                  <h5>Mail us</h5>
                  <a href="mailto:mail.projectplanet@gmail.com">
                    <span>mail.projectplanet@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
