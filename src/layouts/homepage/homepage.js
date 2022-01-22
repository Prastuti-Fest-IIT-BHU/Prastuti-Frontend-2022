import React from "react";
import Signup from "../Signup_/Signup/Signup_";
import { useState } from 'react';
import './Homepage_css_.css';






  const Home = () => {


  const [name, setName] = useState('Login');









  function handleClick () {



         document.getElementById('menu-toggle').addEventListener('click', (e)=> {

             e.stopPropagation();
                 var x= document.getElementById('menu-toggle').innerHTML;

                 if(x=='Login')
                 {
                   setName('Close');
                 }
                 else
                 {
                   setName('Login');
                 }

             console.log("clicked");
             document.getElementById('sidebar').classList.toggle('visible');
             document.getElementById('sidebar-content').classList.toggle('d-none');
             document.getElementById('content').classList.toggle('shift');


         })
       }








  return (

    <div className="Homepage" id="content">
   <div className="basepage" id="content">
    <div className="link-homepage-text" id="content">
      <h3 className="links_homepage_sign" id="menu-toggle" onClick=  {() => {
                  handleClick();
                }}>{name}</h3>

    </div>

    <div className="content-homepage">
      <h1 className="main-heading-homepage"> Prastuti 22 </h1>
    <h4 className="description">Now that your eyes are open, make the sun jealous with your burning
passion to start the day. Make the sun jealous or stay in bed.</h4>
    </div>
  </div>


    <div id="sidebar">
          <div id="sidebar-content" class="d-none">

              <div class="sidebar-menu">
                  <Signup />
              </div>
          </div>
      </div>
  </div>

);
}

export default Home;
