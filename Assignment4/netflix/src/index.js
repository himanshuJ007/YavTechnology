import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import aviator from './images/aviator.jpg';
import cmiyc from './images/cmiyc.jpg';
import inception from './images/inception.jpg';
import departed from './images/departed.jpg';
import shutter from './images/shutter.jpg';


ReactDOM.render(
  <>
  <h2>Netflix</h2>
  <p>Aviator</p>
  <img src={aviator}/>  
  <img src={aviator}/>  
  <img src={aviator}/>
  <p>Catch Me If You Can</p>
  <img src={cmiyc}/>  
  <img src={cmiyc}/>  
  <img src={cmiyc}/>
  <p>Inception</p>
  <img src={inception}/>
  <img src={inception}/>
  <img src={inception}/>
  <p>Departed</p>
  <img src={departed}/>
  <img src={departed}/>
  <img src={departed}/>
  <p>Shutter IsLand </p>
  <img src={shutter}/>
  <img src={shutter}/>
  <img src={shutter}/>
  </>
  ,
  document.getElementById('root')
);

