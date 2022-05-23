import React from "react"
import { Grid, Stack } from '@mui/material'
import FooterLeftBlock from "./LeftBlock"
import FooterRightBlock from "./RightBlock"
import FooterBottomBlock from "./BottomBlock"

const Footer = () => {
  return (
    <>
      <Stack
        py={{ xs: 2, md: 4 }}
        direction='column'
        className='footer'
        bgcolor='background.footerBg1'
      >
        <div className='container'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FooterLeftBlock />
            </Grid>
            <Grid item xs={12} md={6}>
              <FooterRightBlock />
            </Grid>
          </Grid>
        </div>
      </Stack>
      <Stack direction='row' bgcolor='background.footerBg2'>
        <div className="container">
          <FooterBottomBlock />
        </div>
      </Stack>
    </>
  );
}

export default Footer