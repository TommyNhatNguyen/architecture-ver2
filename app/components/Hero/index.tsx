import React from "react";
import "./style.scss";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LocationEdit, Mail, Phone } from "lucide-react";
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="schero" id="schero">
      <div className="container-fluid">
        <div className="schero-wrapper">
          {/* Left */}
          <div className="schero__left">
            {/* Logo */}
            <Link className="schero__left-logo --top" href={"/"}>
              Logo
            </Link>
            {/* Nav */}
            <nav className="schero__left-nav">
              <ul className="list">
                <li className="list__item">
                  <Link href={"/"}>instagram</Link>
                </li>
                <li className="list__item">
                  <Link href={"/"}>twitter</Link>
                </li>
                <li className="list__item">
                  <Link href={"/"}>facebook</Link>
                </li>
              </ul>
            </nav>
            {/* Logo */}
            <Link className="schero__left-logo --bottom" href={"/"}>
              Logo
            </Link>
          </div>
          {/* Right */}
          <div className="schero__right">
            <div className="schero__right-top">
              {/* Header */}
              <div className="header">
                <h1 className="header__title">AGRESSOV</h1>
              </div>
              {/* Content */}
              <div className="content">
                <h2 className="content__title">
                  With you.
                  <br />
                  always
                </h2>
                <button className="content__btn btn">Book now</button>
              </div>
              {/* Navigation */}
              <div className="navigation">
                <button className="navigation__btn --left btn btn-icon">
                  <ArrowLeft />
                </button>
                <button className="navigation__btn --right btn btn-icon">
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div className="schero__right-bottom">
              <ul className="info">
                <li className="info__item">
                  <Link className="info__item-link" href={"/"}>
                    <div className="icon">
                      <LocationEdit />
                    </div>
                    <span>Dreamland</span>
                  </Link>
                </li>
                <li className="info__item">
                  <Link className="info__item-link" href={"tel:09009882291"}>
                    <div className="icon">
                      <Phone />
                    </div>
                    <span>09009882291</span>
                  </Link>
                </li>
                <li className="info__item">
                  <Link
                    className="info__item-link"
                    href={"mailto:info@agressov.com"}
                  >
                    <div className="icon">
                      <Mail />
                    </div>
                    <span>info@agressov.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
