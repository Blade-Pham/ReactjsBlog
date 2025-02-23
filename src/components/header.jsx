import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../assets/styles/header.css";
import logo from "../assets/images/newlogo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        
        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Member</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-button" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
    );
}
export default Header;