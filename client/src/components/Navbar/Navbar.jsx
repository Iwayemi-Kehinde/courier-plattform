import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useAuth()

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="RDI2Go Logo" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          <li>
            {
              user ? (
                <NavLink to="/user-dashboard" onClick={closeMenu}>
                  Dashboard
                </NavLink>
              ) : (
                <NavLink to="/auth" onClick={closeMenu}>
                  GetStarted
                </NavLink>
              )
            }
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
