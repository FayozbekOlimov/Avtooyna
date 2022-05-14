import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
import Title from '../../../../components/Title'
import "./style.scss"
import { Link } from 'react-router-dom';

const Youth = () => {
	return (
		<Stack>
			<Grid item xs={10}>
				<div className='union_pages'>
					<Title>Yoshlar ittifoqi</Title>
					<p>O‘zbekiston yoshlar ittifoqining ustavini yuklab oling:</p>
					<Link to="/"><Button variant='outlined' sx={{ textTransform: 'none' }} >Yuklab olish</Button></Link>
				</div>
			</Grid>
		</Stack>
	);
}

export default Youth;
