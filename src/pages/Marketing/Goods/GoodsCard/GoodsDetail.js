import React from 'react';
import { GoodsCards } from './goodsData';
import Title from "../../../../components/Title";
import "./style.scss"
import Grid from '@mui/material/Grid';

const GoodsDetail = () => {
	return (
		<>
			<Title>Gul uchun yog'ochdan gulzorlar va idishlar</Title>
			<Grid container spacing={{ xs: "10px", sm: "20px", md: "30px" }}>
				{
					GoodsCards.map(({ id, img, text }) => (
						<Grid item md={4} xs={12}>
							<div key={id} className='card_box'>
								<img src={img} alt={`img${id}`} />
								<p>{text}</p>
							</div>
						</Grid>
					))
				}

			</Grid>
		</>
	);
}

export default GoodsDetail;
