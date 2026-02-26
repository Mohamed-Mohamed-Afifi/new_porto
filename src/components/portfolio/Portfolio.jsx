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
    {
    id: 7,
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQELVlbVNlO3sA/feedshare-shrink_800/feedshare-shrink_800/0/1728584844553?e=2147483647&v=beta&t=NiSZiRhS0KiFAw7uEmyamyzdBJfnF50EqaIsqjSVAhU",
    title: "Building A Scalable E-Commerce Platform With Microservices, Kafka, And Kubernetes",
    github: "https://github.com/Mohamed-Mohamed-Afifi/Online_Store_Integration",
    demo: "https://github.com/Mohamed-Mohamed-Afifi/Online_Store_Integration",
  },
  {
    id: 8,
    image:
      "https://user-images.githubusercontent.com/67495989/228755620-07c34007-c96a-4741-961b-70f70ec472c0.png",
    title: "An HR Management System designed to streamline HR processes Using Spring Boot,JPA and Spring Security ",
    github: "https://github.com/Mohamed-Mohamed-Afifi/HR_Management_System",
    demo: "https://github.com/Mohamed-Mohamed-Afifi/HR_Management_System",
  },
    {
    id: 9,
    image:
      "https://media.licdn.com/dms/image/v2/C4D1BAQFjCXX7PmmYaw/company-background_10000/company-background_10000/0/1628009857259/wondertravelofficial_cover?e=2147483647&v=beta&t=b73P9RC5ZvTZx7qRHdC_T4BraNNyrG6uqXPdYkqYdFQ",
    title: "شركة NDC Portal بتفتحلك باب لعالم من الرحلات والخدمات السياحية المتكاملة",
    github: "https://github.com/WT-NDC/odeysys/pull/6451",
    demo: "https://ndceg.com/odeysysportal/login/loginForm",
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7F8vzorTLzgHMvepnx73vNebCkPdWnnrAA&s",
    title: "An AI-driven service assistant capable of resolving customer concerns with intelligent questions and friendly conversation",
    github: "https://github.com/WT-NDC/odeysys/pull/6451",
    demo: "https://www.vodafone.co.uk/business/insights-articles/tobi-not-tobi-ai-transforming-customer-experience",
  }
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
