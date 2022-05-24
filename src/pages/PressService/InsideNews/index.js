import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Text from "../../../components/Text"
import Loading from "../../../components/Loading"
import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import "./style.scss"
import baseAPI from '../../../api/baseAPI';
import { newsDetailUrl } from '../../../api/apiUrls';
import { API_IMG_URL } from '../../../constants';

const titleStyle = {
	fontWeight: 700,
	fontSize: '20px',
	color: 'info.main',
	marginBottom: '16px'
}

const InsideNews = () => {
	const navigate = useNavigate();
	let { news_id } = useParams();
	const [oneNews, setOneNews] = useState({});
	const [loading, setLoading] = useState(false);

	news_id = news_id.slice(1);

	const getOneNews = useCallback(() => {
		setLoading(true);
		baseAPI.find(news_id, newsDetailUrl)
			.then((res) => {
				// if (res.data.success) {
				setOneNews(res.data.newsOne);
				setLoading(false);
				// }
			})
			.catch((e) => console.log("e", e))

	}, [news_id])

	useEffect(() => {
		getOneNews()
	}, [getOneNews])

	const { title, text, img, date } = oneNews;

	return (
		<Stack direction='row' bgcolor='background.paper'>
			<div className='container'>
				{
					loading ? (<Loading />) : (
						<Stack direction='column' width="100%">
							<Button
								variant="outlined"
								sx={{
									textTransform: "none",
									alignSelf: 'flex-start',
									my: 1.5,
									color: 'secondary.main',
									borderColor: 'border.main'
								}}
								startIcon={<ArrowBack />}
								className="inside_news_back_btn"
								onClick={() => navigate(-1)}
							>
								Orqaga qaytish
							</Button>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6} my={1}>
									<p className="card__date">
										<img src="/assets/icon/calendar.png" alt="calendar-icon" />
										{date}
									</p>
									<Typography sx={titleStyle} className="card__title"><div dangerouslySetInnerHTML={{ __html: title }}></div></Typography>
									<Text><div dangerouslySetInnerHTML={{ __html: text }}></div></Text>
								</Grid>
								<Grid item xs={12} sm={6} md={6}>
									<div className='news_images'>
										<img src={API_IMG_URL + img} alt="news-img" />
									</div>
								</Grid>
							</Grid>
						</Stack>
					)
				}

			</div >
		</Stack>
	);
}

export default InsideNews;
