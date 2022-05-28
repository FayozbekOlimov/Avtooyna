import React, { useCallback, useEffect, useState } from 'react';
import Title from "../../../components/Title";
import Loading from "../../../components/Loading";
import { Grid } from '@mui/material'
import baseAPI from '../../../api/baseAPI';
import { brandsUrl } from '../../../api/apiUrls';
import { useT } from '../../../custom/hooks/useT';
import "./style.scss";
import { API_IMG_URL } from '../../../constants';


const Brands = () => {
	const { t, lang } = useT();
	const [brands, setBrands] = useState([]);
	const [loading, setLoading] = useState(false);

	const getBrands = useCallback(() => {
		setLoading(true)
		baseAPI.fetchAll(brandsUrl)
			.then(res => {
				if (res.data.success) {
					setBrands(res.data.data)
					setLoading(false);
				}
			})
			.catch((e) => console.log("error", e))
	}, [])

	useEffect(() => {
		getBrands();
	}, [getBrands])

	return (
		<Grid item xs={12} md={9}>
			{
				loading ? (<Loading />) : (
					<>
						<Title>
							{t(`avtoBrands.${lang}`)}
						</Title>
						<Grid container spacing={2}>
							{
								brands.map((brand) => (
									<React.Fragment key={brand.id}>
										<Grid item md={12}>
											<Title className='brands__title'>{brand.title}</Title>
										</Grid>
										{
											brand.imgs.map(({ id, img }) => (
												<Grid item xs={12} md={6} key={id} width='100%'>
													<div className="brands__img">
														<img src={API_IMG_URL + img} alt={`img${id}`} />
													</div>
												</Grid>
											))
										}
									</React.Fragment>
								)
								)
							}

						</Grid>
					</>
				)
			}

		</Grid>
	);
}

export default Brands;
