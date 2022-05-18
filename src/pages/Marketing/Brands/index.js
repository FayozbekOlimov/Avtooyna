import React from 'react';
import Title from "../../../components/Title";
import {Grid} from '@mui/material'
import "./style.scss"	

const BrandsImgs = [
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
			<Grid item xs={9} md={9}>
			<Title>
				Avtomobil markalari
			</Title>
			<div className="brands_img">
				{BrandsImgs.map(({id,img },ind)=>(
					<img src={img} alt={`img${ind}`} />
				))}
			</div>
		</Grid>
	);
}

export default Brands;
