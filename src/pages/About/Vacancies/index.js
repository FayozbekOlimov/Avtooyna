import React, { useState, useEffect, useCallback } from 'react';
import { Stack, Grid } from '@mui/material';
import VacanciesCard from './VacanciesCard';
import Title from "../../../components/Title"
import { vacanciesUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from "../../../custom/hooks/useT";
import { API_IMG_URL } from '../../../constants';
import './style.scss';

const Vacancies = () => {
	const { t, lang } = useT();
	const [vacancies, setVacancies] = useState({});
	const [loading, setLoading] = useState(false);

	const getVacancies = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(vacanciesUrl)
			.then((res) => {
				if (res.data.success) {
					setVacancies(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getVacancies()
	}, [getVacancies])

	return (
		<Stack className="jobs_wrapper">
			<Title>
				{t(`vacancies.${lang}`)}
			</Title>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<VacanciesCard
						{...vacancies}
						title={`downloadResume`}
						text={`resumeBlank`}
						number={1}
					/>
					<VacanciesCard
						title={`fillResume`}
						text={`downloadedResumeFill`}
						number={2}
					/>
					<VacanciesCard
						title={`sendToUs`}
						text={`filledResumeSend`}
						number={3}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<div className='resume_img'>
						<img
							src={API_IMG_URL + vacancies.img}
							alt="resume_img"
							width='100%'
						/>
					</div>
				</Grid>
			</Grid>
		</Stack>
	);
}

export default Vacancies;
