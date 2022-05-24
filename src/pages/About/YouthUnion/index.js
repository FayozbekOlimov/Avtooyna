import React, { useState, useEffect, useCallback } from 'react';
import { Button, Stack } from '@mui/material';
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Loading from '../../../components/Loading'
import { youthUnionUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from '../../../constants';

const YouthUnion = () => {
	const [youth, setYouth] = useState({});
	const [loading, setLoading] = useState(false);

	const getYouth = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(youthUnionUrl)
			.then((res) => {
				// if (res.data.success) {
				setYouth(res.data.yoshIttif);
				setLoading(false);
				// }
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getYouth()
	}, [getYouth])

	const { title, content, file } = youth;

	return (
		<Stack>
			{
				loading ? (<Loading />) : (
					<>
						<Title>{title}</Title>
						<Text><div dangerouslySetInnerHTML={{ __html: content }}></div></Text>
						<a href={API_IMG_URL + file} target="_blank" rel="noopener noreferrer">
							<Button
								variant='outlined'
								sx={{
									textTransform: "none",
									alignSelf: 'flex-start',
									color: 'secondary.main',
									borderColor: 'border.main'
								}}
							>
								Yuklab olish
							</Button>
						</a>
					</>
				)
			}

		</Stack >
	);
}

export default YouthUnion;
