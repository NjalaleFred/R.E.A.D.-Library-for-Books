import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/borrow" className="link">
        Borrow a book
      </NavLink>
      <NavLink to="/add" className="link">
        Add a book
      </NavLink>
    <NavLink to="/about" className="link">
      About
    </NavLink>
    </nav>
  );
};
