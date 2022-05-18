import React from 'react';
import {Stack, Grid} from '@mui/material'
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import "./style.scss"

const Sale = () => {
	return (
		<Grid item xs={9} md={9}>

		<div className='sale'>
			<Title>Sotish va jo’natish</Title>
			<Text>
				Avvaliga avtomobil oynalarini sanoqli turlarini ishlab chiqarganmiz, hozirda esa "UzAuto Motors" AJ avtomobillari (avtobuslar, yuk mashinalar va qishloq xo'jaligi texnikalari) uchun oynalarning barcha turlarini ishlab chiqarmoqdamiz. Korhonaning asosiy ob'ektlari zavod hududida joylashgan bo’lib ishlab chiqarish tsexlarida xorijiy brendlarning eng so'nggi uskunalari mavjud.<br/><br/>

				Avtoulov turlarining doimiy ravishda ko'payib borishi, shuningdek, Respublikamizda chet el avtomobillarning yig’ish liniyalari paydo bo'lishi ushbu avtomobil oynalarini ishlab chiqarilishiga turtki bo’ldi.<br/><br/>

				Ayni paytda korxonamiz o'z mahsulotlarini Respublika miqyosida va chet el bozorlarida sotmoqda. Shu bilan birgalikda, mahsulotlarimizning ulgurji savdosi ustuvor ahamiyatga ega bo’lib bormoqda.<br/><br/>

				Mahsulotlarimizni chakana savdoda faqat korxonamizning rasmiy diller tashkilotlaridan sotib olishingiz mumkin. Ulgurji savdoda narx siyosatini sezilarli darajada pasayishiga shuningdek yirik mijozlarimiz uchun maqbul sharoitlarni yaratishga imkon berdi.<br/><br/>

				Xodimlarimiz har bir mijozga individual yondashuv bilan sifatli xizmatni taqdim etmoqdalar. Avtoulovni tanlash va sotib olish bo'yicha maslahat uchun biz bilan bog'lanishingiz mumkin. Mijozlarimiz uchun individual ravishda qulay shart-sharoitlarni tavsiya etamiz.<br/><br/>

				Avtooynalarni sotib olmoqchi bo’lganlarga istak va hohishlariga ko’ra maxsus himoya vositasi va saqlash usullaridan foydalangan holda manzilga beshikast yetkazib berish taklifi beriladi.
			</Text>
			<h2>Shartnoma tuzish uchun aloqa:</h2>
			<div className="sale_contact_item">
				<img src="/assets/icon/call_white.svg" alt="" />
				<div className="sale_left_block_flex">
					<a href="#">
					<span>+998 (73) 243-08-76</span>
					<p>Telefon raqami</p>
					</a>
				</div>
			</div>
			<div className="sale_contact_item">
				<img src="/assets/icon/messeage_white.svg" alt="" />
				<div className="sale_left_block_flex">
					<a href="#">
					<span>info@avtooyna.uz</span>
					<p>Elektron manzilimiz</p>
					</a>
				</div>
        	</div>
		</div>
		</Grid>	
	);
}

export default Sale;
