import React from 'react';
import { Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from "../../../components/Text"
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { newsData } from './newsData';
import "./style.scss"

const News = () => {
	const titleStyle = {
		fontWeight: 700,
		fontSize: '20px',
		color: 'info.main',
		marginBottom: '8px'
	}
	return (
		<>
			<Grid item xs={12} md={9}>
				<Title>Yangiliklar</Title>
				<Grid container>
					{newsData.map(({ id, src, date, title, text, content = true, toUrl }, ind) => (
						<Grid item xs={12} mb={"30px"} key={ind}>
							<Grid container className='news_card' p={2} bgcolor='background.default'>
								<Grid item xs={12} md={6} className='news_img'>
									<img src={src} alt={`img${ind}`} />
								</Grid>
								<Grid item xs={12} md={6} pl={{ xs: 0, md: 2 }} pt={{ xs: 2, md: 0 }}>
									<Typography sx={titleStyle} className="card__title">{title}</Typography>
									<p className="card__date">
										<img src="/assets/icon/calendar.png" alt="calendar-icon" />
										{date}
									</p>
									{content && <Text>{text}</Text>}
									<Link to={toUrl}>
										<Button
											variant="text"
											sx={{ textTransform: "capitalize" }}
											endIcon={<RiArrowRightSLine />}
										>
											Batafsil
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Grid >
		</>
	);
}

export default News;
