import './Slide2.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Slide2() {
  return (
    <div class="section">
      <input type="radio" name="slide" id="slide01" checked />
      <input type="radio" name="slide" id="slide02" />
      <input type="radio" name="slide" id="slide03" />
      <div class="slidewrap">
        <ul class="slidelist">
          <li class="slideitem">
            <Link to="/home">
              <div class="textbox">
                <h3 class="textbox_h3">20%세일</h3>
                <p class="slideitem_p">저렴한 가격으로 같이 즐겨요.</p>
              </div>
              <div class="slideitem_img1"></div>
            </Link>
          </li>
          <li class="slideitem">
            <Link to="/home">
              <div class="textbox">
                <h3 class="textbox_h3">어버이 날 행사</h3>
                <p class="slideitem_p">행사 이벤트 60%</p>
              </div>
              <div class="slideitem_img2"></div>
            </Link>
          </li>
          <li class="slideitem">
            <Link to="/home">
              <div class="textbox">
                <h3 class="textbox_h3">건강한 챌린지</h3>
                <p class="slideitem_p">마시면 건강해 지는 습관.</p>
              </div>
              <div class="slideitem_img3"></div>
            </Link>
          </li>

          <div class="slide-control">
            <div>
              <label for="slide03" class="left"></label>
              <label for="slide02" class="right"></label>
            </div>
            <div>
              <label for="slide01" class="left"></label>
              <label for="slide03" class="right"></label>
            </div>
            <div>
              <label for="slide02" class="left"></label>
              <label for="slide01" class="right"></label>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Slide2;
