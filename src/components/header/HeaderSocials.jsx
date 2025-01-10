import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/mohamed-afify-274b4a224/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Mohamed-Mohamed-Afifi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/Mohamed-Mohamed-Afifi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <FaCode />
        </a>
      </div>
    );
  }
}

export default HeaderSocials;
