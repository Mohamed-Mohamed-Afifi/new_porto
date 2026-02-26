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
  CRM & Backend Integration Engineer with deep expertise in <strong>Oracle Siebel CRM</strong> customization, enterprise integrations, and distributed system design. Extensive experience in developing scalable backend services using <strong>Spring Boot</strong>, <strong>JPA</strong>, and <strong>Hibernate</strong>, implementing <strong>RESTful APIs</strong>, and optimizing complex <strong>SQL</strong> queries for high-volume transactional systems. Led event-driven integration architectures using <strong>Kafka</strong> and implemented <strong>CI/CD automation</strong> through <strong>Jenkins</strong> to enhance deployment efficiency and system reliability. Adept at performance tuning, system troubleshooting, and ensuring high availability across mission-critical enterprise environments.
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
