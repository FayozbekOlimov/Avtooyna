import React, { useState, useCallback, useEffect } from 'react'
import { Stack, Button, Grid } from '@mui/material'
import Title from '../../../components/Title'
import { RiArrowRightSLine } from 'react-icons/ri';
import baseAPI from "../../../api/baseAPI";
import { homeGalleryUrl } from "../../../api/apiUrls";
import './style.scss'
import { API_IMG_URL } from '../../../constants';

const galleryGridData = [
    5, 7, 7, 5, 6, 6
]

const Gallery = () => {

    const [gallery, setGallery] = useState([]);

    const getHomeGallery = useCallback(() => {
        baseAPI.fetchAll(homeGalleryUrl)
            .then((res) => {
                setGallery(res.data.fotogalareya);
            })
            .catch((e) => console.log("e", e))
    }, [])

    useEffect(() => {
        getHomeGallery();
    }, [getHomeGallery])


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
                <Grid container spacing={{ md: "30px", sm: "20px", xs: "10px" }} >
                    {
                        gallery.map((photo, idx) => (
                            <Grid item sm={galleryGridData[idx]} xs={12} key={photo.id}>
                                <div className="gallery__img_wrapper">
                                    <img className='gallery__img' src={API_IMG_URL + photo.img} alt={`gallery${idx + 1}`} />
                                </div>
                            </Grid>
                        ))
                    }

                </Grid>
            </div>
        </Stack>
    )
}

export default Gallery