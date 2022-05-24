import React, { useState, useEffect, useCallback } from 'react';
import { Stack, Grid } from '@mui/material';
import Resume from './Resume';
import Title from "../../../components/Title"
import { vacanciesUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';


const Vacancies = () => {
	const [vacancies, setVacancies] = useState([]);
	const [loading, setLoading] = useState(false);

	const getVacancies = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(vacanciesUrl)
			.then((res) => {
				// if (res.data.success) {
				setVacancies(res.data);
				setLoading(false);
				// }
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getVacancies()
	}, [getVacancies])

	return (
		<Stack className="jobs_wrapper">
			<Title>
				{/* {title} */}
				Bosh ish o’rinlari
			</Title>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Resume
						title={"Rezyume blankasini yuklab oling "}
						number={"1"}
						text={"Rezyume blankasi (40 kb)"}
						doc={"Yuklab olish"}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<img 
						className='resume_img' 
						src="/assets/img/resume_img.png" 
						alt="resume_img" 
						width='100%'
					/>
				</Grid>
			</Grid>
		</Stack>
	);
}

export default Vacancies;
