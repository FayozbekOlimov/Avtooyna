import React from 'react';
import { Grid } from '@mui/material'
import Text from "../../../components/Text"
import Title from '../../../components/Title'
import "./style.scss"

const PublicOffer = () => {
	return (
		<Grid item xs={9}>
			<div className="offer_main">
			<Title>Biz haqimizda ommaviy oferta</Title>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<h4>
						“Avtooyna” mahsulotlarini<br /> xavfsizlik stikerlari bilan ishlab<br /> chiqarishni yo‘lga qo‘ydi
					</h4>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at fugit quaerat laudantium. Commodi ipsum, voluptatem maxime, ratione dolorum nihil laborum voluptatum quasi fugiat ipsa numquam excepturi eligendi qui esse!
					</Text>
					<a href="www.spot.uz"><i>www.spot.uz</i></a>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src="/assets/img/offerImg.png" alt="offerImg" width="100%"/>
				</Grid>
			</Grid>
			</div>

		</Grid>
	);
}

export default PublicOffer;
