import React from 'react';
import { Grid } from '@mui/material';
import Resume from './Resume/index.js';
import "./styled.scss"

const jobsTitle = `
<h1>Bosh ish o’rinlari</h1>
`
const Vacancies = () => {
	return (
		<Grid item xs={10}>
			<div className="jobs_wrapper">
				<div dangerouslySetInnerHTML={{__html:jobsTitle}}></div>

				<div className="jobs_body">
					<div className="jobs_title">
						<Resume title={"Rezyume blankasini yuklab oling "} number={"1"} text={"Rezyume blankasi (40 kb)"} doc={"Yuklab olish"}/>
					</div>
					<div className="jobs_img">
						<div className="resume_image">
							<Grid  item xs={5}md={6} >
								<img className='resume_img' src="/assets/img/resume_img.png" alt="resume_img" />
							</Grid>
						</div>
					</div>
				</div>
			</div>
		
		</Grid>
	);
}

export default Vacancies;
