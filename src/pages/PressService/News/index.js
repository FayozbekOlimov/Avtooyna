import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from "../../../components/Text"
import Loading from "../../../components/Loading"
import PaginationRounded from "../../../components/PaginationRounded"
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
	marginBottom: '8px',
	'& *': {
		fontWeight: "inherit",
	}
}

const News = () => {
	const { t, lang } = useT();
	const [news, setNews] = useState({});
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	const getNews = useCallback(() => {
		setLoading(true);
		baseAPI.fetchWithPagination({ url: homeNewsUrl, page })
			.then((res) => {
				if (res.data.success) {
					setNews(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [page])

	useEffect(() => {
		getNews()
	}, [getNews])

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page])

	const handleChange = (event, value) => {
		setPage(value);
	};

	const { items = [], _meta = {} } = news;

	return (
		<>
			<Grid item xs={12} md={9}>
				{
					loading ? (<Loading />) : (
						<>
							<Title>{t(`news.${lang}`)}</Title>
							<Grid container spacing={2}>
								{
									items.map(({ id, img, date, title, text }) => (
										<Grid item xs={12} key={id}>
											<Grid container className='news__card' p={2} bgcolor='background.default'>
												<Grid item xs={12} md={4}>
													<div className="news_img">
														<img src={API_IMG_URL + img} alt={`img${id}`} />
													</div>
												</Grid>
												<Grid item xs={12} md={8} pl={{ xs: 0, md: 2 }} pt={{ xs: 2, md: 0 }}>
													<Typography sx={titleStyle} className="card__title"><div dangerouslySetInnerHTML={{ __html: title }}></div></Typography>
													<p className="card__date">
														<img src="/assets/icon/calendar.png" alt="calendar-icon" />
														{date}
													</p>
													<Text className="news__card__text"><span dangerouslySetInnerHTML={{ __html: text }}></span></Text>
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
								{
									_meta.pageCount > 1 && (
										<PaginationRounded handleChange={handleChange} count={_meta.pageCount} page={page} />
									)
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
