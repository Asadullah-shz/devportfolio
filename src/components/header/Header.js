import React from "react";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import "./Header.css";

const Header = ({ theme }) => {
  return (
    <header
      className="header"
      style={{ backgroundColor: theme ? theme.body : "#F8FAFC" }}
    >
      <NavLink to="/" tag={Link} className="logo">
        <span
          className="logo-bracket"
          style={{ color: theme ? theme.text : "#0F172A" }}
        >
          {" "}
          &lt;
        </span>
        <span
          className="logo-name"
          style={{ color: theme ? theme.text : "#0F172A" }}
        >
          {greeting.logo_name}
        </span>
        <span
          className="logo-bracket"
          style={{ color: theme ? theme.text : "#0F172A" }}
        >
          /&gt;
        </span>
      </NavLink>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        aria-label="Toggle navigation menu"
      >
        <span className="navicon"></span>
      </label>

      <ul
        className="menu"
        style={{ backgroundColor: theme ? theme.body : "#F8FAFC" }}
      >
        <li>
          <NavLink
            to="/"
            tag={Link}
            exact
            activeClassName="active"
            style={{ color: theme ? theme.text : "#0F172A" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            tag={Link}
            activeClassName="active"
            style={{ color: theme ? theme.text : "#0F172A" }}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            tag={Link}
            activeClassName="active"
            style={{ color: theme ? theme.text : "#0F172A" }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            tag={Link}
            activeClassName="active"
            style={{ color: theme ? theme.text : "#0F172A" }}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
