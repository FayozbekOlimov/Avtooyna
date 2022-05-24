import React from 'react'
import { Grid, Typography } from '@mui/material'
import Text from "../../../components/Text"
import Title from '../../../components/Title'

const PublicOffer = () => {
	const titleStyle = {
		fontWeight: 700,
		fontSize: '20px',
		color: 'info.main',
		marginBottom: '16px'
	}
	return (
		<Grid item xs={12} md={9}>
			<div className="offer_main">
				<Title>Biz haqimizda ommaviy oferta</Title>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Typography sx={titleStyle}>
							“Avtooyna” mahsulotlarini<br /> xavfsizlik stikerlari bilan ishlab<br /> chiqarishni yo‘lga qo‘ydi
						</Typography>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at fugit quaerat laudantium. Commodi ipsum, voluptatem maxime, ratione dolorum nihil laborum voluptatum quasi fugiat ipsa numquam excepturi eligendi qui esse!
						</Text>
						<a href="www.spot.uz"><i>www.spot.uz</i></a>
					</Grid>
					<Grid item xs={12} md={6}>
						<img src="/assets/img/offerImg.png" alt="offerImg" width="100%" />
					</Grid>
				</Grid>
			</div>

		</Grid>
	);
}

export default PublicOffer;
