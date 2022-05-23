import React from 'react';
import { Stack, Button } from '@mui/material';
import Title from "../../../components/Title";
import Text from "../../../components/Text";

import "./style.scss";



const Compliance = () => {
	return (
		<Stack>
			<div className="compilance_main">
				<Title>Muvofiqlik(Compliance)</Title>
				<Text>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt accusamus numquam.
				</Text>
				<div></div>
				<div className='compliance_btn'>
					<h4>Скачать:</h4>
					<a herf="#"><Button className='btn-compliance' variant='outlined' sx={{ textTransform: 'none' }} >Кодекс о соблюдении политики Комплаенс</Button></a>

				</div>
			</div>
		</Stack>
	);
}

export default Compliance;
