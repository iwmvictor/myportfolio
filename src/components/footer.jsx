import React from "react";
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

function Footer() {
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
                      <a href="">About me</a>
                    </li>
                    <li>
                      <a href="">services</a>
                    </li>
                    <li>
                      <a href="">projects</a>
                    </li>
                    <li>
                      <a href="">testimonials</a>
                    </li>
                    <li>
                      <a href="">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-form">
                  <h2>Newsletter Signup</h2>
                  <form>
                    <input type="text" placeholder="Your Name" required />

                    <input type="email" placeholder="Your Email" required />

                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-social">
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
