import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component {
  Logout = () => {
    localStorage.removeItem("Token");
    window.location = "/login";
  }
  render(){
    return (
      <div className="navbar navbar-expand;lg bg-danger navbar-dark">
      <button type="button" classMa,e="navbar-toggler navbar-toggler-right"
      data-toggle="collapse" data-target="#menu">
      <span className="navbar navbar-toggler-icoin"></span>
      </button>
      <div className="navbar-collapse collapse" id="menu">
      <ul className="navbara-nav">
      {/* list menu */}

      // <li className="navbar-item">
      // <Link className="nav-link" to="/login">Login</Link>
      // </li>

      </ul>
    </div>
  </div>
);
  }
}
export default Navbar;
