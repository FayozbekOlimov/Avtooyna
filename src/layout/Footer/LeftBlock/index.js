import React from "react";
import { Stack, Button, Grid } from "@mui/material";
import {useT} from '../../../custom/hooks/useT'; 

import "./_style.scss";

export default function FooterLeftBlock() {

  const {t, lang} = useT();

  return (
    <div className="footer_contact_block">
      <h1 className="footer_contact_title">{t(`contact.${lang}`)}</h1>
      <div className="footer_main_contacts">
        <div className="footer_contact_item">
          <img src="/assets/icon/call.png" alt="" />
          <div className="footer_left_block_flex">
            <a href="#">
              <span>+998 73 249-75-75</span>
            </a>
            <a href="#">
              <span>+998 73 243-08-35</span>
            </a>
          </div>
        </div>
        <div className="footer_contact_item">
          <img src="/assets/icon/location.png" alt="" />
          <div className="footer_left_block_flex">
            <a href="#">
              <span>Farg’ona sh, Istiqlol 1A uy</span>
              <span className="footer_contact_subtitle">Bizning manzil</span>
            </a>
          </div>
        </div>
        <div className="footer_contact_item">
          <img src="/assets/icon/time.png" alt="" />
          <div className="footer_left_block_flex">
            <a href="#">
              <span>9:00 - 18:00</span>
              <span className="footer_contact_subtitle">Dushanba - Juma</span>
            </a>
          </div>
        </div>
        <div className="footer_contact_item">
          <img src="/assets/icon/message.png" alt="" />
          <div className="footer_left_block_flex">
            <a href="#">
              <span>info@avtooyna.uz</span>
              <span className="footer_contact_subtitle">
                Elektron manzilimiz
              </span>
            </a>
          </div>
        </div>
      </div>
      <Button
        variant="outlined"
        sx={{ textTransform: "none" }}
        className="footer_consulting_btn"
      >
        Konsultatsiya olish
      </Button>
    </div>
  );
}
