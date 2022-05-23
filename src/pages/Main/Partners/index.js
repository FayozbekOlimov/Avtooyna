import React, { useCallback, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss'
import baseAPI from '../../../api/baseAPI';
import { homePartnerUrl } from '../../../api/apiUrls';

const Partners = () => {

    const [partners, setPartners] = useState([]);

    const getPartners = useCallback(() => {
        baseAPI.fetchAll(homePartnerUrl)
            .then((res) => {
                setPartners(res.data.hamkorlar);
            })
            .catch((e) => console.log("e", e));
    }, [])

    useEffect(() => {
        getPartners();
    }, [getPartners])

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
                            {
                                partners.map(partner => (
                                    <SwiperSlide key={partner.id}>
                                        <img className='partners__swiper-img' src={partner.imgs} alt={`partners${partner.id}`} />
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>
                </Stack>
            </div>
        </Stack>
    )
}

export default Partners