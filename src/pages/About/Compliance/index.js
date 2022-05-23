import React, { useState, useEffect, useCallback } from 'react';
import { Stack, Button } from '@mui/material';
import Title from "../../../components/Title";
import Text from "../../../components/Text";
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
		<Stack>
			<div className="compilance_main">
				<Title>{title}</Title>
				<Text>
					<div dangerouslySetInnerHTML={{ __html: text }}></div>
				</Text>
				<Stack className='compliance_btn' direction='column' spacing={2}>
					<h4>Скачать:</h4>
					{items.map((item) => (
						<a href={API_IMG_URL + item.file} target="_blank" rel="noopener noreferrer">
							<Button
								className='btn-compliance'
								variant='outlined'
								sx={{
									textTransform: "none",
									color: 'secondary.main',
									borderColor: 'border.main'
								}}
							>
								{item.title}
							</Button>

						</a>
					))}
				</Stack>
			</div>
		</Stack>
	);
}

export default Compliance;