import React, { useCallback, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss'
import baseAPI from '../../../api/baseAPI';
import { homePartnerUrl } from '../../../api/apiUrls';
import { API_IMG_URL } from '../../../constants';
import { useT } from '../../../custom/hooks/useT';

const Partners = () => {
    const { t, lang } = useT();
    const [partners, setPartners] = useState([]);

    const getPartners = useCallback(() => {
        baseAPI.fetchAll(homePartnerUrl)
            .then((res) => {
                if (res.data.success) {
                    setPartners(res.data.data);
                }
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
                    <Title>{t(`ourPartners.${lang}`)}</Title>
                    <div className='swiper__wrapper'>
                        <Swiper
                            className='partners__swiper'
                            spaceBetween={10}
                            slidesPerView={1}
                            modules={[Navigation, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
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
                                        <Stack className="partners__swiper__img__wrapper">
                                            <img className='partners__swiper-img' src={API_IMG_URL + partner.imgs} alt={`partners${partner.id}`} />
                                        </Stack>
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