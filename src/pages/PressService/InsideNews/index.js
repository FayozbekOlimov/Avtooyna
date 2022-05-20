import React from 'react';
import { Link } from 'react-router-dom';
// import Title from '../../../components/Title'
import Text from "../../../components/Text"
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import { InsideNewsData } from './InsideNewsData';
import { Grid } from '@mui/material';
import "./style.scss"

const InsideNews = () => {
	return (
		<div className='container'>
			<Link to="/press-service">
				<Button
					variant="text"
					sx={{ textTransform: "capitalize" }}
					startIcon={<KeyboardArrowLeft />}
					className="inside_news_back_btn"
				>
					Orqaga qaytish
				</Button>
			</Link>
			<Grid container spacing={4}>
				<Grid item xs={12} md={6} my={3}>
					{InsideNewsData.map(({ date, title, text }, ind) => (
						<Grid item mb={"30px"} >
							<p className="card__date">
								<img src="/assets/icon/calendar.png" alt="calendar-icon" />
								{date}
							</p>
							<h5 className="card__title">{title}</h5>
							<Text>{text}</Text>
						</Grid>
					))}
				</Grid>
				<Grid item xs={12} md={6} my={3}>
					<div news_images>
						<img src="/assets/img/newsImg.png" alt="" width="100%"/>
					</div>
				</Grid>
			</Grid>
		</div >
	);
}

export default InsideNews;
