import React, { useState, useEffect, useCallback } from 'react'
import { Grid, Typography } from '@mui/material'
import Text from "../../../components/Text"
import Title from '../../../components/Title'
import Loading from '../../../components/Loading'
import baseAPI from '../../../api/baseAPI'
import { publicOfertaUrl } from '../../../api/apiUrls';
import { API_IMG_URL } from "../../../constants";
import './style.scss';

const titleStyle = {
	fontWeight: 700,
	fontSize: '20px',
	color: 'info.main',
	marginBottom: '16px',
	'& *': {
		fontWeight: "inherit"
	}
}

const PublicOffer = () => {
	const [oferta, setOferta] = useState({});
	const [loading, setLoading] = useState(false);

	const getOferta = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(publicOfertaUrl)
			.then((res) => {
				if (res.data.success) {
					setOferta(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))
	}, [])

	useEffect(() => {
		getOferta()
	}, [getOferta])

	const { top_title, title, text, img } = oferta;

	return (
		<Grid item xs={12} md={9}>
			{
				loading ? (<Loading />) : (
					<div className="offer_main">
						<Title>{top_title}</Title>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6}>
								<Typography component={'div'} sx={titleStyle}>
									<div dangerouslySetInnerHTML={{ __html: title }}></div>
								</Typography>
								<Text>
									<span dangerouslySetInnerHTML={{ __html: text }}></span>
								</Text>
								<a href="https://www.spot.uz" target="_blank" rel="noopener noreferrer"><i>www.spot.uz</i></a>
							</Grid>
							<Grid item xs={12} md={6}>
								<div className="offer__img">
									<img src={API_IMG_URL + img} alt="offerImg" />
								</div>
							</Grid>
						</Grid>
					</div>
				)
			}
		</Grid>
	);
}

export default PublicOffer;
