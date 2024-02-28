import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./components/home.jsx";
import Resume from "./components/resume.jsx";
import BookingCard from "./components/plus/bookingcard.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
          </Route>
          <Route path="added" element={<BookingCard/>}/>
        </Routes>
      </BrowserRouter>
      <Analytics /> {/* Include Analytics component */}
    </>
  );
}

export default App;
