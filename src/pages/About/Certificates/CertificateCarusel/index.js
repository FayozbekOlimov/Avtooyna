import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { IconButton, Stack, styled, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Navigation } from 'swiper'
import "./style.scss"
import { theme } from '../../../../static/theme'

const ArrowButton = styled(IconButton)(({ theme }) => ({
	color: theme.palette.getContrastText(blue[500]),
	backgroundColor: theme.palette.primary.main,
	'&:hover': {
		backgroundColor: '#00468D',
	},
	width: '32px',
	height: '32px',
}));

const titleStyle = {
	fontWeight: 700,
	fontSize: '20px',
	color: theme.palette.titleColor.main,
}

const certificateCaruselImgs = [
	{
		id: "1",
		img: "/assets/img/certif1.png",
	},

	{
		id: "2",
		img: "/assets/img/certif1.png"
	},
	{
		id: "3",
		img: "/assets/img/certif1.png"
	},
	{
		id: "4",
		img: "/assets/img/certif1.png"
	},

]

const CertificateCarusel = () => {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)

	return (
		<div className='certif_carusel'>
			<Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
				<Typography sx={titleStyle}>Muvofiq sertifikatlar</Typography>
				<Stack direction='row' spacing={1} className="arrow">
					<ArrowButton ref={navigationPrevRef}><RiArrowLeftSLine /></ArrowButton>
					<ArrowButton ref={navigationNextRef}><RiArrowRightSLine /></ArrowButton>
				</Stack>
			</Stack>
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				modules={[Navigation]}
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
					certificateCaruselImgs.map(caruselImg => (
						<SwiperSlide key={caruselImg.id}>
							<img className='certif__img' src={caruselImg.img} alt="certif1" />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default CertificateCarusel;