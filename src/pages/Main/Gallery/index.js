import React from 'react'
import { Stack, Button, Grid } from '@mui/material'
import Title from '../../../components/Title'
import { RiArrowRightSLine } from 'react-icons/ri'
import './style.scss'

const Gallery = () => {
    return (
        <Stack
            className='gallery'
            py={{ xs: 2, md: 4 }}
            bgcolor='background.default'
            sx={{
                backgroundImage: 'url("/assets/img/about-bg.png")'
            }}
        >
            <div className="container">
                <Stack direction='row' mb={1} justifyContent='space-between' alignItems='flex-start'>
                    <Title>Fotosuratlar</Title>
                    <Button
                        variant='outlined'
                        sx={{
                            textTransform: 'none',
                            color: 'info.main',
                            borderColor: 'border.main'
                        }}
                        endIcon={<RiArrowRightSLine />}>
                        Barchasini ko'rish
                    </Button>
                </Stack>
                <Grid container spacing={2} >
                    <Grid item sm={5}>
                        <img className='gallery__img' src="/assets/img/gallery1.png" alt="gallery1" />
                    </Grid>
                    <Grid item sm={7}>
                        <img className='gallery__img' src="/assets/img/gallery2.png" alt="gallery2" />
                    </Grid>
                    <Grid item sm={7}>
                        <img className='gallery__img' src="/assets/img/gallery3.png" alt="gallery3" />
                    </Grid>
                    <Grid item sm={5}>
                        <img className='gallery__img' src="/assets/img/gallery4.png" alt="gallery4" />
                    </Grid>
                    <Grid item sm={6}>
                        <img className='gallery__img' src="/assets/img/gallery5.png" alt="gallery5" />
                    </Grid>
                    <Grid item sm={6}>
                        <img className='gallery__img' src="/assets/img/gallery6.png" alt="gallery6" />
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default Gallery