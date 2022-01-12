import {Link} from "react-router-dom";

import './Homepage-css.css';

import {FaFacebookF} from "react-icons/fa";


function Homepage() {

  return (<div className="Homepage">

    <div className="link-homepage-text">
      <h3 className="links_homepage sign"><Link to="/signup" style={{ textDecoration: 'none' ,color: 'inherit' }}>Sign Up</Link></h3>
      <h3 className="links_homepage about"><Link to="/aboutus" style={{ textDecoration: 'none' ,color: 'inherit' }}>About Us</Link></h3>

    </div>

    <div className="content-homepage">
      <h1 className="main-heading-homepage">Prastuti</h1>
    <h4 className="description">A fest by the department of Electrical Engineering</h4>
    </div>

    <div className="Facebook-logo"><a href="https://www.facebook.com/prastuti.IITbhu/" target="_blank"><FaFacebookF/></a></div>

  </div>);
}

export default Homepage;
