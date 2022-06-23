
import React from 'react';
import logo from '../png/cool.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt=".png" width="30" height="24" className="d-inline-block align-text-top" id="logo"/>
            <div className="navbar-brand" id="name">Palpi's first SPA (React)</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;