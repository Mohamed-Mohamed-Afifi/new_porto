import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Import SweetAlert2
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailError: "",
    };
    this.form = createRef();
    this.sendEmail = this.sendEmail.bind(this);
  }

  componentDidMount() {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation will only run once when scrolling to the element
    });
  }

  validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState({
      email,
      emailError: this.validateEmail(email)
        ? ""
        : "Please enter a valid email.",
    });
  };

  sendEmail(e) {
    e.preventDefault();

    if (this.state.emailError) return; // Prevent sending if email is invalid

    emailjs
      .sendForm(
        "service_7ihh5bd",
        "template_zocjjjx",
        this.form.current,
        "5oHK8zdHVJPwnJmkg"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for getting in touch. I'll respond shortly!",
            confirmButtonText: "OK",
          });
          console.log("Message sent:", result.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonText: "OK",
          });
          console.log("Error:", error.text);
        }
      );

    e.target.reset();
  }

  render() {
    return (
      <section id="contact" data-aos="fade-up">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option" data-aos="fade-right">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>mohamed.org050@gmail.com</h5>
              <a href="mailto:mohamed.org050@gmail.com">Send a message</a>
            </div>
            <div className="contact__option" data-aos="fade-left">
              <RiMessengerLine className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>Mohamed Afify</h5>
              <a href="https://www.linkedin.com/in/mohamed-afify-274b4a224/">
                Send a message
              </a>
            </div>
            <div className="contact__option" data-aos="fade-up">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+201145626715</h5>
              <a href="https://api.whatsapp.com/send?phone=201145626715">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} data-aos="fade-up">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <div className="email-input-container">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
              {this.state.emailError && (
                <span className="error-tip">{this.state.emailError}</span>
              )}
            </div>
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
