import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Companents/Layout";
import 'bootstrap-icons/font/bootstrap-icons.css';
import All from './Companents/MainPage';
import ScrollToTop from "./Companents/additional/ScrollToTop";
import DoctorDirectory from "./Companents/page/DoctorDirectory";
import InfoDoktorPage from "./Companents/page/InfoDoktorPage"
import Nav from "./Companents/Nav"
import Footer from "./Companents/Footer"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="nav" element={<Nav />} />
          <Route index element={<All />} />
          <Route path="/catalog/:productId" element={<InfoDoktorPage />} />
          <Route path="/catalog" element={<DoctorDirectory />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
