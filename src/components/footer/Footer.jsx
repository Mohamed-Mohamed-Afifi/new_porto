import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import { RiWhatsappLine } from "react-icons/ri";
import "./footer.css";
import { FaCode } from "react-icons/fa";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

class Footer extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation will run once when the element comes into the viewport
    });
  }

  render() {
    return (
      <footer>
        <a href="#" className="footer__logo" data-aos="fade-up">
          MOHAMED
        </a>
        <ul className="permalinks" data-aos="fade-up" data-aos-delay="200">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://www.linkedin.com/in/mohamed-afify-274b4a224/"
            target="_blank"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=201145626715"
            target="_blank"
          >
            <RiWhatsappLine />
          </a>
          <a
            href="https://leetcode.com/u/Mohamed-Mohamed-Afifi/"
            target="_blank"
          >
            <FaCode />
          </a>
          <a href="https://www.youtube.com/@FP0353" target="_blank">
            <IoLogoYoutube />
          </a>
        </div>
        <div
          className="footer__copyright"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <small>
            &copy; Mohamed Mohamed Afify {new Date().getFullYear()}. All rights
            reserved
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
