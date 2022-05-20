import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../components/Title'
import Text from "../../../components/Text"
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import "./style.scss"

const InsideAbout = () => {
    return (
        <div className='container'>
			<Link to="/">
				<Button
					variant="text"
					sx={{ textTransform: "capitalize" }}
					startIcon={<KeyboardArrowLeft />}
					className="inside_about_back_btn"
				>
					Orqaga qaytish
				</Button>
			</Link>
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
						<div news_images>
							<img src="/assets/img/insideAbout.png" alt="insideAbout" width="100%"/>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div >
    );
}

export default InsideAbout;
