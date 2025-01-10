import React, { Suspense, lazy } from "react";
import "./App.css";
// Lazy load the components
const Header = lazy(() => import("./components/header/Header"));
const Nav = lazy(() => import("./components/nav/Nav"));
const About = lazy(() => import("./components/about/About"));
const Experience = lazy(() => import("./components/experience/Expreience"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
// const Testimonials = lazy(() =>
//   import("./components/testimonials/Testimonials")
// );
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

class App extends React.Component {
  render() {
    return (
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        }
      >
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
{/*         <Testimonials /> */}
        <Contact />
        <Footer />
      </Suspense>
    );
  }
}

export default App;
