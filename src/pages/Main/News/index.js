import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IconButton, Stack, styled } from '@mui/material'
import { blue } from '@mui/material/colors'
import Card from '../Card'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import { homeNewsUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from '../../../custom/hooks/useT'

const ArrowButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: '#00468D',
    '&:hover': {
        backgroundColor: blue[800],
    },
    width: '32px',
    height: '32px',
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
                            <RiArrowLeftSLine />
                        </ArrowButton>
                        <ArrowButton ref={newCaruselNextRef}>
                            <RiArrowRightSLine />
                        </ArrowButton>
                    </Stack>
                </Stack>

                <div className='news__swipper__wrapper'>
                    <Swiper
                        className='news_swiper'
                        spaceBetween={10}
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
                            <SwiperSlide key={item.id}>
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