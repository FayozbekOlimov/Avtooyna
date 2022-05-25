import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from "../../../components/Text"
import Loading from "../../../components/Loading"
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import baseAPI from '../../../api/baseAPI';
import { homeNewsUrl } from '../../../api/apiUrls';
import { API_IMG_URL } from "../../../constants"
import { useT } from "../../../custom/hooks/useT";
import "./style.scss";

const titleStyle = {
	fontWeight: 700,
	fontSize: '20px',
	color: 'info.main',
	marginBottom: '8px'
}

const News = () => {
	const { t, lang } = useT();
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(false);

	const getNews = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(homeNewsUrl)
			.then((res) => {
				if (res.data.success) {
					setNews(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getNews()
	}, [getNews])


	return (
		<>
			<Grid item xs={12} md={9}>
				{
					loading ? (<Loading />) : (
						<>
							<Title>Yangiliklar</Title>
							<Grid container spacing={2}>
								{
									news.map(({ id, img, date, title, text }) => (
										<Grid item xs={12} key={id}>
											<Grid container className='news_card' p={2} bgcolor='background.default'>
												<Grid item xs={12} md={6} className='news_img'>
													<img src={API_IMG_URL + img} alt={`img${id}`} />
												</Grid>
												<Grid item xs={12} md={6} pl={{ xs: 0, md: 2 }} pt={{ xs: 2, md: 0 }}>
													<Typography sx={titleStyle} className="card__title"><div dangerouslySetInnerHTML={{ __html: title }}></div></Typography>
													<p className="card__date">
														<img src="/assets/icon/calendar.png" alt="calendar-icon" />
														{date}
													</p>
													<Text><div dangerouslySetInnerHTML={{ __html: text }}></div></Text>
													<Link to={`/news/:${id}`}>
														<Button
															variant="text"
															sx={{ textTransform: "capitalize" }}
															endIcon={<RiArrowRightSLine />}
														>
															{t(`detail.${lang}`)}
														</Button>
													</Link>
												</Grid>
											</Grid>
										</Grid>
									))
								}
							</Grid>
						</>
					)
				}
			</Grid >
		</>
	);
}

export default News;
