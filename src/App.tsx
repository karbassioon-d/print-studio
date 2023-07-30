import Nav from './components/Nav'
import Service from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import LocationHours from './components/Hours';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/location&hours" element={<LocationHours />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
