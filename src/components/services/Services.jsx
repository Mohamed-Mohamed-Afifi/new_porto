import { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiCheck } from "react-icons/bi";
import "./services.css";

class Services extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Animation should happen only once
    });
  }

  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article
            className="service"
            data-aos="fade-up" // Animation for this service
          >
            <div className="service__head">
              <h3>System Analysis</h3>
            </div>
            <ul className="service__list">
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Gather system information directly from clients to understand
                  their requirements.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Analyze the collected information to identify functional and
                  non-functional requirements.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Create detailed requirement documents that define the system's
                  scope and features.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Design UML class diagrams to represent the structure of the
                  system.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Develop ERD diagrams to model the database structure of the
                  system.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Ensure alignment of the proposed design with client
                  expectations and system goals.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Prepare documentation for stakeholders to validate and approve
                  the system design.
                </p>
              </li>
            </ul>
          </article>

          <article
            className="service"
            data-aos="fade-up" // Animation for this service
          >
            <div className="service__head">
              <h3>Frontend Development</h3>
            </div>
            <ul className="service__list">
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Develop modern and dynamic user interfaces using React.js.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>Efficiently manage application state with Redux Toolkit.</p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Implement responsive designs with Material-UI (MUI)
                  components.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Style applications with the flexibility of Tailwind CSS for
                  custom designs.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>Utilize Bootstrap for consistent and grid-based layouts.</p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Enhance styling capabilities with Sass for advanced CSS
                  features.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Ensure cross-browser compatibility and a seamless user
                  experience.
                </p>
              </li>
            </ul>
          </article>

          <article
            className="service"
            data-aos="fade-up" // Animation for this service
          >
            <div className="service__head">
              <h3>Backend Development</h3>
            </div>
            <ul className="service__list">
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Develop robust and scalable backend systems using Spring Boot.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Implement data persistence with JPA (Java Persistence API) and
                  Hibernate.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Design and manage relational databases with SQL for efficient
                  data storage.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Create and expose RESTful web services to support frontend
                  integration.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Ensure secure and efficient API endpoints with proper
                  authentication and authorization.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Optimize database queries for better performance and
                  scalability.
                </p>
              </li>
              <li data-aos="zoom-in">
                <BiCheck className="service__list-icon" />
                <p>
                  Write clear and maintainable code following best practices and
                  design patterns.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
