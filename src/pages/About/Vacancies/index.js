import React, { useState, useEffect, useCallback } from 'react';
import { Stack, Grid } from '@mui/material';
import Resume from './Resume';
import Title from "../../../components/Title"
import Text from "../../../components/Text"
import "./styled.scss"
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
			</Title>
			<div className="jobs_body">
				<div className="jobs_title">
					<Resume title={"Rezyume blankasini yuklab oling "} number={"1"} text={"Rezyume blankasi (40 kb)"} doc={"Yuklab olish"} />
				</div>
				<div className="jobs_img">
					<div className="resume_image">
						<Grid item xs={5} md={6} >
							<img className='resume_img' src="/assets/img/resume_img.png" alt="resume_img" />
						</Grid>
					</div>
				</div>
			</div>
		</Stack>
	);
}

export default Vacancies;
