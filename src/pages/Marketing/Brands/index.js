import React from 'react';
import Title from "../../../components/Title";
import { Grid } from '@mui/material'
import "./style.scss"

const brandsImgs = [
	{
		id: "1",
		img: "/assets/img/brands1.png",
	},

	{
		id: "2",
		img: "/assets/img/brands2.png"
	},
	// {
	// 	id: "3",
	// 	img: "/assets/img/brands3.png"
	// },
	// {
	// 	id: "4",
	// 	img: "/assets/img/brands4.png"
	// },

]

const Brands = () => {
	return (
		<Grid item xs={12} md={9}>
			<Title>
				Avtomobil markalari
			</Title>
			<Grid container spacing={2}>
				{brandsImgs.map(({ id, img }, ind) => (
					<Grid item xs={12} md={6} key={ind} className='brands_img'>
						<img src={img} alt={`img${id}`} />
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}

export default Brands;
