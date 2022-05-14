import React, { useRef } from 'react'
import { IconButton, Stack, styled } from '@mui/material'
import Card from '../Card'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { cardData } from './cardData';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import { blue } from '@mui/material/colors'



const ArrowButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[600]),
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: blue[700],
    },
    width: '32px',
    height: '32px'
}));


const News = () => {

    const newCaruselPrevRef = useRef(null);
    const newCaruselNextRef = useRef(null);

    return (
        <Stack py={4} className="news">
            <div className="container">
                <Title>Yangiliklar</Title>
                <Stack direction='row' justifyContent={"space-between"} alignItems={"center"} className="news_carusel_top" >
                    <Text>Korporativ mijozlar va jismoniy shaxslar uchun turli xildagi tovarlarni etkazib berish</Text>
                    <div className="new_carusel_arrows">
                        <ArrowButton ref={newCaruselPrevRef}>
                            <RiArrowLeftSLine />
                        </ArrowButton>
                        <ArrowButton ref={newCaruselNextRef}>
                            <RiArrowRightSLine />
                        </ArrowButton>
                    </div>
                </Stack>

                <div className='news__swipper'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={{
                            // Both prevEl & nextEl are null at render so this does not work
                            prevEl: newCaruselPrevRef.current,
                            nextEl: newCaruselNextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            // Delay execution for the refs to be defined
                            setTimeout(() => {
                                // Override prevEl & nextEl now that refs are defined
                                swiper.params.navigation.prevEl = newCaruselPrevRef.current
                                swiper.params.navigation.nextEl = newCaruselNextRef.current

                                // Re-init navigation
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