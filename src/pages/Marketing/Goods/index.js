import React, { useCallback, useEffect, useState } from 'react';
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import Loading from "../../../components/Loading";
import { Grid } from '@mui/material';
import GoodsDetail from './GoodsCard/GoodsDetail';
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

	const { data: consumers = {}, datProducts: products = [] } = xim;

	return (

		loading ? (
			<Grid item xs={12} md={9}>
				<Loading />
			</Grid>
		) : (
			<>
				<Grid item xs={12} md={9}>
					<Title>{consumers.title}</Title>
					<Text>
						<span dangerouslySetInnerHTML={{ __html: consumers.text }}></span>
					</Text>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						{
							products.map((product, ind) => (
								<Grid key={ind} item xs={12} >
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
