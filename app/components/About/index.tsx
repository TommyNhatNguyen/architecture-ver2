import React from "react";
import "./style.scss";
import Image from "next/image";
import { ArrowLeft, Building, ChevronRight, Smile } from "lucide-react";
import { ArrowRight } from "lucide-react";
type Props = {};

const About = (props: Props) => {
  return (
    <section className="scabout " id="scabout">
      <div className="scabout-wrapper">
        <div className="scabout-top --pt">
          <div className="container-fluid">
            <div className="scabout__left">
              <div className="scabout__left-top">
                <h3 className="title">
                  Modern way of living in a cluster home
                </h3>
                <div className="content">
                  <ul className="content__left">
                    <li className="content__left-item">
                      <p className="para --top">Property size:</p>
                      <p className="para --bottom">1000 sq.ft</p>
                    </li>
                    <li className="content__left-item">
                      <p className="para --top">Structure:</p>
                      <p className="para --bottom">Two Bedrooms</p>
                    </li>
                    <li className="content__left-item">
                      <p className="para --top">Accomodation:</p>
                      <p className="para --bottom">Funished</p>
                    </li>
                    <li className="content__left-item">
                      <p className="para --top">Rent between:</p>
                      <p className="para --bottom">$1000 - $2000</p>
                    </li>
                  </ul>
                  <ul className="content__right">
                    <li className="content__right-item">
                      <p className="para --top">Heating:</p>
                      <p className="para --bottom">Floor heating</p>
                    </li>
                    <li className="content__right-item">
                      <p className="para --top">Property type:</p>
                      <p className="para --bottom">Townhome</p>
                    </li>
                    <li className="content__right-item">
                      <p className="para --top">Parking spaces:</p>
                      <p className="para --bottom">1 space</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="scabout__right">
              <ul className="scabout__right-images">
                <li className="item">
                  <Image
                    src={"/images/furni-1.webp"}
                    alt="about"
                    height={500}
                    width={500}
                  />
                </li>
                <li className="item">
                  <Image
                    src={"/images/furni-1.webp"}
                    alt="about"
                    height={500}
                    width={500}
                  />
                </li>
                <li className="item">
                  <Image
                    src={"/images/furni-1.webp"}
                    alt="about"
                    height={500}
                    width={500}
                  />
                </li>
                <li className="item">
                  <Image
                    src={"/images/furni-1.webp"}
                    alt="about"
                    height={500}
                    width={500}
                  />
                </li>
                <li className="item">
                  <Image
                    src={"/images/furni-1.webp"}
                    alt="about"
                    height={500}
                    width={500}
                  />
                </li>
                <li className="item">
                  <Image
                    src={"/images/furni-1.webp"}
                    alt="about"
                    height={500}
                    width={500}
                  />
                </li>
              </ul>
              <div className="scabout__right-action">
                <div className="arrows">
                  <button className="btn btn-icon arrows__btn --left">
                    <ArrowLeft />
                  </button>
                  <button className="btn btn-icon arrows__btn --right">
                    <ArrowRight />
                  </button>
                </div>
                <div className="count">
                  <span className="count__current">02</span>/
                  <div className="count__total">04</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scabout-middle --pt">
          <div className="container-fluid">
            <div className="scabout__left">
              <div className="line"></div>
              <div className="scabout__left-title titlegroup">
                <h2 className="titlegroup__main">
                  <span>A</span>bout us
                </h2>
                <span className="titlegroup__backdrop">
                  <span>A</span>bout us
                </span>
              </div>
              <div className="scabout__left-content">
                <p className="para --top">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis delectus quaerat incidunt quae! Explicabo placeat
                  maxime ullam ipsam, qui quod provident nostrum cum aperiam,
                  quae, expedita rerum? Reprehenderit, quisquam. Alias. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  voluptatibus dolore molestias esse minima quaerat, earum,
                  laboriosam, repellat quibusdam assumenda officia sunt non vero
                  hic vitae magnam? Sed, sapiente cupiditate!
                </p>
                <p className="para --bottom">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  expedita vel a, omnis incidunt suscipit voluptatibus non
                  veniam minus illum quo. Similique eveniet totam illo, nesciunt
                  vitae enim maxime dolorum.
                </p>
                <button className="btn btn-learnmore btn-link">
                  <span className="btn__text">Learn more</span>
                  <div className="btn__icon">
                    <ChevronRight />
                  </div>
                </button>
              </div>
            </div>
            <div className="scabout__right">
              <Image
                src={"/images/about-1.jpg"}
                alt="about"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
        <div className="scabout-bottom --pt">
          <div className="container-fluid">
            <div className="scabout-bottom-wrapper">
              <ul className="info">
                <li className="info__item">
                  <div className="info__item-icon">
                    <Smile />
                  </div>
                  <div className="info__item-content">
                    <h4 className="title">1000</h4>
                    <p className="text">Room alloted</p>
                  </div>
                </li>
                <li className="info__item">
                  <div className="info__item-icon">
                    <Building />
                  </div>
                  <div className="info__item-content">
                    <h4 className="title">12</h4>
                    <p className="text">Buildings</p>
                  </div>
                </li>
                <li className="info__item --content">
                  <div className="info__item-content">
                    <h4 className="title">
                      And your happiness.
                      <br /> Priceless...
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
