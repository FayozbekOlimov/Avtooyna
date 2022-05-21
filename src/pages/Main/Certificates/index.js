import React, { useCallback, useEffect, useState } from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { RiArrowRightSLine } from 'react-icons/ri'
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss';

// import required modules
import { Navigation } from "swiper";
import { homeCertificateUrl } from '../../../api/apiUrls'
import baseAPI from '../../../api/baseAPI'

const titleStyle = {
    fontWeight: 500,
    fontSize: '20px',
    color: 'info.main',
    marginBottom: '12px',
}


const Certificates = () => {
    const [certificate, setCertificate] = useState();

    const getAdvantages = useCallback(() => {
        baseAPI.fetchAll(homeCertificateUrl)
            .then((res) => {
                setCertificate(res.data);
            })
            .catch((e) => console.log("e", e));
    }, [])

    useEffect(() => {
        getAdvantages();
    }, [getAdvantages])

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
                    <SwiperSlide>
                        <Grid container width="100%">
                            <Grid item xs={12} md={6}
                                bgcolor='#F1F2F8'
                                p={2}
                                display="flex"
                                justifyContent="center"
                                borderRadius='12px'
                            >
                                <div className='sertificates__imgBx'>
                                    <img
                                        className='sertificates__img'
                                        src="/assets/img/sertifikat1.png"
                                        alt="sertifikat1"
                                        width='100%'
                                    />
                                </div>
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
                                        <Title>Sertifikatlar</Title>
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
                                            Barchasini ko'rish
                                        </Button>
                                    </Stack>
                                    <Typography sx={titleStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                                    <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>

                                </Stack>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container>
                            <Grid item xs={12} md={6}
                                bgcolor='#F1F2F8'
                                p={2}
                                display="flex"
                                justifyContent="center"
                                borderRadius='12px'
                            >
                                <div className='sertificates__imgBx'>
                                    <img
                                        className='sertificates__img'
                                        src="/assets/img/sertifikat1.png"
                                        alt="sertifikat1"
                                        width='100%'
                                    />
                                </div>
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
                                        mb={2}
                                    >
                                        <Title>Sertifikatlar</Title>
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
                                            Barchasini ko'rish
                                        </Button>
                                    </Stack>
                                    <Typography sx={titleStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                                    <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>

                                </Stack>
                            </Grid >
                        </Grid >
                    </SwiperSlide >
                </Swiper >
            </div >
        </Stack >
    )
}

export default Certificates