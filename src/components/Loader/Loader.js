import React from "react";
import "./loader-style.css";

const Loader = ({ text }) => (
  <div className='loader-container'>
    <div className='loader-content'>
      <h2 className='loader-text'>{text}</h2>
      <div className='loader-circles-container'>
        <div className='loader-circle' />
        <div className='loader-circle' />
        <div className='loader-circle' />
      </div>
    </div>
  </div>
);

export default Loader;
