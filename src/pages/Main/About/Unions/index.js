import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { RiArrowRightSLine } from 'react-icons/ri'
import Title from '../../../../components/Title'



const Unions = () => {
	return (
		<Stack>
			<Grid container spacing ={2}>
				<div className='union_pages'>
					<Title>Yoshlar ittifoqi</Title>
					<p>O‘zbekiston yoshlar ittifoqining ustavini yuklab oling:</p>
					<Button variant='outlined' sx={{ textTransform: 'none' }} endIcon={<RiArrowRightSLine />}>Barchasini ko'rish</Button>
				</div>
			</Grid>
		</Stack>
	);
}

export default Unions;
