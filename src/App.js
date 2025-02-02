import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <header>
        <h1>Welcome to Our Restaurant</h1>
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
          <Link to="/reservation" className="nav-link">
            Reservation
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Our Restaurant!</h2>
      <p>
        Your perfect dining experience awaits. Explore our menu, make a
        reservation, or contact us for more details.
      </p>
    </div>
  );
}

export default App;
