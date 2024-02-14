import React, { useRef } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

import logo from "./../assets/brand/logo.png";
import Notiflix from "notiflix";

function Footer() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwZ1Wg9vGshbKyPAADpS5_FesdjzTl2NdxqdntCvjXXvmFq56PISrPeRVI3Z5FZfDYO5w/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Notiflix.Notify.success("Form submitted successfully!", {
          timeout: 6666,
        });
        nameRef.current.value = "";
        emailRef.current.value = "";
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      Notiflix.Notify.failure(
        "Failed to submit form. Please try again later.",
        {
          timeout: 6666,
        }
      );
    }
  };

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-links">
            <div className="row footer-top">
              <div className="col-5">
                <div>
                  <img src={logo} alt="" />
                </div>
                <div>
                  <p>
                    Victor Isingizwe Munezero, a passionate software developer
                    and tech enthusiast, dedicated to transforming ideas into
                    reality through code and creativity.
                  </p>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-link">
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="#about">About me</a>
                    </li>
                    <li>
                      <a href="#skills">services</a>
                    </li>
                    <li>
                      <a href="#projects">projects</a>
                    </li>
                    <li>
                      <a href="#home">testimonials</a>
                    </li>
                    <li>
                      <a href="#socialMediaLinks">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-form">
                  <h2>Newsletter Signup</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      ref={nameRef}
                      required
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      ref={emailRef}
                      required
                    />

                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-social" id="socialMediaLinks">
              <ul>
                <li>
                  <a href="https://github.com/iwmvictor">
                    <FaGithub title="Github" />
                  </a>
                </li>
                <li>
                  <a href="mailto:isingizwemunezerovictor5@gmail.com">
                    <FaEnvelope title="Leave Mail" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/iwmvictor">
                    <FaLinkedinIn title="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/iwmvictor">
                    <FaInstagram title="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/iwmvictor">
                    <FaFacebookF title="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/iwmvictor">
                    <FaTwitter title="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.de/meyvnagency/">
                    <FaPinterestP title="Pinterest" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@iwmvik">
                    <FaYoutube title="YouTube" />
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com/@iwmvictor">
                    <FaTiktok title="TikTok" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.link/63ne85">
                    <FaWhatsapp title="WhatsApp" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/iwmvictor">
                    <FaTelegram Plane title="Telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://buymeacoffee.com/iwmvictor">
                    <SiBuymeacoffee title="Buy Me a Coffee" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Iwmvictor - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
