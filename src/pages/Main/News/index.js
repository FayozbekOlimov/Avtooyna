import React from 'react'
import { Stack } from '@mui/material'
import Card from '../Card'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { cardData } from './cardData';
// swiper
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const News = () => {
    return (
        <Stack py={4} className="news">
            <div className="container">
                <Title>Yangiliklar</Title>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Text>Korporativ mijozlar va jismoniy shaxslar uchun turli xildagi tovarlarni etkazib berish</Text>
                </Stack>

                <div className='news__swipper'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        modules={[Navigation, Autoplay]}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            }
                        }}
                    >
                        {cardData.map((data, ind) => (
                            <SwiperSlide key={ind}>
                                <Card {...data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Stack>
    )
}

export default News