import { IconButton, Stack, styled } from '@mui/material'
import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Card from '../Card'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import Title from '../../customComponents/Title'
import Text from '../../customComponents/Text'
import { blue } from '@mui/material/colors';
import { cardData } from './cardData';
import { theme } from '../../static/theme'

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
    const swiper = useSwiper();
    return (
        <Stack py={2} className="news">
            <div className="container">
                <Title>Yangiliklar</Title>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Text>Korporativ mijozlar va jismoniy shaxslar uchun turli xildagi tovarlarni etkazib berish</Text>
                    <Stack direction='row' mb={2} spacing={1}>
                        <ArrowButton><RiArrowLeftSLine /></ArrowButton>
                        <ArrowButton><RiArrowRightSLine /></ArrowButton>
                    </Stack>
                </Stack>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    modules={[Navigation, Pagination, Autoplay]}
                    // navigation
                    autoplay
                    pagination={{ clickable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {cardData.map((data, ind) => (
                        <SwiperSlide key={ind}>
                            <Card {...data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Stack>
    )
}

export default News