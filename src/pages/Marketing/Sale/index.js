import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Stack, Typography, Link as TelLink } from '@mui/material'
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import Loading from "../../../components/Loading";
import { Email, PhoneEnabled } from '@mui/icons-material';
import { saleUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from '../../../custom/hooks/useT';

const titleStyle = {
	fontWeight: 600,
	fontSize: '20px',
	color: 'info.main',
	marginBottom: '12px',
}

const Sale = () => {
	const { t, lang } = useT();
	const [sale, setSale] = useState({});
	const [loading, setLoading] = useState(false);

	const getSale = useCallback(() => {
		setLoading(true)
		baseAPI.fetchAll(saleUrl)
			.then((res) => {
				if (res.data.success) {
					setSale(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getSale()
	}, [getSale])

	const { title, text, phone, email } = sale;

	return (
		<Grid item xs={12} sm={6} md={9}>
			{
				loading ? (<Loading />) : (
					<>
						<Title>{title}</Title>
						<Text>
							<div dangerouslySetInnerHTML={{ __html: text }}></div>
						</Text>
						<Typography sx={titleStyle}>{t(`dealContact.${lang}`)}</Typography>
						<Stack direction='column' spacing={2} alignItems='flex-start'>
							<div className='header__tel'>
								<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
									<PhoneEnabled sx={{ color: '#fff' }} />
								</Stack>
								<div className='header__tel-content'>
									<TelLink href={`tel:${phone}`} sx={{ color: 'info.light', textDecoration: 'none' }}>{phone}</TelLink>
									<small>{t(`workDays.${lang}`)}</small>
								</div>
							</div>
							<div className='header__tel'>
								<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
									<Email sx={{ color: '#fff' }} />
								</Stack>
								<div className='header__tel-content'>
									<TelLink href={`mailto:${email}`} sx={{ color: 'info.light', textDecoration: 'none' }}>{email}</TelLink>
									<small>{t(`emailAddress.${lang}`)}</small>
								</div>
							</div>
						</Stack>
					</>
				)
			}
		</Grid>
	);
}

export default Sale;
