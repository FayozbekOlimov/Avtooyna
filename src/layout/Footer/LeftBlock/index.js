import React, { useContext, useState, useEffect, useCallback } from "react"
import { Stack, Button, Link as TelLink, Typography } from "@mui/material"
import { AccessTimeFilled, Email, FmdGood, PhoneEnabled } from "@mui/icons-material"
import Title from '../../../components/Title'
import { ConsultContext } from "../../../App"
import { useT } from "../../../custom/hooks/useT";
import "./style.scss";
import baseAPI from "../../../api/baseAPI"
import { telsUrl } from "../../../api/apiUrls"

const FooterLeftBlock = () => {
	const { t, lang } = useT();
	const { onOpenConsultModal } = useContext(ConsultContext);

	const [tels, setTels] = useState([]);
	const [loading, setLoading] = useState(false);

	const getTels = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(telsUrl)
			.then((res) => {
				if (res.data.success) {
					setTels(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getTels()
	}, [getTels])

	return (
		<Stack className="footer_contact_block" direction='column'>
			<Title className="footer_contact_title">{t(`contact.${lang}`)}</Title>
			<Stack className="footer_main_contacts" spacing={2} alignItems='flex-start'>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<PhoneEnabled sx={{ color: '#fff' }} />
					</Stack>
					<Stack className='header__tel-content'>
						{
							tels.map(tel => (
								<TelLink
									href={`tel:${tel.tel_namber}`}
									sx={{ color: 'info.light', textDecoration: 'none' }}
									key={tel.id}
								>{tel.tel_namber}</TelLink>
							))
						}
					</Stack>
				</div>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<FmdGood sx={{ color: '#fff' }} />
					</Stack>
					<div className='header__tel-content'>
						<Typography component='p' sx={{ color: 'info.light' }}>{t(`ourAddressName.${lang}`)}</Typography>
						<small>{t(`ourAddress.${lang}`)}</small>
					</div>
				</div>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<AccessTimeFilled sx={{ color: '#fff' }} />
					</Stack>
					<div className='header__tel-content'>
						<Typography component='p' sx={{ color: 'info.light' }}>8:00 - 17:00</Typography>
						<small>{t(`workDays.${lang}`)}</small>
					</div>
				</div>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<Email sx={{ color: '#fff' }} />
					</Stack>
					<div className='header__tel-content'>
						<TelLink href='mailto:info@avtooyna.uz' sx={{ color: 'info.light', textDecoration: 'none' }}>info@avtooyna.uz</TelLink>
						<small>{t(`emailAddress.${lang}`)}</small>
					</div>
				</div>
				<Button
					variant="outlined"
					sx={{
						textTransform: 'none',
						padding: '8px',
						color: 'info.main',
						borderColor: 'border.main'
					}}
					onClick={onOpenConsultModal}
				>
					{t(`getConsult.${lang}`)}
				</Button>
			</Stack>
		</Stack>
	);
}

export default FooterLeftBlock