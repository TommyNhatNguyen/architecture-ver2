import React from "react";
import "./style.scss";
import Link from "next/link";
import { Instagram, Mail, Phone, TestTube2Icon } from "lucide-react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="footer" id="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-top --ptb">
            <div className="footer__left">
              <div className="footer__left-logo">LOGO</div>
              <div className="footer__left-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                amet maiores voluptate facilis error doloribus expedita
                assumenda similique aliquam nisi? Molestiae reprehenderit eos
                nostrum sed quia numquam repellat nulla nisi!
              </div>
            </div>
            <div className="footer__middle">
              <ul className="footer__middle-list">
                <li className="item --header">Quick link</li>
                <li className="item">
                  <Link href={"#"}>Privacy Policy</Link>
                </li>
                <li className="item">
                  <Link href={"#"}>Terms & Conditions</Link>
                </li>
                <li className="item">
                  <Link href={"#"}>Cookie Policy</Link>
                </li>
                <li className="item">
                  <Link href={"#"}>FAQ</Link>
                </li>
              </ul>
              <ul className="footer__middle-list">
                <li className="item --header">Contact information</li>
                <li className="item">
                  <Link href={"#"}>Jakarta, Indonesia</Link>
                </li>
                <li className="item">
                  <Link href={"tel:+6281234567890"}>+62 812 3456 7890</Link>
                </li>
                <li className="item">
                  <Link href={"mailto:info@example.com"}>info@example.com</Link>
                </li>
              </ul>
            </div>
            <div className="footer__right">
              <h4 className="footer__right-header">Connect with us</h4>
              <ul className="footer__right-socials">
                <li className="item">
                  <Link href={"#"}>
                    <Phone />
                  </Link>
                </li>
                <li className="item">
                  <Link href={"#"}>
                    <TestTube2Icon />
                  </Link>
                </li>
                <li className="item">
                  <Link href={"#"}>
                    <Mail />
                  </Link>
                </li>
                <li className="item">
                  <Link href={"#"}>
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer__left">Hotel california</span>
            <span className="footer__right">© 2025. All rights reserved.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
