import React, { useState, useEffect, useCallback } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import Loading from "../../../components/Loading";
import { useT } from "../../../custom/hooks/useT";
import { complianceUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from '../../../constants';

const Compliance = () => {
	const { t, lang } = useT();
	const [compliance, setCompliance] = useState({});
	const [loading, setLoading] = useState(false);

	const getCompliance = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(complianceUrl)
			.then((res) => {
				if (res.data.success) {
					setCompliance(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getCompliance()
	}, [getCompliance])

	const { title, text, items = [] } = compliance;

	return (
		<Stack>
			{loading ? (<Loading />) : (
				<>
					<Title>{title}</Title>
					<Text>
						<span dangerouslySetInnerHTML={{ __html: text }}></span>
					</Text>
					<Stack className='compliance_btn' direction='column' spacing={2}>
						<Typography color='secondary.dark' fontWeight='600'>{t(`download.${lang}`)}:</Typography>
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
				</>
			)}
		</Stack>
	);
}

export default Compliance;