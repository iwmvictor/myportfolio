import { useState } from 'react'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./components/home.jsx";
import Resume from "./components/resume.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />}></Route>
           <Route path="resume" element={<Resume />}></Route>
         </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
