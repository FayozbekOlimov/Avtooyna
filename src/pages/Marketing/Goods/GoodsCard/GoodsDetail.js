import React from 'react';
import Title from "../../../../components/Title";
import { Stack, Typography, Grid } from '@mui/material';
import { API_IMG_URL } from "../../../../constants";
import "./style.scss";

const GoodsDetail = ({ title, items = [] }) => {
	const titleStyle = {
		fontWeight: 600,
		fontSize: '20px',
		color: 'info.main',
		marginTop: '16px',
	}
	return (
		<Stack direction='column' mb={4}>
			<Title>{title}</Title>
			<Grid container spacing={{ md: "30px", sm: "20px", xs: "10px" }}>
				{items.map(({ id, img, title }) => (
					<Grid item xs={12} sm={6} md={4} key={id} >
						<Stack className='card_box' p={2} bgcolor="background.default">
							<img src={API_IMG_URL + img} alt={`img${id}`} />
							<Typography sx={titleStyle}>{title}</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
}

export default GoodsDetail;
