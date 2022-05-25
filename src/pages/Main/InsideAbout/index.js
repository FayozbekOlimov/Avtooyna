import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../../components/Title'
import Text from "../../../components/Text"
import Loading from "../../../components/Loading";
import { ArrowBack } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { useT } from '../../../custom/hooks/useT';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from '../../../constants';
import "./style.scss";

const InsideAbout = () => {
	const { t, lang } = useT();
	const navigate = useNavigate();
	let { page_url } = useParams();
	page_url = page_url.slice(1);

	const [about, setAbout] = useState({});
	const [loading, setLoading] = useState(false);

	const getAbout = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(page_url)
			.then((res) => {
				setAbout(res.data.data)
				setLoading(false);
			})
	}, [page_url])

	useEffect(() => {
		getAbout();
	}, [getAbout])

	const { title, text, imgs = [] } = about;

	return (
		<Stack direction='column' bgcolor='background.paper'>
			<div className='container'>
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
					className="inside_contest_back_btn"
					onClick={() => navigate(-1)}
				>
					{t(`back.${lang}`)}
				</Button>
				<Grid item xs={12}>
					{
						loading ? (<Loading />) : (
							<>
								<Title>{title}</Title>
								<Grid container spacing={4}>
									<Grid item xs={12} md={6} my={3}>
										<Text>
											<div dangerouslySetInnerHTML={{ __html: text }}></div>
										</Text>
									</Grid>
									<Grid item xs={12} md={6} my={3}>
										<div className='news_images'>
											<img src={API_IMG_URL + imgs[0]} alt="insideAbout" width="100%" />
										</div>
									</Grid>
								</Grid>
							</>
						)
					}
				</Grid>
			</div >
		</Stack>
	);
}

export default InsideAbout;
