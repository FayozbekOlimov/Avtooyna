import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import { advantagesData } from './advantagesData'
import './style.css'
import baseAPI from '../../../api/baseAPI'
import { homeAdvantageslUrl } from '../../../api/apiUrls'

const Advantages = () => {
	const [advantages, setAdvantages] = useState();

	const getAdvantages = useCallback(() => {
		baseAPI.fetchAll(homeAdvantageslUrl)
			.then((res) => {
				setAdvantages(res.data);
			})
			.catch((e) => console.log("e", e));
	}, [])

	useEffect(() => {
		getAdvantages();
	}, [getAdvantages])



	const iconBoxStyle = {
		width: '55px',
		height: '55px',
		borderRadius: '50%',
		display: 'grid',
		placeItems: 'center',
		backgroundColor: 'primary.light'
	}

	return (
		<Stack py={{ xs: 2, md: 4 }} direction={{ xs: 'column', md: 'row' }} className='advantages' alignItems='center' bgcolor='background.paper'>
			<div className="container">
				<Title>Bizning afzalliklarimiz</Title>
				<Grid container spacing={2}>
					{advantagesData.map(({ icon, title }, ind) => (
						<Grid item xs={12} sm={6} key={ind}>
							<Stack direction='row' spacing={2} alignItems='center'>
								<Stack className="advantages__icon" sx={iconBoxStyle}>
									<img src={icon} alt={`icon${ind + 1}`} />
								</Stack>
								<Typography className="advantages__title" sx={{ color: 'info.light' }}>{title}</Typography>
							</Stack>
						</Grid>
					))}
				</Grid>
			</div>
			<div className="advantages__img">
				<img src="/assets/img/malibu.png" alt="advantages-img" />
			</div>
		</Stack>
	)
}

export default Advantages