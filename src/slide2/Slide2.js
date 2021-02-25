import './Slide2.css'// slider library
import React from 'react';

function Slide2() {
 
  return (
    <div class="slide">
    <input type="radio" name="pos" id="pos1" />
    <input type="radio" name="pos" id="pos2"/>
    <input type="radio" name="pos" id="pos3"/>
    <input type="radio" name="pos" id="pos4"/>
    <ul>
      <li><div className="slide1 slide_bg1"></div></li>
      <li><div className="slide1 slide_bg2"></div></li>
      {/* <li></li>
      <li></li> */}
    </ul>
    <p class="bullet">
      <label for="pos1">1</label>
      <label for="pos2">2</label>
      {/* <label for="pos3">3</label>
      <label for="pos4">4</label> */}
    </p>
  </div>
  )
  }
  export default Slide2;
  
  