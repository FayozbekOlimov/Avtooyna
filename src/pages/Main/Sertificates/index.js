import React from 'react'
import { Grid } from '@mui/material'

const Sertificates = () => {
    return (
        <Stack className='sertificates'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item>
                        <div className="sertificates__imgBx">
                            <img src="./assets/img/sertifikat1.png" alt="sertifikat1" />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="sertificates__content">
                            salom
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default Sertificates