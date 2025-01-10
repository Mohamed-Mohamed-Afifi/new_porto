import { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

class Experience extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }

  render() {
    return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experiences</h2>
        <div className="container experience__container">
          <div
            className="experience__frontend"
            data-aos="fade-up" // Animation for this element
          >
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">LoveIt</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Senior</small>
                </div>
              </article>
            </div>
          </div>
          <div
            className="experience__backend"
            data-aos="fade-up" // Animation for this element
          >
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Spring Boot</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Spring Data JPA</h4>
                  <small className="text-light">LoveIt</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Next.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details" data-aos="zoom-in">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
