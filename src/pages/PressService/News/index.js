import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from '@mui/material'
import Title from '../../../components/Title'
import Loading from "../../../components/Loading"
import PaginationRounded from "../../../components/PaginationRounded"
import baseAPI from '../../../api/baseAPI';
import { homeNewsUrl } from '../../../api/apiUrls';
import { useT } from "../../../custom/hooks/useT";
import "./style.scss";
import NewsCard from './NewsCard';

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
									items.map((item) => (
										<NewsCard {...item} key={item.id} />
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
