import React from 'react';
import { Grid } from '@mui/material'
// import Text from "../../../components/Text"
import Title from '../../../components/Title'
import "./style.scss"

const VideoGallery = () => {
	return (
		<>
			<Grid item xs="9"  md="9">
				<Title>Videogalereya</Title>
				<img src="/assets/img/videoGallery.png" width="100%"/>
			</Grid>
		</>
	);
}

export default VideoGallery;
