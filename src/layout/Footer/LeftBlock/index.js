<<<<<<< HEAD
import React from "react";
import { Stack, Button, Grid } from "@mui/material";
import { useT } from "../../../custom/hooks/useT";
=======
import React, { useContext } from "react"
import { Stack, Button, Link as TelLink, Typography } from "@mui/material"
import { AccessTimeFilled, Email, FmdGood, PhoneEnabled } from "@mui/icons-material"
import Title from '../../../components/Title'
import { useT } from '../../../custom/hooks/useT'
import "./style.scss";
import { ConsultContext } from "../../../App"
>>>>>>> f3de43e9fc00de1b1f8d78bc488521a55cf3b3f0

const FooterLeftBlock = () => {
	const { t, lang } = useT();
	const { onOpenConsultModal } = useContext(ConsultContext);

	return (
		<Stack className="footer_contact_block" direction='column'>
			<Title className="footer_contact_title">{t(`contact.${lang}`)}</Title>
			<Stack className="footer_main_contacts" spacing={2} alignItems='flex-start'>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<PhoneEnabled sx={{ color: '#fff' }} />
					</Stack>
					<Stack className='header__tel-content'>
						<TelLink href='tel:+998732497575' sx={{ color: 'info.light', textDecoration: 'none' }}>+998 73 249-75-75</TelLink>
						<TelLink href='tel:+998732430835' sx={{ color: 'info.light', textDecoration: 'none' }}>+998 73 243-08-35</TelLink>
					</Stack>
				</div>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<FmdGood sx={{ color: '#fff' }} />
					</Stack>
					<div className='header__tel-content'>
						<Typography component='p' sx={{ color: 'info.light' }}>Farg’ona sh, Istiqlol 1A uy</Typography>
						<small>{t(`ourAddress.${lang}`)}</small>
					</div>
				</div>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<AccessTimeFilled sx={{ color: '#fff' }} />
					</Stack>
					<div className='header__tel-content'>
						<Typography component='p' sx={{ color: 'info.light' }}>9:00 - 18:00</Typography>
						<small>Dushanba - Juma</small>
					</div>
				</div>
				<div className='header__tel'>
					<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
						<Email sx={{ color: '#fff' }} />
					</Stack>
					<div className='header__tel-content'>
						<TelLink href='mailto:info@avtooyna.uz' sx={{ color: 'info.light', textDecoration: 'none' }}>info@avtooyna.uz</TelLink>
						<small>Elektron manzilimiz</small>
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
					Konsultatsiya olish
				</Button>
			</Stack>
		</Stack>
	);
}

export default FooterLeftBlock