import React, { useCallback, useEffect, useState } from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text';
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss';

// import required modules
import { Navigation } from "swiper";
import { homeCertificateUrl } from '../../../api/apiUrls'
import baseAPI from '../../../api/baseAPI'
import { useT } from '../../../custom/hooks/useT'
import { API_IMG_URL } from '../../../constants'

const titleStyle = {
    fontWeight: 500,
    fontSize: '20px',
    color: 'info.main',
    marginBottom: '12px',
}


const Certificates = () => {
    const { t, lang } = useT();
    const [certificates, setCertificates] = useState({});

    const getAdvantages = useCallback(() => {
        baseAPI.fetchAll(homeCertificateUrl)
            .then((res) => {
                if (res.data.success) {
                    setCertificates(res.data.data[0]);
                }
            })
            .catch((e) => console.log("e", e));
    }, [])

    useEffect(() => {
        getAdvantages();
    }, [getAdvantages])

    const { items = [] } = certificates;

    return (
        <Stack
            py={{ xs: 2, md: 4 }}
            className='home_certificates'
            direction='row'
            width='100%'
            bgcolor='background.paper'
        >
            <div className="container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={true}
                    loop={true}
                    className="home_certificate_swiper"
                >
                    {
                        items.map(({ id, title, text, img }) => (
                            <SwiperSlide key={id}>
                                <Grid container width="100%">
                                    <Grid item xs={12} md={6}
                                        bgcolor='#F1F2F8'
                                        p={2}
                                        display="flex"
                                        justifyContent="center"
                                        borderRadius='12px'
                                    >
                                        <Stack className='sertificates__imgBx' p={{ xs: 2, sm: 4 }}>
                                            <img
                                                className='sertificates__img'
                                                src={API_IMG_URL + img}
                                                alt="sertifikat1"
                                                width='100%'
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}
                                        p={1} pr={0}
                                        pl={{ xs: 0, md: 6 }}
                                        order={{ xs: '-1', md: 0 }}
                                    >
                                        <Stack className="sertificates__content" direction='column'>
                                            <Stack
                                                direction='row'
                                                alignItems='center'
                                                justifyContent='space-between'
                                                flexWrap="wrap"
                                                mb={2}
                                            >
                                                <Title>{t(`certificates.${lang}`)}</Title>
                                                <Link to={"/about-us/bsertifikat"}>
                                                    <Button
                                                        variant='outlined'
                                                        sx={{
                                                            textTransform: 'none',
                                                            marginBottom: 2,
                                                            color: 'info.main',
                                                            borderColor: 'border.main'
                                                        }}
                                                        endIcon={<RiArrowRightSLine />}
                                                    >
                                                        {t(`viewAll.${lang}`)}
                                                    </Button>
                                                </Link>
                                            </Stack>
                                            <Typography sx={titleStyle}>{title} </Typography>
                                            <Text>
                                                <span dangerouslySetInnerHTML={{ __html: text }}></span>
                                            </Text>

                                        </Stack>
                                    </Grid>
                                </Grid>
                            </SwiperSlide>
                        ))
                    }

                </Swiper >
            </div >
        </Stack >
    )
}

export default Certificates