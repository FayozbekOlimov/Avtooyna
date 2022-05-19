import React from 'react';
import { Grid } from '@mui/material'
// import Text from "../../../components/Text"
import Title from '../../../components/Title'
import "./style.scss"
const GalleryImg = [
	{
		id: 1,
		img: "/assets/img/photogallery1.png"
	},
	{
		id: 2,
		img: "/assets/img/photogallery2.png"
	},
	{
		id: 3,
		img: "/assets/img/photogallery3.png"
	},
]
const GalleryImages = [
	
	{
		id: 3,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 2,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 3,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 2,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 3,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 2,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 3,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 2,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 3,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 2,
		img: "/assets/img/photogallery4.png"
	},
	{
		id: 3,
		img: "/assets/img/photogallery4.png"
	},
]
const PhotoGallery = () => {
	return (
		<>
		{
			GalleryImg.map(({ id, img }) => (
				<Grid item md={3} sm={6} xs={12}>
					<div key={id} className='gallery_img'>
						<img src={img} alt={`img${id}`}width="100%" />
					</div>
				</Grid>
			))
		}
		{
			GalleryImages.map(({id, img}) => (
					<Grid item xs={12} sm={6} md={3}>
						<Grid item md={12} xs={12}>
							<div key={id} className='gallery_img'>
								<img src={img} alt={`img${id}`} width="100%" />
							</div>
						</Grid>
					</Grid>
				))
		}
		</>
	);
}

export default PhotoGallery;
