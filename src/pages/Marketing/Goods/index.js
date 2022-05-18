import React, { useCallback, useEffect, useState } from 'react';
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import { Grid } from '@mui/material';
import GoodsDetail from './GoodsCard/GoodsDetail';
import "./style.scss"
import { ximUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';

const Goods = () => {

	const [xim, setXim] = useState();

	const getXim = useCallback(async () => {
		baseAPI.fetchAll(ximUrl)
			.then(res => {
				setXim(res.data)
			})
			.catch((e) => console.log("error", e))
	}, [])

	useEffect(() => {
		getXim();
	}, [getXim])

	console.log("xim", xim);

	return (
		<>
			<Grid item xs={12} md={9}>
				<div>
					<Title>Xalq iste'mol mollari (XIM)</Title>
					<Text>
						Faoliyat sohasi va xalq iste'mol mollarini ishlab chiqarish
						"Avtooyna" MChJ Respublikadagi yirik ishlab chiqarish korxonasi bo'la turib, nafaqat sanoat mahsulotlarini, balki xalq iste'mol bozori uchun mahsulotlarni ham ishlab chiqaradi.<br /><br />

						• Mahalliy maishiy texnika ishlab chiqaruvchilar uchun himoya oynalarini ishlab chiqaradi (Tash Electro apparati, Sam Nur, Sam Electro Service, Sam Ferre)<br /><br />

						• Maishiy va sanoat sohalari uchun yog'och buyumlar: yog'ochdan mebellar, palletlar, qadoqlash qutilari,<br /> gulli idish va boshqalar.<br /><br />

						• Plastik va metall oynalar uchun kop qavatli oynalar
					</Text>
				</div>
			</Grid>
			<Grid item xs={12} md={12}>
				<Grid container spacing={{ xs: "10px", sm: "20px", md: "30px" }}>
					{

					}
					<Grid item md={12} >
						<GoodsDetail />
					</Grid>
					<Grid item md={12} >
						<GoodsDetail />
					</Grid>
					<Grid item md={12} >
						<GoodsDetail />
					</Grid>

				</Grid>
			</Grid>
		</>
	);
}

export default Goods;
