import React, { useState, useCallback, useEffect } from 'react';
import { Grid, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Loading from '../../../components/Loading'
import { videogalleryUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from "../../../custom/hooks/useT";
import { API_IMG_URL } from '../../../constants';

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
			<Grid item xs={12} md={9} sm={6}>
				<Loading />
			</Grid>
		) : (
			<Grid item xs={12} md={9}>
				<Title>{t(`videogallery.${lang}`)}</Title>
				<Stack>
					<video controls
						src={url}
						poster={API_IMG_URL + img}
						width="100%"
					>
					</video>
				</Stack>
			</Grid >
		)
	);
}

export default VideoGallery;
