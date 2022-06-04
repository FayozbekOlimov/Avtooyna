import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IconButton, Stack, styled, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Navigation, Autoplay } from 'swiper'
import "./style.scss"
import { API_IMG_URL } from '../../../../constants'
import { ArrowForwardIos } from '@mui/icons-material'

const ArrowButton = styled(IconButton)(({ theme }) => ({
	color: theme.palette.getContrastText(blue[500]),
	backgroundColor: '#00468D',
	'&:hover': {
		backgroundColor: blue[800],
	},
	width: '32px',
	height: '32px',
}));

const titleStyle = {
	fontWeight: 700,
	fontSize: '20px',
	color: 'info.main',
}


const CertificateCarusel = ({ title, items = [] }) => {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)

	return (
		<Stack className='certif_carusel'>
			<Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
				<Typography sx={titleStyle}>{title}</Typography>
				<Stack direction='row' spacing={2}>
					<ArrowButton ref={navigationPrevRef}><ArrowForwardIos sx={{ fontSize: '16px', transform: 'rotate(180deg)' }} /></ArrowButton>
					<ArrowButton ref={navigationNextRef}><ArrowForwardIos sx={{ fontSize: '16px' }} /></ArrowButton>
				</Stack>
			</Stack>
			<Swiper
				spaceBetween={15}
				slidesPerView={1}
				modules={[Navigation, Autoplay]}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				onSwiper={(swiper) => {
					setTimeout(() => {
						swiper.params.navigation.prevEl = navigationPrevRef.current
						swiper.params.navigation.nextEl = navigationNextRef.current
						swiper.navigation.destroy()
						swiper.navigation.init()
						swiper.navigation.update()
					})
				}}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					}
				}}
			>
				{
					items.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="certif__img">
								<img src={API_IMG_URL + item.img} alt={`certif1${item.id}`} />
							</div>
						</SwiperSlide>
					))
				}
			</Swiper>
		</Stack>
	)
}

export default CertificateCarusel;