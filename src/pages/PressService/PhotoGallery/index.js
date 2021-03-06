import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from '@mui/material'
import Loading from '../../../components/Loading'
import { homeGalleryUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from '../../../constants';
import Fancybox from '../../../components/Fancybox';
import "./style.scss"

const PhotoGallery = () => {

	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(false);

	const getPhotos = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(homeGalleryUrl)
			.then((res) => {
				if (res.data.success) {
					setPhotos(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getPhotos()
	}, [getPhotos])


	return (

		loading ? (
			<Grid item md={9} sm={6} xs={12}>
				<Loading />
			</Grid>
		) : (
			<>
				{
					photos.slice(0, 3).map(({ id, img }) => (
						<Grid item md={3} sm={6} xs={12} key={id}>
							<Fancybox>
								<div key={id} className='gallery_img'>
									<a data-fancybox="service-gallery" href={API_IMG_URL + img} className='fancybox-item'>
										<img src={API_IMG_URL + img} alt={`img${id}`} />
									</a>
								</div>
							</Fancybox>
						</Grid>
					))
				}
				{
					photos.slice(3).map(({ id, img }) => (
						<Grid item xs={12} sm={6} md={3} key={id}>
							<Fancybox>
								<div key={id} className='gallery_img'>
									<a data-fancybox="service-gallery" href={API_IMG_URL + img} className='fancybox-item'>
										<img src={API_IMG_URL + img} alt={`img${id}`} />
									</a>
								</div>
							</Fancybox>
						</Grid>
					))
				}
			</>
		)
	);
}

export default PhotoGallery;
