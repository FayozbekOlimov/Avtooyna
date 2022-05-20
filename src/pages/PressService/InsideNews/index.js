import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from "../../../components/Text"
import { ArrowBack, KeyboardArrowLeft } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { InsideNewsData } from './InsideNewsData';
import { Grid } from '@mui/material';
import "./style.scss"

const InsideNews = () => {
	const navigate = useNavigate();

	const titleStyle = {
		fontWeight: 700,
		fontSize: '20px',
		color: 'info.main',
		marginBottom: '16px'
	}

	return (
		<Stack direction='row' bgcolor='background.paper'>
			<div className='container'>
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
					<Grid container>
						{InsideNewsData.map(({ date, title, text }, ind) => (
							<Grid item xs={12} my={1} key={ind}>
								<Grid container spacing={2}>
									<Grid item xs={12} md={6}>
										<p className="card__date">
											<img src="/assets/icon/calendar.png" alt="calendar-icon" />
											{date}
										</p>
										<Typography sx={titleStyle} className="card__title">{title}</Typography>
										<Text>{text}</Text>
									</Grid>
									<Grid item xs={12} md={6}>
										<div className='news_images'>
											<img src="/assets/img/newsImg.png" alt="news-img" />
										</div>
									</Grid>
								</Grid>
							</Grid>
						))}
					</Grid>
				</Stack>
			</div >
		</Stack>
	);
}

export default InsideNews;
