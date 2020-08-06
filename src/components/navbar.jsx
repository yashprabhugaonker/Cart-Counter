import React, { Component } from "react";

const Navbar = ({ dispCount }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <badge className="badge-secondary badge-pill">{dispCount}</badge>
    </nav>
  );
};

export default Navbar;
