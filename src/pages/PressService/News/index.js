import React from 'react';
import { Grid, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from "../../../components/Text"
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { newsData } from './newsData';
import "./style.scss"

const News = ({ id, src, date, title, text, toUrl, content = true }) => {
	return (
		<>
			<Grid item xs={9} md={9}>
				<Stack direction="column">
					<Title>Yangiliklar</Title>
					{newsData.map(({ id, src, date, title, text, toUrl }, ind) => (
						<Grid item mb={"30px"} >
							<div className='news_card'>
								<div className='news_img'>
									<img src={src} alt={`img${ind}`} />
								</div>
								<div className='news_title'>
									<h5 className="card__title">{title}</h5>
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
								</div>
							</div>
						</Grid>
					))}
				</Stack>
			</Grid >
		</>
	);
}

export default News;
