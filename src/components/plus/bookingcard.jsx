import React, { useState } from "react";

import course from "./../../assets/other/donate.jpeg";
import {
  FaArrowRight,
  FaBookOpen,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
  FaRegFilePdf,
  FaStar,
  FaToolbox,
  FaUsers,
} from "react-icons/fa6";
import {
  FaChalkboardTeacher,
  FaHandsHelping,
  FaUnlockAlt,
} from "react-icons/fa";
import { TbNumber13Small, TbPlus } from "react-icons/tb";

function Bookingcard() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="home">
      <div className="booking-card">
        <div className="container">
          <div className="cards">
            <div className="course-card">
              <div className="img">
                <img src={course} alt="Learn Web Development" />
              </div>
              <div className="description">
                <span className="header-txt">
                  <span>
                    <h3>Web design & development</h3>
                  </span>
                  <span>
                    <FaStar /> 4.2
                  </span>
                </span>
                <p>
                  Embark on a journey of creativity and innovation with our
                  comprehensive web design and development course. From the
                  fundamentals of web design to advanced frameworks, our
                  expert-led sessions will empower you to create stunning
                  websites and launch your career in tech.
                </p>
                <div className="icons">
                  <span title="Anytime Help and Support">
                    <FaHandsHelping />
                  </span>
                  <span title="Personalized Learning Experience">
                    <FaChalkboardTeacher />
                  </span>
                  <span title="Hands-On Projects for Practical Experience">
                    <FaLaptopCode />
                  </span>
                  <span title="Comprehensive Curriculum">
                    <FaBookOpen />
                  </span>
                  <span title="Exclusive Resources and Materials">
                    <FaRegFilePdf />
                  </span>
                  <span title="Networking Opportunities">
                    <FaUsers />
                  </span>
                  <span title="Certificate Upon Completion">
                    <FaCertificate />
                  </span>
                  <span title="Career Guidance">
                    <FaBriefcase />
                  </span>
                  <span title="And 13+ More">+13</span>
                </div>
                <div className="action">
                  <a href="">Register now</a>
                  <a onClick={(openModal)}>
                    view more <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <div className="detail-modal">
            <div className="opacity">
              <div className="content">
                <h2>
                  Unlock Your Web Development Potential: Register Now for Our
                  Live Session!
                </h2>
                <p>
                  Are you ready to dive into the world of web design and
                  development? Join us for an exclusive live session on Friday,
                  March 1, 2024, at 20:40 PM Kenyan Time, where we'll unveil the
                  roadmap to your digital success.
                </p>
                <span>Limited Slots Available – Register Today!</span>
                <p>
                  Secure your spot now to ensure you don't miss out on this
                  invaluable opportunity. Registration guarantees that you'll be
                  notified promptly when the session commences, allowing you to
                  participate actively in this enlightening experience.
                </p>
                <div className="thecols">
                  <div className="why col">
                    <h3>Why Register?</h3>
                    <p>
                      By registering, you're not just signing up for a session –
                      you're reserving your place in a journey of creativity and
                      innovation. Our comprehensive course covers everything
                      from the basics of web design to cutting-edge frameworks,
                      empowering you to create visually stunning websites and
                      kickstart your career in the tech industry.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Don't Delay – Reserve Your Spot! </h3>
                    <p>
                      Slots are limited, with only 15 remaining. Act fast to
                      secure your place in this transformative learning
                      experience. Whether you're a beginner eager to explore the
                      foundations of web development or an experienced
                      professional seeking to enhance your skills, this session
                      is tailored for you.
                    </p>
                  </div>
                </div>
                <span>
                  The session will take place at 20:40 PM Kenyan Time. For your
                  convenience, here are the corresponding times in other major
                  time zones
                </span>

                <div className="register">
                  <h3>Secure Your Future in Tech – Register Now!</h3>
                  <p>
                    Don't miss your chance to embark on this transformative
                    journey. Reserve your spot today and unlock your full
                    potential in the world of web development!
                  </p>
                  <a href="">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookingcard;
