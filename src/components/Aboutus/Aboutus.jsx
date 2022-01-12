import React from "react";
import {HashRouter as Router, Route , Switch} from 'react-router-dom';
import { Link } from "react-router-dom";
import './Aboutus_css.css';
import { BiArrowBack } from 'react-icons/bi';
import {AiFillMail  } from "react-icons/ai";

function Aboutus() {
  return (
  <div className="aboutus">
  <h1>About Us</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada ornare diam nec aliquam. Duis feugiat nisi quis est dictum, molestie placerat eros vulputate. Sed vitae elementum eros, sodales varius nisi. Morbi eu interdum lorem. Praesent non nibh eleifend, consequat lacus in, pharetra nunc.</p>

  <div className="Back"><Link to="/"><BiArrowBack /></Link></div>
    <div className="Back"><a href="mailto:prastuti@itbhu.ac.in" title="prastuti@itbhu.ac.in"><AiFillMail /></a></div>
</div>
  );
}


export default Aboutus;
