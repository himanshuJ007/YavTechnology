import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <>
  <h1>Calculator</h1>
  <p>Enter Value 1</p>
  <input type="text" id="v1"/>
  <p>Enter Value 2</p>
  <input type="text" id="v2"/>
  <br></br>
  <br></br>
  <button id="add">Add</button>
  <button id="sub">Subtract</button>
  <button id="mul">Multiply</button>
  <button id="div">Devide</button>
  <br></br>
  <p>ANS</p><textarea id="ans"/>
  </>
  ,
  document.getElementById('root')
);
