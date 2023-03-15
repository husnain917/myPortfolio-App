import React from 'react'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Services from "./pages/services/Services";
import Portfolio from './pages/portfolio/Portfolio';
import Testimonio from "./pages/testimonio/Testimonio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Services */}
      <Services />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonio */}
      <Testimonio />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  )
}
