import React from "react";
import "./style.scss";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="scprojects" id="scprojects">
      <div className="scprojects-wrapper">
        <div className="scprojects__content titlegroup --ptb">
          <h2 className="scprojects__content-title titlegroup__main">
            Projects
          </h2>
          <span className="scprojects__content-backdrop titlegroup__backdrop">
            Projects
          </span>
        </div>
        <ul className="scprojects__list">
          <li className="scprojects__list-item ">
            <div className="top">
              <span className="top__num">01</span>
              <h4 className="top__name">Square projects</h4>
            </div>
            <div className="thumbnail">
              <Image
                src={"/images/project-1.jpg"}
                alt="projects"
                height={500}
                width={500}
              />
            </div>
            <div className="bottom">
              <span className="bottom__content">Dreamland -</span>
            </div>
            <div className="showmore">
              <div className="showmore__background">
                <div className="showmore__background-icon">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </li>
          <li className="scprojects__list-item">
            <div className="top">
              <span className="top__num">02</span>
              <h4 className="top__name">Square projects</h4>
            </div>
            <div className="thumbnail">
              <Image
                src={"/images/project-2.jpg"}
                alt="projects"
                height={500}
                width={500}
              />
            </div>
            <div className="bottom">
              <span className="bottom__content">Dreamland -</span>
            </div>
            <div className="showmore">
              <div className="showmore__background">
                <div className="showmore__background-icon">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </li>
          <li className="scprojects__list-item ">
            <div className="top">
              <span className="top__num">02</span>
              <h4 className="top__name">Square projects</h4>
            </div>
            <div className="thumbnail">
              <Image
                src={"/images/project-3.jpg"}
                alt="projects"
                height={500}
                width={500}
              />
            </div>
            <div className="bottom">
              <span className="bottom__content">Dreamland -</span>
            </div>
            <div className="showmore">
              <div className="showmore__background">
                <div className="showmore__background-icon">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </li>
          <li className="scprojects__list-item">
            <div className="top">
              <span className="top__num">02</span>
              <h4 className="top__name">Square projects</h4>
            </div>
            <div className="thumbnail">
              <Image
                src={"/images/project-4.jpg"}
                alt="projects"
                height={500}
                width={500}
              />
            </div>
            <div className="bottom">
              <span className="bottom__content">Dreamland -</span>
            </div>
            <div className="showmore">
              <div className="showmore__background">
                <div className="showmore__background-icon">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Projects;
