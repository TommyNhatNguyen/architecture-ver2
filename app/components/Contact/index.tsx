import React from "react";
import "./style.scss";
type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="sccontact --ptb" id="sccontact">
      <div className="container-fluid">
        <div className="sccontact-wrapper">
          <div className="sccontact__content">
            <h2 className="sccontact__content-title">
              Book Now for Unforgettable luxury <span>and</span> tranquility
            </h2>
            <p className="sccontact__content-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea vero
              qui ratione voluptate in et a veritatis, voluptates, est officiis
              cupiditate, commodi ipsa ut facilis omnis atque beatae deserunt!
              Voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Esse, modi laboriosam doloremque cumque nostrum voluptatibus
              possimus harum. Voluptatum consequatur laboriosam ab nam similique
              itaque. Sunt iste ex obcaecati beatae enim?
            </p>
            <button className="btn btn-contact --white">
              <span className="btn__text">Contact us</span>
            </button>
          </div>
        </div>
      </div>
      <div className="backdrop"></div>
    </section>
  );
};

export default Contact;
