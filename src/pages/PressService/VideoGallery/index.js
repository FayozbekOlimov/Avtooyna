import React from 'react';
import { Grid } from '@mui/material'
import Title from '../../../components/Title'

const VideoGallery = () => {
	return (
		<>
			<Grid item xs={12} md={9}>
				<Title>Videogalereya</Title>
				<img src="/assets/img/videoGallery.png" width="100%"/>
			</Grid>
		</>
	);
}

export default VideoGallery;
