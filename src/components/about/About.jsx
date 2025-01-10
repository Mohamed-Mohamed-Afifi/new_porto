import { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";

class About extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }

  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div
            className="about__me"
            data-aos="fade-right" // Animation for this element
          >
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div
            className="about__content"
            data-aos="fade-left" // Animation for this element
          >
            <div className="about__cards">
              <article className="about__card" data-aos="zoom-in">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className="about__card" data-aos="zoom-in">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+ WorldWide</small>
              </article>
              <article className="about__card" data-aos="zoom-in">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>8 Completed Projects</small>
              </article>
            </div>
            <p data-aos="fade-up">
              Junior Full-Stack Developer skilled in React.js, Spring Boot, and
              database integration. Skilled in converting system requirements
              into ERD diagrams, creating physical databases schema, and
              building back-end services to handle user requests. Skilled in
              developing user interfaces using React JS and Redux Toolkit, with
              a focus on creating dynamic and responsive front-end solutions.
            </p>
            <a href="#contact" className="btn btn-primary" data-aos="fade-up">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
