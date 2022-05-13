import React from "react";
import { Stack, Button, Grid } from "@mui/material";
import "./_style.scss";
export default function FooterLeftBlock() {
  return (
    <div className="footer_contact_block">
      <h1 className="">Biz bilan aloqa</h1>
      <div className="footer_main_contacts">
        <div className="footer_contact_item">
          <img src="/assets/icon/call.png" alt="" />
      <div className='footer_left_block_flex'>
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
          <div className='footer_left_block_flex'><a href="#">
            <span>Farg’ona sh, Istiqlol 1A uy</span>
            <span>Bizning manzil</span>
          </a></div>
          
        </div>
        <div className="footer_contact_item">
          <img src="/assets/icon/time.png" alt="" />
          <div className='footer_left_block_flex'><a href="#">
            <span>9:00 - 18:00</span>
            <span>Dushanba - Juma</span>
          </a></div>
          
        </div>
        <div className="footer_contact_item">
          <img src="/assets/icon/message.png" alt="" />
          <div className='footer_left_block_flex'> <a href="#">
            <span>info@avtooyna.uz</span>
            <span>Elektron manzilimiz</span>
          </a></div>
         
        </div>
      </div>
      <Button variant="outlined" sx={{ textTransform: "none" }}>
        Konsultatsiya olish
      </Button>
    </div>
  );
}