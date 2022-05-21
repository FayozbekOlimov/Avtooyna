import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../../components/Title'
import Text from "../../../components/Text"
import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import "./style.scss"

const InsideAbout = () => {
	const navigate = useNavigate();
	return (
		<div className='container'>
			<Button
				variant="outlined"
				sx={{
					textTransform: "none",
					alignSelf: 'flex-start',
					my: 1.5,
					color: 'secondary.main',
					borderColor: 'border.main'
				}}
				startIcon={<ArrowBack />}
				className="inside_contest_back_btn"
				onClick={() => navigate(-1)}
			>
				Orqaga qaytish
			</Button>
			<Grid item xs={12} md={12}>
				<Title>Изготовление автомобильных стекол в Узбекистане</Title>
				<Grid container spacing={4}>
					<Grid item xs={12} md={6} my={3}>
						<Text>
							Предприятие ООО “Автоойна” занимается производством автомобильных стекол, а также экспортирует готовую продукцию.
							Изготовление стекол для автомобилей любых марок и моделей.

							О производстве автостекол на ООО "Автоойна"

							В марте 2004 года пущены в эксплуатацию линии предварительной обработки, закалки и ламинирования –
							самые современные и полностью автоматизированные линии по производству безопасных автомобильных стекол.
							Они оснащены технологическим оборудованием всемирно известных марок:
						</Text>
					</Grid>
					<Grid item xs={12} md={6} my={3}>
						<div className='news_images'>
							<img src="/assets/img/insideAbout.png" alt="insideAbout" width="100%" />
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div >
	);
}

export default InsideAbout;
