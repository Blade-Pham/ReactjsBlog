import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/newlogo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
      <div className="container">
        
        <img src={logo} alt="Logo" className="logo" />
        
        {/* Desktop Menu */}
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list-members">Member</Link></li>
        <li><Link to="/">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-button" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <li><Link to="/" >Home</Link></li>
        <li><Link to="/list-members">Member</Link></li>
        <li><Link to="/list-news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
    );
}
export default Header;