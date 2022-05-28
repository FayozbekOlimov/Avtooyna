import React, { useState, useCallback, useEffect } from 'react';
import { Grid, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Loading from '../../../components/Loading'
import { videogalleryUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from "../../../custom/hooks/useT";

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

	const { id, img, title, url } = videos;
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
						poster={img}
						width="100%"
					>
						Sorry, your browser doesn't support embedded videos,
						but don't worry, you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
						and watch it with your favorite video player!

					</video>
				</Stack>
			</Grid>
		)
	);
}

export default VideoGallery;
