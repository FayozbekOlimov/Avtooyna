import React, { useState, useEffect, useCallback } from 'react';
import { Stack, Button } from '@mui/material';
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import Loading from "../../../components/Loading";

import "./style.scss";
import { complianceUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from '../../../constants';

const Compliance = () => {

	const [compliance, setCompliance] = useState({});
	const [loading, setLoading] = useState(false);

	const getCompliance = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(complianceUrl)
			.then((res) => {
				// if (res.data.success) {
				setCompliance(res.data.muvofiq);
				setLoading(false);
				// }
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getCompliance()
	}, [getCompliance])

	const { title, text, items = [] } = compliance;

	return (
		<Stack className="compilance_main">
			{loading ? (<Loading />) : (
				<>
					<Title>{title}</Title>
					<Text>
						<div dangerouslySetInnerHTML={{ __html: text }}></div>
					</Text>
					<div className='compliance_btn'>
						<h4>Скачать:</h4>
						{
							items.map((item) => (
								<a href={API_IMG_URL + item.file} target="_blank" rel="noopener noreferrer">
									<Button
										className='btn-compliance'
										variant='outlined'
										sx={{ textTransform: 'none' }}
									>
										{item.title}
									</Button>
								</a>
							))
						}
					</div>
				</>
			)}
		</Stack>
	);
}

export default Compliance;