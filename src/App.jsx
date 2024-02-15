import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./components/home.jsx";
import Resume from "./components/resume.jsx";
import { Analytics } from "@vercel/analytics/react"; // Import Analytics component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics /> {/* Include Analytics component */}
    </>
  );
}

export default App;
