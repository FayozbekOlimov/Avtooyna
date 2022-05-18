import React from 'react';
import { Grid} from '@mui/material'
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import "./style.scss"
import { NomenData } from './nomeData';

const NomenImg = [
	{
		id: 1,
		img: "/assets/img/namenImg1.png"
	},
	{
		id: 1,
		img: "/assets/img/namenImg1.png"
	},
	{
		id: 1,
		img: "/assets/img/namenImg1.png"
	},
]
const Nomenclature = () => {
	return (
		<>
			<Grid item xs={9} md={9}>
				<div className="namen_img">
					{NomenImg.map(({id,img},ind)=>(
						<img src={img} alt={`img${ind}`} />
						))}
				</div>
			</Grid>
			<Grid item xs={12} md={9}>
				<Title>Nomenklatura</Title>
				<div className="nomen_header">
					<span>№</span>
					<p>Detal nomi</p>
					<h6>Model</h6>
					<h5>Detal raqami</h5>
					<h4>Ko’rinishi</h4>
				</div>
				<div className="nomen_main">
					{NomenData.map(({id,number, name, model,DetalNumber,img },ind)=>(
						<div className='nomen_data'>
							<span>{number}</span>
							<p>{name}</p>
							<h6>{model}</h6>
							<h5>{DetalNumber}</h5>
							<img src={img} alt={`img${ind}`} />
							{/* <h2>asdfgfxzwr</h2> */}
						</div>
					))}
				</div>
			</Grid>
		</>
	);
}

export default Nomenclature;