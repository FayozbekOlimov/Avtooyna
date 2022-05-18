import React, { useRef } from 'react'
import { Button, Grid, IconButton, Stack, styled, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { theme } from '../../../static/theme'
// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss'
import { blue } from '@mui/material/colors'

const titleStyle = {
    fontWeight: 500,
    fontSize: '20px',
    color: theme.palette.info.main,
    marginBottom: theme.spacing(1.5),
}

const ArrowButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: '#00468D',
    '&:hover': {
        backgroundColor: blue[800],
    },
    width: '32px',
    height: '32px',
}));


const Certificates = () => {
    const newCaruselPrevRef = useRef(null);
    const newCaruselNextRef = useRef(null);

    return (
        <Stack py={{ xs: 2, md: 4 }} className='sertificates' direction='row' width='100%'>
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: newCaruselPrevRef.current,
                        nextEl: newCaruselNextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = newCaruselPrevRef.current
                            swiper.params.navigation.nextEl = newCaruselNextRef.current
                            swiper.navigation.destroy()
                            swiper.navigation.init()
                            swiper.navigation.update()
                        })
                    }}
                    loop={true}
                >
                    <SwiperSlide>
                        <Grid container width='100%'>
                            <Grid item xs={12} md={6}
                                bgcolor={theme.palette.primary.navBg}
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
                                        <Button variant='outlined' sx={{ textTransform: 'none', marginBottom: 2 }} endIcon={<RiArrowRightSLine />}>Barchasini ko'rish</Button>
                                    </Stack>
                                    <Typography sx={titleStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                                    <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                    <Stack direction='row' spacing={2}>
                                        <ArrowButton ref={newCaruselPrevRef}>
                                            <RiArrowLeftSLine />
                                        </ArrowButton>
                                        <ArrowButton ref={newCaruselNextRef}>
                                            <RiArrowRightSLine />
                                        </ArrowButton>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Stack>
    )
}

export default Certificates