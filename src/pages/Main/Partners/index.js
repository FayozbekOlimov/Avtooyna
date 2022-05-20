import React from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
    return (
        <Stack className='partners' py={{ xs: 2, md: 4 }}>
            <div className='container'>
                <Stack direction='column'>
                    <Title>Bizning hamkorlar</Title>
                    {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        navigation={true}
                    >
                         <SwiperSlide>
                            <img src='/assets/img/partners1.png' alt='partners1' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/assets/img/partners2.png' alt='partners2' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/assets/img/partners3.png' alt='partners1' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/assets/img/partners4.png' alt='partners1' />
                        </SwiperSlide>
                    </Swiper> */}
                    <Swiper
                        // className='news_swiper'
                        spaceBetween={10}
                        slidesPerView={1}
                        // navigation = {
                        //     clickable: true,
                        // }
                        modules={[Navigation]}
                        navigation={true}
                        // navigation={{
                        //     prevEl: newCaruselPrevRef.current,
                        //     nextEl: newCaruselNextRef.current,
                        // }}
                        // onSwiper={(swiper) => {
                        //     setTimeout(() => {
                        //         // swiper.params.navigation.prevEl = newCaruselPrevRef.current
                        //         // swiper.params.navigation.nextEl = newCaruselNextRef.current
                        //         swiper.navigation.destroy()
                        //         swiper.navigation.init()
                        //         swiper.navigation.update()
                        //     })
                        // }}
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
                            <img src='/assets/img/partners1.png' alt='partners1' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/assets/img/partners2.png' alt='partners2' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/assets/img/partners3.png' alt='partners1' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/assets/img/partners4.png' alt='partners1' />
                        </SwiperSlide>
                    </Swiper>
                </Stack>
            </div>
        </Stack>
    )
}

export default Partners