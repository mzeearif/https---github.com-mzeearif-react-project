// Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../Assests/zalaris-site-logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> <img src={logo} alt="" width={150} /></div>
      <ul className="navbar-items">
        <li>HR & Payroll Solutions</li>
        <li>HR & Payroll Services</li>
        <li>SAP Products & Services</li>
        <li>Insights</li>
        <li>Customers</li>
      </ul>
    </nav>
  );
};

export default Navbar;
