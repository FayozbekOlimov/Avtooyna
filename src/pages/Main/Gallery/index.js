import React, { useState, useCallback, useEffect } from 'react'
import { Stack, Button, Grid } from '@mui/material'
import Title from '../../../components/Title'
import { RiArrowRightSLine } from 'react-icons/ri';
import baseAPI from "../../../api/baseAPI";
import { homeGalleryUrl } from "../../../api/apiUrls";
import './style.scss'
import { API_IMG_URL } from '../../../constants';
import { useT } from '../../../custom/hooks/useT';
import { Link } from "react-router-dom";

const galleryGridData = [
    5, 7, 7, 5, 6, 6
]

const Gallery = () => {
    const { t, lang } = useT();
    const [gallery, setGallery] = useState([]);

    const getHomeGallery = useCallback(() => {
        baseAPI.fetchAll(homeGalleryUrl)
            .then((res) => {
                if (res.data.success) {
                    setGallery(res.data.data);
                }
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
                <Stack direction='row' mb={2} justifyContent='space-between' alignItems='flex-start' flexWrap="wrap">
                    <Title>{t(`photos.${lang}`)}</Title>
                    <Link to={"/press-service/photogallery"}>
                        <Button
                            variant='outlined'
                            sx={{
                                textTransform: 'none',
                                color: 'info.main',
                                borderColor: 'border.main'
                            }}
                            endIcon={<RiArrowRightSLine />}>
                            {t(`viewAll.${lang}`)}
                        </Button>
                    </Link>
                </Stack>
                <Grid container spacing={2} >
                    {
                        gallery.slice(0, 6).map((photo, idx) => (
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