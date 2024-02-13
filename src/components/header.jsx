import React from "react";
import "./../style/style.scss";

import logo from "./../assets/brand/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="brand">
              <a href="">
                <img title="Iwmvictor" src={logo} alt="Iwmvictor" />
              </a>
            </div>
            <div className="navlinks">
              <ul>
                <li>
                  <a href="">home</a>
                </li>
                <li>
                  <a href="" title="Who am i?">
                    about
                  </a>
                </li>
                <li>
                  <a href="" title="My Work">
                    projects
                  </a>
                </li>
                <li>
                  <a href="" title="Knowledge">
                    skills
                  </a>
                </li>
                <li>
                  <a href="" title="Get Inspired">
                    blog
                  </a>
                </li>
                <li>
                  <a href="" title="Show some 💝">
                    donate
                  </a>
                </li>
              </ul>
            </div>
            <div className="action">
              <button title="Lemme do your job">hire me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
