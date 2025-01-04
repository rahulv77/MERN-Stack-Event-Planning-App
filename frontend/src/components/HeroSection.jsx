import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Moment Maker</h3>
        <div>
          <h1>Your Personal Moment Maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
          <button className="booknowbtn">BOOK NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;