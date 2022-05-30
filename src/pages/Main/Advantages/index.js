import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import baseAPI from '../../../api/baseAPI'
import { homeAdvantageslUrl } from '../../../api/apiUrls';
import { useT } from "../../../custom/hooks/useT";
import './style.scss';

const advantageIcons = ["/assets/icon/icon1.png", "/assets/icon/icon2.png", "/assets/icon/icon3.png", "/assets/icon/icon4.png", "/assets/icon/icon5.png", "/assets/icon/icon6.png",]

const iconBoxStyle = {
	width: '55px',
	height: '55px',
	borderRadius: '50%',
	display: 'grid',
	placeItems: 'center',
	backgroundColor: 'primary.light'
}


const Advantages = () => {
	const { t, lang } = useT();
	const [advantages, setAdvantages] = useState([]);

	const getAdvantages = useCallback(() => {
		baseAPI.fetchAll(homeAdvantageslUrl)
			.then((res) => {
				setAdvantages(res.data.data);
			})
			.catch((e) => console.log("e", e));
	}, [])

	useEffect(() => {
		getAdvantages();
	}, [getAdvantages])

	return (
		<Stack py={{ xs: 2, md: 4 }} direction={{ xs: 'column', md: 'row' }} className='advantages' alignItems='center' bgcolor='background.paper'>
			<div className="container">
				<Title>{t(`ourAdvantages.${lang}`)}</Title>
				<Grid container spacing={2}>
					{advantages.map((advantage, idx) => (
						<Grid item xs={12} sm={6} key={advantage.id}>
							<Stack direction='row' spacing={2} alignItems='center'>
								<Stack className="advantages__icon" sx={iconBoxStyle}>
									<img src={advantageIcons[idx]} alt={`icon${idx + 1}`} />
								</Stack>
								<Typography className="advantages__title" sx={{ color: 'info.light' }}>
									<div dangerouslySetInnerHTML={{ __html: advantage.title }}></div>
								</Typography>
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