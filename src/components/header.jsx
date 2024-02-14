import React, { useEffect, useState } from "react";
import "./../style/style.scss";

import logo from "./../assets/brand/logo.png";

function Header() {
  const encodeMessage = () => {
    const message =
      " ```Hi Iwmvictor,``` \n\n _I've had the chance to review your *portfolio* and I'm impressed with your work. *I'd like to schedule a call to discuss a potential job offer.* When would be a good time for you?_ ";
    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    const encodedMessage = encodeMessage();
    window.open(
      `https://wa.me/250781996271?text=${encodedMessage}&type=phone_number&app_absent=0`,
      "_blank"
    );
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <>
      <div className={`header ${scrolling ? "scrolling" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="brand">
              <a href="#home">
                <img title="Iwmvictor" src={logo} alt="Iwmvictor" />
              </a>
            </div>
            <div className="navlinks">
              <ul>
                <li>
                  <a href="#home">home</a>
                </li>
                <li>
                  <a href="#about" title="Who am i?">
                    about
                  </a>
                </li>
                <li>
                  <a href="#projects" title="My Work">
                    projects
                  </a>
                </li>
                <li>
                  <a href="#skills" title="Knowledge">
                    skills
                  </a>
                </li>
                <li>
                  <a href="#blog" title="Get Inspired">
                    blog
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://buymeacoffee.com/iwmvictor" title="Show some 💝">
                    donate
                  </a>
                </li>
              </ul>
            </div>
            <div className="action">
              <button onClick={openWhatsApp} title="Lemme do your job">
                hire me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
