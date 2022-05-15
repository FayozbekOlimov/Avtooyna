import React from "react";
import { Link } from "react-router-dom";
import "./_style.scss";
import FooterLeftBlock from "./LeftBlock";

export default function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="container">
        <FooterLeftBlock />
      </div>
      <div className="footer">
        <div className="container">
     <div className='footer_flex_box'>
     <img src="/assets/img/logo.png" alt="" />
          <Link to={"#"} className='copyright'>www.avtooyna.uz 2022</Link>
          <div className="socila_link">
            <a href="" alt="">
              <img src="/assets/icon/fb.svg" alt="" />
            </a>
            <a href="" alt="">
              <img src="/assets/icon/youtube.svg" alt="" />
            </a>
            <a href="" alt="">
              <img src="/assets/icon/tg.svg" alt="" />
            </a>
            <a href="" alt="">
              <img src="/assets/icon/insta.svg" alt="" />
            </a>
          </div>
     </div>
        </div>
      </div>
    </div>
  );
}
