import React from 'react';
import { Grid, Stack, Typography, Link as TelLink } from '@mui/material'
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import "./style.scss"
import { Email, PhoneEnabled } from '@mui/icons-material';

const Sale = () => {
	const titleStyle = {
		fontWeight: 600,
		fontSize: '20px',
		color: 'info.main',
		marginBottom: '12px',
	}

	return (
		<Grid item xs={12} md={9}>
			<div className='sale'>
				<Title>Sotish va jo’natish</Title>
				<Text>
					Avvaliga avtomobil oynalarini sanoqli turlarini ishlab chiqarganmiz, hozirda esa "UzAuto Motors" AJ avtomobillari (avtobuslar, yuk mashinalar va qishloq xo'jaligi texnikalari) uchun oynalarning barcha turlarini ishlab chiqarmoqdamiz. Korhonaning asosiy ob'ektlari zavod hududida joylashgan bo’lib ishlab chiqarish tsexlarida xorijiy brendlarning eng so'nggi uskunalari mavjud.<br /><br />

					Avtoulov turlarining doimiy ravishda ko'payib borishi, shuningdek, Respublikamizda chet el avtomobillarning yig’ish liniyalari paydo bo'lishi ushbu avtomobil oynalarini ishlab chiqarilishiga turtki bo’ldi.<br /><br />

					Ayni paytda korxonamiz o'z mahsulotlarini Respublika miqyosida va chet el bozorlarida sotmoqda. Shu bilan birgalikda, mahsulotlarimizning ulgurji savdosi ustuvor ahamiyatga ega bo’lib bormoqda.<br /><br />

					Mahsulotlarimizni chakana savdoda faqat korxonamizning rasmiy diller tashkilotlaridan sotib olishingiz mumkin. Ulgurji savdoda narx siyosatini sezilarli darajada pasayishiga shuningdek yirik mijozlarimiz uchun maqbul sharoitlarni yaratishga imkon berdi.<br /><br />

					Xodimlarimiz har bir mijozga individual yondashuv bilan sifatli xizmatni taqdim etmoqdalar. Avtoulovni tanlash va sotib olish bo'yicha maslahat uchun biz bilan bog'lanishingiz mumkin. Mijozlarimiz uchun individual ravishda qulay shart-sharoitlarni tavsiya etamiz.<br /><br />

					Avtooynalarni sotib olmoqchi bo’lganlarga istak va hohishlariga ko’ra maxsus himoya vositasi va saqlash usullaridan foydalangan holda manzilga beshikast yetkazib berish taklifi beriladi.
				</Text>
				<Typography sx={titleStyle}>Shartnoma tuzish uchun aloqa:</Typography>
				<Stack direction='column' spacing={2} alignItems='flex-start'>
					<div className='header__tel'>
						<Stack className='header__tel-icon' sx={{ bgcolor: 'primary.light' }}>
							<PhoneEnabled sx={{ color: '#fff' }} />
						</Stack>
						<div className='header__tel-content'>
							<TelLink href='tel:+998732430876' sx={{ color: 'info.light', textDecoration: 'none' }}>+998 (73) 243-08-76</TelLink>
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
				</Stack>
			</div>
		</Grid>
	);
}

export default Sale;
