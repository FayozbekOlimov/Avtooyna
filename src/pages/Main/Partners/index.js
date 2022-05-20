import React from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss'

const Partners = () => {
    return (
        <Stack className='partners' py={{ xs: 2, md: 4 }} bgcolor='background.paper'>
            <div className='container'>
                <Stack direction='column'>
                    <Title>Bizning hamkorlar</Title>
                    <div className='swiper__wrapper'>
                        <Swiper
                            className='partners__swiper'
                            spaceBetween={10}
                            slidesPerView={1}
                            modules={[Navigation]}
                            navigation={true}
                            loop={true}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <img className='partners__swiper-img' src='/assets/img/partners1.jpg' alt='partners1' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='partners__swiper-img' src='/assets/img/partners2.jpg' alt='partners2' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='partners__swiper-img' src='/assets/img/partners3.jpg' alt='partners3' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='partners__swiper-img' src='/assets/img/partners4.jpg' alt='partners4' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Stack>
            </div>
        </Stack>
    )
}

export default Partners