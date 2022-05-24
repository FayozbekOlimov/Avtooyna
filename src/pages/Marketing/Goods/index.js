import React, { useCallback, useEffect, useState } from 'react';
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import Loading from "../../../components/Loading";
import { Grid } from '@mui/material';
import GoodsDetail from './GoodsCard/GoodsDetail';
import "./style.scss"
import { goodsUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';

const Goods = () => {
	const [xim, setXim] = useState({});
	const [loading, setLoading] = useState(false);

	const getXim = useCallback(() => {
		setLoading(true)
		baseAPI.fetchAll(goodsUrl)
			.then(res => {
				setXim(res.data)
				setLoading(false);
			})
			.catch((e) => console.log("error", e))
	}, [])

	useEffect(() => {
		getXim();
	}, [getXim])

	const { consumers = {}, products = [] } = xim;

	return (

		loading ? (<Loading />) : (
			<>
				<Grid item xs={12} md={9}>

					<Title>{consumers.title}</Title>
					<Text>
						<div dangerouslySetInnerHTML={{ __html: consumers.text }}></div>
					</Text>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={{ md: "30px", sm: "20px", xs: "10px" }}>
						{
							products.map(product => (
								<Grid key={product.id} item xs={12} >
									<GoodsDetail {...product} />
								</Grid>
							))
						}


					</Grid>
				</Grid>
			</>
		)

	);
}

export default Goods;
