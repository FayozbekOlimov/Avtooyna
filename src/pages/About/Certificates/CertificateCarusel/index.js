import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { IconButton, Stack, styled } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Navigation } from 'swiper'
import "./style.scss"

const ArrowButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[600]),
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: blue[700],
  },
  width: '32px',
  height: '32px'
}));


const certificateCaruselImgs = [
  {
    id: "1",
    img: "./assets/img/Rectangle 58.png",
  },

  {
    id: "2",
    img: "./assets/img/Rectangle 58.png"
  },
  {
    id: "3",
    img: "./assets/img/Rectangle 58.png"
  },
  {
    id: "4",
    img: "./assets/img/Rectangle 58.png"
  },

]

const CertificateCarusel = () => {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <div className='certif_carusel'>
      <div className='certif_header'>
        <h2>Muvofiq sertifikatlar</h2>
        <Stack direction='row' spacing={1} className="arrow">
          <ArrowButton ref={navigationPrevRef}><RiArrowLeftSLine /></ArrowButton>
          <ArrowButton ref={navigationNextRef}><RiArrowRightSLine /></ArrowButton>
        </Stack>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        loop={true}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          892: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
      >
        {
          certificateCaruselImgs.map(caruselImg => (
            <SwiperSlide key={caruselImg.id}><img className='certif__img' src={caruselImg.img} alt="certif1" /></SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default CertificateCarusel;