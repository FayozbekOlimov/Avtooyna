import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IconButton, Stack, styled } from '@mui/material'
import { blue } from '@mui/material/colors'
import Card from '../Card'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
// swiper
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import { homeNewsUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from '../../../custom/hooks/useT'
import { ArrowForwardIos } from '@mui/icons-material'

const ArrowButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: '#00468D',
    '&:hover': {
        backgroundColor: blue[800],
    },
    width: '32px',
    height: '32px',
    fontSize: '12px'
}));


const News = () => {
    const { t, lang } = useT();
    const [news, setNews] = useState({});

    const getNews = useCallback(() => {
        baseAPI.fetchAll(homeNewsUrl)
            .then((res) => {
                if (res.data.success) {
                    setNews(res.data.data)
                }
            })
            .catch((e) => console.log("e", e))
    }, [])

    useEffect(() => {
        getNews()
    }, [getNews])

    const newCaruselPrevRef = useRef(null);
    const newCaruselNextRef = useRef(null);

    const { items = [] } = news;

    return (
        <Stack py={{ xs: 2, md: 4 }} className="news" bgcolor='background.paper'>
            <div className="container">
                <Title>{t(`news.${lang}`)}</Title>
                <Stack
                    direction='row'
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flexWrap="wrap" className="news_carusel_top"
                >
                    <Text>{t(`newsDesc.${lang}`)}</Text>
                    <Stack className="new_carusel_arrows" direction='row'>
                        <ArrowButton ref={newCaruselPrevRef}>
                            <ArrowForwardIos sx={{fontSize: '16px', transform: 'rotate(180deg)'}} />
                        </ArrowButton>
                        <ArrowButton ref={newCaruselNextRef}>
                            <ArrowForwardIos sx={{fontSize: '16px'}} />
                        </ArrowButton>
                    </Stack>
                </Stack>

                <div className='news__swipper__wrapper'>
                    <Swiper
                        className='news_swiper'
                        spaceBetween={10}
                        slidesPerView={1}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
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
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }}
                    >
                        {items.map((item) => (
                            <SwiperSlide key={item.id} className='news_swiper-item'>
                                <Card {...item} content={true} toUrl={"news"} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Stack>
    )
}

export default News