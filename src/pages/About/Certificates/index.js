import React from 'react'
import { Grid} from '@mui/material'
import CertificateCarusel from './CertificateCarusel';
import "./style.scss"
  
const Certificates = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
            <div className="certificate_wrap">

                <h1>Sertifikatlar</h1>
              <CertificateCarusel />

              </div>
      </Grid>
    </Grid>
  )
}

export default Certificates;