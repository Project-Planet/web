import React from "react";
import "../../css/Events.css";
import { Carousel } from "react-bootstrap";

function Events() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section
      id="testimonials"
      style={{
        backgroundImage: "url(/img/nature6.svg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative",
        top: "10%",
      }}
    >
      <div className="container">
        <div className="section-header" id="htext">
          <h2>Upcoming Events</h2>
          <p>
            Hurry up and participate in the ongoing events and get the change to
            claim some owesome rewards and a chance to get featured in our
            handlers!{" "}
          </p>
        </div>
        <div className="items">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="testimonial-carousel">
              <p>
                Register yourself and post your work on Social Media tagging us
                and get a chance to win some rewards and get featured in our
                handlers!
              </p>
              <img
                src="img/event/cityclean.jpg"
                className="testimonial-img"
                alt="city_clean"
              />
              <h3>Make the City Clean</h3>
              <h4>Start: 30 April 22</h4>
            </Carousel.Item>
            <Carousel.Item className="testimonial-carousel">
              <p>
                Register yourself and post your work on Social Media tagging us
                and get a chance to win some rewards and get featured in our
                handlers!
              </p>
              <img
                src="img/event/foodforpoor.jpeg"
                className="testimonial-img"
                alt="food_for_poor"
              />
              <h3>Food for Poor</h3>
              <h4>Start: 30 April 2022</h4>
            </Carousel.Item>
            <Carousel.Item className="testimonial-carousel">
              <p>
                Register yourself and post your work on Social Media tagging us
                and get a chance to win some rewards and get featured in our
                handlers!
              </p>
              <img
                src="img/event/breachthebeach.jpg"
                className="testimonial-img"
                alt="breach_the_beach"
              />
              <h3>Breach from the Beach</h3>
              <h4>Start: 30 April 2022</h4>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Events;
