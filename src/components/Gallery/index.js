import React from 'react'
import { Stack, Button, Grid } from '@mui/material'
import Title from '../../customComponents/Title'
import { RiArrowRightSLine } from 'react-icons/ri'
import './style.css'

const Gallery = () => {
    return (
        <Stack className='gallery' py={4}>
            <div className="container">
                <Stack direction='row' spacing={0.5} justifyContent='space-between' alignItems='center'>
                    <Title>Fotosuratlar</Title>
                    <Button variant='outlined' sx={{ textTransform: 'none' }} endIcon={<RiArrowRightSLine />}>Barchasini ko'rish</Button>
                </Stack>
                <Grid container spacing={2} my={2} >
                    <Grid item sm={5}>
                        <img className='gallery__img' src="./assets/img/gallery1.png" alt="gallery1" />
                    </Grid>
                    <Grid item sm={7}>
                        <img className='gallery__img' src="./assets/img/gallery2.png" alt="gallery2" />
                    </Grid>
                    <Grid item sm={7}>
                        <img className='gallery__img' src="./assets/img/gallery3.png" alt="gallery3" />
                    </Grid>
                    <Grid item sm={5}>
                        <img className='gallery__img' src="./assets/img/gallery4.png" alt="gallery4" />
                    </Grid>
                    <Grid item sm={6}>
                        <img className='gallery__img' src="./assets/img/gallery5.png" alt="gallery5" />
                    </Grid>
                    <Grid item sm={6}>
                        <img className='gallery__img' src="./assets/img/gallery6.png" alt="gallery6" />
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default Gallery