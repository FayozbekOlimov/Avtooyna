import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";

import "./_style.scss";
import FooterLeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";

export default function Footer() {
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_top">
          <div className="container">
            <Grid
              container
              rowSpacing={0}
              columnSpacing={{ xs: "10px", sm: "20px", md: "30px" }}
            >
              <Grid item xs={6}>
                <FooterLeftBlock />
              </Grid>
              <Grid item xs={6}>
                <RightBlock />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="footer_flex_box">
              <img src="/assets/img/logo.png" alt="" />
              <Link to={"#"} className="copyright">
                www.avtooyna.uz 2022
              </Link>
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
                  <img
                    src="/assets/icon/insta.svg"
                    alt=""
                    id="footer_lastchild"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
