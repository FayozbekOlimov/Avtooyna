import React from 'react';
import { goodsCards } from './goodsData';
import Title from "../../../../components/Title";
import { Stack, Typography, Grid } from '@mui/material';
import "./style.scss"

const GoodsDetail = () => {
	const titleStyle = {
		fontWeight: 600,
		fontSize: '20px',
		color: 'info.main',
		marginTop: '16px',
	}
	return (
		<Stack direction='column' mb={4}>
			<Title>Gul uchun yog'ochdan gulzorlar va idishlar</Title>
			<Grid container spacing={2}>
				{goodsCards.map(({ id, img, text }) => (
					<Grid item xs={12} md={4} key={id} >
						<Stack className='card_box' p={2} bgcolor="background.default">
							<img src={img} alt={`img${id}`} />
							<Typography sx={titleStyle}>{text}</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
}

export default GoodsDetail;
