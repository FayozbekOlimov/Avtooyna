import React from 'react'
import { Grid, Stack } from '@mui/material'
import Title from '../../../components/Title'
import { advantagesData } from './advantagesData'
import './style.css'

const Advantages = () => {
	return (
		<Stack py={4} direction='row' className='advantages' alignItems='center'>
			<div className="container">
				<Title>Bizning afzalliklarimiz</Title>
				<Grid container spacing={2}>
					{advantagesData.map(({ icon, title }, ind) => (
						<Grid item xs={12} sm={6} key={ind}>
							<Stack direction='row' spacing={2} alignItems='center'>
								<div className="advantages__icon">
									<img src={icon} alt={`icon${ind+1}`} />
								</div>
								<h2 className="advantages__title">{title}</h2>
							</Stack>
						</Grid>
					))}
				</Grid>
			</div>
			<div className="advantages__img">
				<img src="./assets/img/malibu.png" alt="advantages-img" />
			</div>
		</Stack>
	)
}

export default Advantages