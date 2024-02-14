import React from "react";
import { useNavigate } from "react-router-dom";
import cv from "./../assets/brand/Iwmvictor.cv.pdf";

function Resume() {
  const navigate = useNavigate();

  const handleDownload = () => {
    alert(
      "Thank you for considering/checking out my CV/resume!\n\nYou can also schedule a call with me through the button on the bottom."
    );

    const link = document.createElement("a");
    link.href = cv;
    link.download = "Iwmvictor_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const encodeMessage = () => {
    const message =
      " ```Hi Iwmvictor,``` \n\n _I've seen your Ressume and I'd like to schedule a call to discuss your services._ ";
    return encodeURIComponent(message);
  };
  
  const openWhatsApp = () => {
    const encodedMessage = encodeMessage();
    alert("Redirecting to schedule a call page...");
    window.open(
      `https://wa.me/250781996271?text=${encodedMessage}&type=phone_number&app_absent=0`,
      "_blank"
    );
  };


  return (
    <div className="resume">
      <div className="container">
        <iframe
          title="Iwmvictor's CV"
          src={cv}
          width="100%"
          height="800px"
        ></iframe>

        <div className="cv-action">
          <button onClick={handleDownload}>Download CV</button>
          <button onClick={openWhatsApp}>Schedule a Call</button>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
