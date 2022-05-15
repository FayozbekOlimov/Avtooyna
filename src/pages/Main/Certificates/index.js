import React from 'react'
import { Grid, Stack } from '@mui/material'

const Certificates = () => {
    return (
        <Stack className='sertificates'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <div className="sertificates__imgBx">
                            <img src="./assets/img/sertifikat1.png" alt="sertifikat1" />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <Stack className="sertificates__content">
                            
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default Certificates