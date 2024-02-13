import React, { useEffect, useState } from "react";
import {
  FaComment,
  FaCommentSms,
  FaCss3,
  FaEye,
  FaFacebookF,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaLaravel,
  FaLinkedinIn,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaRegComment,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaSass,
  FaThumbsUp,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiSanity,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import { FaCommentAlt, FaHistory, FaLongArrowAltRight } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

import heroImg from "./../assets/other/hero.png";
import aboutImg from "./../assets/other/4.png";
import project1 from "./../assets/projects/project1.webp";
import project2 from "./../assets/projects/project2.webp";
import project3 from "./../assets/projects/project3.webp";
import project4 from "./../assets/projects/project4.webp";
import project5 from "./../assets/projects/project5.webp";
import blog1 from "./../assets/blog/blog1.jpg";
import blog2 from "./../assets/blog/blog2.jpg";
import blog3 from "./../assets/blog/blog3.jpg";
import blog4 from "./../assets/blog/blog4.jpg";

function Home() {
  function handleContextMenu(event) {
    event.preventDefault();
  }

  const [services, setServices] = useState([
    "Software Developer",
    "Web Designer & Developer",
    "Graphic Designer",
    "Teacher | Trainer | Mentor",
    "Entrepreneur",
    "Freelancer",
  ]);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentService, setCurrentService] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentService.length === services[currentServiceIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentService("");
          setCurrentServiceIndex((currentServiceIndex + 1) % services.length);
        }, 2000);
      } else {
        setCurrentService(
          (prevService) =>
            prevService + services[currentServiceIndex][prevService.length]
        );
      }
    }, 300);

    return () => clearInterval(typingInterval);
  }, [currentService, currentServiceIndex, services]);

  return (
    <div className="home">
      <div className="home-hero">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div>
                <img
                  src={heroImg}
                  alt="Iwmvictor"
                  draggable="false"
                  onContextMenu={handleContextMenu}
                />
              </div>
            </div>
            <div className="col-7">
              <div className="hero-text">
                <h1>
                  victor <br />
                  Isingizwe munezero{" "}
                </h1>
                <span className="service-span">{currentService || "_"}</span>
                <p>
                  I am dedicated to pushing the boundaries of technology through
                  innovative solutions and captivating designs. With a passion
                  for teaching and mentoring, I empower others to unlock their
                  full potential in the digital world. Let's collaborate and
                  bring your ideas to life.
                </p>

                <div className="hero-action">
                  <ul>
                    <li>
                      <a href="" className="btn">
                        View Resume
                      </a>
                    </li>
                    <li>
                      <a href="">What Can I do for you?</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-project">
        <div className="container">
          <div className="sec-title">
            <span></span>
            <h1>My Works</h1>
            <p>Checkout a few of my projects!</p>
          </div>
          <div className="projects">
            {/* PROJECT 1 */}
            <div className="project row">
              <div className="col-6">
                <div className="project-description">
                  <div className="project-name">
                    <span></span>
                    <h1>Tranq</h1>
                  </div>
                  <p>
                    Tranq is an online platform designed to streamline hotel
                    management operations. It provides a comprehensive solution
                    for hotel owners and staff to manage reservations and
                    enhance the overall guest experience.
                  </p>
                  <p>
                    Username: test@gmail.com <br />
                    Password: 12345678
                  </p>
                  <div className="language">
                    <span>
                      <FaReact /> REACT JS
                    </span>
                    <span>
                      <FaSass /> SASS
                    </span>
                    <span>
                      <SiSanity /> Sanity CMS
                    </span>
                    <span>
                      <SiTypescript /> Typescript
                    </span>
                  </div>
                  <div className="action">
                    <ul>
                      <li>
                        <a href="">
                          <FaEye /> <span>Live preview</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithub /> <span>Github Repo</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="project-preview">
                  <div>
                    <img src={project1} alt="Tranq Website" />
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 2 */}
            <div className="project reverse">
              <div className="col-6">
                <div className="project-description">
                  <div className="project-name">
                    <span></span>
                    <h1>Nike Webstore</h1>
                  </div>
                  <p>
                    Nike Webstore is minimalistic e-commerce website where you
                    can shop for the latest Nike products conveniently online.
                  </p>
                  <p>
                    Username: test@gmail.com <br />
                    Password: 12345678 <br />
                    Stribe card no: 4242424242424242
                  </p>
                  <div className="language">
                    <span>
                      <FaReact /> REACT JS
                    </span>
                    <span>
                      <FaSass /> SASS
                    </span>
                    <span>
                      <SiExpress /> EXPRESS
                    </span>
                    <span>
                      <SiMongodb /> MongoDB
                    </span>
                  </div>
                  <div className="action">
                    <ul>
                      <li>
                        <a href="">
                          <FaEye /> <span>Live preview</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithub /> <span>Github Repo</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="project-preview">
                  <div>
                    <img src={project2} alt="Nike Webstore" />
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 3 */}
            <div className="project row">
              <div className="col-6">
                <div className="project-description">
                  <div className="project-name">
                    <span></span>
                    <h1>Furniq Website</h1>
                  </div>
                  <p>
                    Furniq is an online marketplace where users can browse and
                    purchase a wide variety of high-quality furniture items to
                    enhance their living spaces.
                  </p>
                  <p>
                    Stripe card no: <br />
                    4242424242424242
                  </p>
                  <div className="language">
                    <span>
                      <FaReact /> REACT JS
                    </span>
                    <span>
                      <FaSass /> SASS
                    </span>
                    <span>
                      <SiSanity /> Sanity CMS
                    </span>
                  </div>
                  <div className="action">
                    <ul>
                      <li>
                        <a href="">
                          <FaEye /> <span>Live preview</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithub /> <span>Github Repo</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="project-preview">
                  <div>
                    <img src={project3} alt="Furniq Website" />
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 4 */}
            <div className="project reverse">
              <div className="col-6">
                <div className="project-description">
                  <div className="project-name">
                    <span></span>
                    <h1>pixar remake</h1>
                  </div>
                  <p>
                    The Pixar Website Remake is recreation of the iconic Pixar
                    website, aiming to capture the essence of the original while
                    offering an interactive experience.
                  </p>
                  <p>
                    Username: test@gmail.com <br />
                    Password: 12345678
                  </p>
                  <div className="language">
                    <span>
                      <FaReact /> REACT JS
                    </span>
                    <span>
                      <FaSass /> SASS
                    </span>
                    <span>
                      <SiTypescript /> Typescript
                    </span>
                  </div>
                  <div className="action">
                    <ul>
                      <li>
                        <a href="">
                          <FaEye /> <span>Live preview</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithub /> <span>Github Repo</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="project-preview">
                  <div>
                    <img src={project4} alt="Pixar Remake" />
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 5 */}
            <div className="project row">
              <div className="col-6">
                <div className="project-description">
                  <div className="project-name">
                    <span></span>
                    <h1>zen landing page</h1>
                  </div>
                  <p>
                    Zen is a mobile-ready, responsive, cross-browser compatible
                    and appealing resort website template. If you are in the
                    accommodation business, make sure your rooms are occupied
                    throughout the entire year.
                  </p>

                  <div className="language">
                    <span>
                      <FaHtml5 /> HTML
                    </span>
                    <span>
                      <FaSass /> SASS
                    </span>
                    <span>
                      <SiCss3 /> CSS
                    </span>
                    <span>
                      <SiJavascript /> Javascript
                    </span>
                  </div>
                  <div className="action">
                    <ul>
                      <li>
                        <a href="">
                          <FaEye /> <span>Live preview</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithub /> <span>Github Repo</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="project-preview">
                  <div>
                    <img src={project5} alt="Tranq Website" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-skills">
        <div className="container">
          <div className="sec-title">
            <span></span>
            <h1>My Skills</h1>
            <p>
              I have a wide range of skills that I can bring to your project.
            </p>
          </div>
          <div className="skills">
            <div className="skill">
              <span className="skill-icon html">
                <FaHtml5 />
              </span>
              <span className="skill-name html">HTML</span>
            </div>
            <div className="skill">
              <span className="skill-icon css">
                <FaCss3 />
              </span>
              <span className="skill-name css">CSS</span>
            </div>
            <div className="skill">
              <span className="skill-icon js">
                <SiJavascript />
              </span>
              <span className="skill-name js">JavaScript</span>
            </div>
            <div className="skill">
              <span className="skill-icon sass">
                <FaSass />
              </span>
              <span className="skill-name sass">SASS</span>
            </div>
            <div className="skill">
              <span className="skill-icon react">
                <FaReact />
              </span>
              <span className="skill-name react">React JS</span>
            </div>

            <div className="skill">
              <span className="skill-icon native">
                <TbBrandReactNative />
              </span>
              <span className="skill-name native">React Native</span>
            </div>

            <div className="skill">
              <span className="skill-icon laravel">
                <FaLaravel />
              </span>
              <span className="skill-name laravel">Laravel</span>
            </div>

            <div className="skill">
              <span className="skill-icon java">
                <FaJava />
              </span>
              <span className="skill-name java">Java</span>
            </div>

            <div className="skill">
              <span className="skill-icon php">
                <FaPhp />
              </span>
              <span className="skill-name php">PHP</span>
            </div>

            <div className="skill">
              <span className="skill-icon figma">
                <FaFigma />
              </span>
              <span className="skill-name figma">Figma</span>
            </div>

            <div className="skill">
              <span className="skill-icon node">
                <FaNodeJs />
              </span>
              <span className="skill-name node">Node JS</span>
            </div>
          </div>
          <div className="other-skills">
            <div className="tool" title="Text Editor">
              visual studio code
            </div>
            <div className="tool" title="Design Tool">
              Figma
            </div>
            <div className="tool" title="Web Browser">
              Google chrome
            </div>
            <div className="tool" title="Mobile App Development">
              Android Studio
            </div>
            <div className="tool" title="Web Server">
              Xamp
            </div>
            <div className="tool" title="Version Control">
              GitHub
            </div>
            <div className="tool" title="Task Scheduling">
              Notion
            </div>
          </div>
        </div>
      </div>

      <div className="home-about">
        <div className="container">
          <div className="sec-title">
            <span></span>
            <h1>About Me</h1>
            <p>Get to know more about me</p>
          </div>
          <div className="bio row">
            <div className="col-6">
              <div className="about-img">
                <img src={aboutImg} alt="Iwmvictor" draggable="false" />
              </div>
            </div>
            <div className="col-6">
              <div className="about-text">
                <p>
                  Hey there! I'm Isingizwe Munezero Victor, a tech enthusiast
                  with a knack for turning ideas into reality. Currently
                  wrapping up my computer and software engineering degree, I'm
                  not just another coder – I'm a versatile creative with a
                  passion for excellence.
                </p>

                <p>
                  From crafting sleek UI designs to diving deep into code, I
                  bring a unique blend of skills to the table. But what really
                  makes me stand out? It's my obsession with quality. I thrive
                  on attention to detail, ensuring every project I touch shines
                  brighter than the rest.
                </p>

                <p>
                  But I'm not just about the tech stuff. I've got a flair for
                  content creation too! Whether it's sharing insights on YouTube
                  or optimizing websites for maximum impact, I know how to make
                  waves in the digital world.
                </p>

                <p>
                  What sets me apart? My commitment to growth and sharing
                  knowledge. I love nothing more than inspiring others through
                  tutoring, hosting events, or creating courses that break down
                  complex topics into bite-sized pieces.
                </p>

                <p>
                  So, if you're looking for a dynamic team player who's as
                  passionate about innovation as they are about getting things
                  done, look no further. Let's team up and create something
                  amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-blog">
        <div className="container">
          <div className="sec-title">
            <span></span>
            <h1>Latest Blog Posts</h1>
            <p>
              Stay updated with the latest news and tips to enhance your skills
              and stay ahead in the fast-paced world of technology.
            </p>
          </div>
          <div className="articles">
            <div className="article">
              <div className="row">
                <div className="col-4">
                  <div className="blog-img">
                    <img src={blog1} alt="Blog 2" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="blog-content">
                    <span className="blog-header">
                      January 20, 2024 <p>| By: John Doe</p>
                    </span>
                    <a href="/single-post" className="blog-title">
                      How To Build A Successful Business In The Tech Industry?
                    </a>
                    <p>
                      Design thinking has been around for quite some time now -
                      it’s a methodology that encourages empathy, creativity,
                      and experimentation to solve complex problems...
                    </p>
                    <a href="" className="readmore">
                      Read More <FaLongArrowAltRight />
                    </a>
                    <div className="article-footer">
                      <div className="read">
                        <FaHistory /> 5 min read
                      </div>
                      <div className="action">
                        <span>
                          <FaRegThumbsUp />
                        </span>
                        <span>
                          <FaRegThumbsDown />
                        </span>
                        <span>
                          <FaRegComment />
                        </span>
                      </div>
                      <div className="social">
                        <span>
                          <a href="">
                            <FaFacebookF />
                          </a>
                        </span>
                        <span>
                          <a href="">
                            <FaTwitter />
                          </a>
                        </span>
                        <span>
                          <a href="">
                            <FaWhatsapp />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="row">
                <div className="col-4">
                  <div className="blog-img">
                    <img src={blog2} alt="Blog 2" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="blog-content">
                    <span className="blog-header">
                      January 20, 2024 <p>| By: John Doe</p>
                    </span>
                    <a href="/single-post" className="blog-title">
                      How To Build A Successful Business In The Tech Industry?
                    </a>
                    <p>
                      Design thinking has been around for quite some time now -
                      it’s a methodology that encourages empathy, creativity,
                      and experimentation to solve complex problems...
                    </p>
                    <a href="" className="readmore">
                      Read More <FaLongArrowAltRight />
                    </a>
                    <div className="article-footer">
                      <div className="read">
                        <FaHistory /> 5 min read
                      </div>
                      <div className="action">
                        <span>
                          <FaRegThumbsUp />
                        </span>
                        <span>
                          <FaRegThumbsDown />
                        </span>
                        <span>
                          <FaRegComment />
                        </span>
                      </div>
                      <div className="social">
                        <span>
                          <a href="">
                            <FaFacebookF />
                          </a>
                        </span>
                        <span>
                          <a href="">
                            <FaTwitter />
                          </a>
                        </span>
                        <span>
                          <a href="">
                            <FaWhatsapp />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="row">
                <div className="col-4">
                  <div className="blog-img">
                    <img src={blog3} alt="Blog 2" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="blog-content">
                    <span className="blog-header">
                      January 20, 2024 <p>| By: John Doe</p>
                    </span>
                    <a href="/single-post" className="blog-title">
                      How To Build A Successful Business In The Tech Industry?
                    </a>
                    <p>
                      Design thinking has been around for quite some time now -
                      it’s a methodology that encourages empathy, creativity,
                      and experimentation to solve complex problems...
                    </p>
                    <a href="" className="readmore">
                      Read More <FaLongArrowAltRight />
                    </a>
                    <div className="article-footer">
                      <div className="read">
                        <FaHistory /> 5 min read
                      </div>
                      <div className="action">
                        <span>
                          <FaRegThumbsUp />
                        </span>
                        <span>
                          <FaRegThumbsDown />
                        </span>
                        <span>
                          <FaRegComment />
                        </span>
                      </div>
                      <div className="social">
                        <span>
                          <a href="">
                            <FaFacebookF />
                          </a>
                        </span>
                        <span>
                          <a href="">
                            <FaTwitter />
                          </a>
                        </span>
                        <span>
                          <a href="">
                            <FaWhatsapp />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-action">
            <a href="">read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
