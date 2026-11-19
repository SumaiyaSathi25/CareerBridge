import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/common/Hero";
import FeaturedInternships from "./components/internship/FeaturedInternships";
import Statistics from "./components/common/Statistics";
import About from "./components/common/About";
import Contact from "./components/common/Contact";

import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Dashboard from "./pages/student/Dashboard";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedInternships />
        <Statistics />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
