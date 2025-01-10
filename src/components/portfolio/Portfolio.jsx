import { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./portfolio.css";

// The data array
const data = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/gradient-world-water-day-landing-page-template_23-2149253987.jpg",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Mohamed-Mohamed-Afifi/Atomic-Landing-page",
    demo: "https://sweet-sfogliatella-147cd2.netlify.app/#screenshot",
  },
  {
    id: 2,
    image: "https://cruip.com/wp-content/uploads/edd/2022/08/cube-3.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Mohamed-Mohamed-Afifi/Dark-mode",
    demo: "https://bespoke-bonbon-c5d6c2.netlify.app/",
  },
  {
    id: 3,
    image:
      "https://cdn.dribbble.com/users/6828964/screenshots/15392335/artist_final_final.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github:
      "https://github.com/Mohamed-Mohamed-Afifi/Gallery-landing-page-2019-",
    demo: "https://relaxed-gnome-5d76b6.netlify.app/",
  },
  {
    id: 4,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e987b16742005.562cac4c230e3.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Mohamed-Mohamed-Afifi/Avatar-2019",
    demo: "https://frabjous-smakager-3690da.netlify.app/",
  },
  {
    id: 5,
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202010/CS-Agriculture-Nov9-7-x675.jpg?I4.Fkuav4r.i4H4hiHpRo5RsiscmIdHR",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/Mohamed-Mohamed-Afifi/mill-project",
    demo: "https://www.figma.com/design/2PPc8u7JWC8tRmk9loiXln/%D8%B5%D9%88%D8%A7%D9%85%D8%B9-%D9%85%D9%86%D9%88%D9%81?node-id=0-1&p=f&t=dvkr8ZVXMdvQDN1l-0",
  },
  {
    id: 6,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b33c25121579501.60c8ce783085e.png",
    title: "CryptCurrency Dashboard & Financial Visualization",
    github:
      "https://github.com/Mohamed-Mohamed-Afifi/Weather-App-using-PWA-Redux-React",
    demo: "https://afify-weather-app.netlify.app/",
  },
];

class Portfolio extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Animation happens only once
    });
  }

  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => (
            <article
              key={id}
              className="portfolio__item"
              data-aos="fade-up" // Add AOS animation for each portfolio item
            >
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
