import React, { useState, useCallback, useEffect } from 'react';
import { Grid, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Loading from '../../../components/Loading'
import { videogalleryUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from "../../../custom/hooks/useT";
import { API_IMG_URL } from '../../../constants';
import ReactPlayer from 'react-player';
import './style.scss';

const VideoGallery = () => {
	const { t, lang } = useT();
	const [videos, setVideos] = useState([]);
	const [loading, setLoading] = useState(false);

	const getPhotos = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(videogalleryUrl)
			.then((res) => {
				if (res.data.success) {
					setVideos(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))
	}, [])

	useEffect(() => {
		getPhotos()
	}, [getPhotos])

	const { img, url } = videos;

	return (
		loading ? (
			<Grid item xs={12} md={9}>
				<Loading />
			</Grid>
		) : (
			<Grid item xs={12} md={9}>
				<Title>{t(`videogallery.${lang}`)}</Title>
				<div className="player-wrapper">
					<ReactPlayer
						className='react-player'
						controls={true}
						url={url}
						width="100%"
						height="100%"
						light={API_IMG_URL + img}
					/>
				</div >
			</Grid >
		)
	);
}

export default VideoGallery;
