import React from 'react'
import { Stack, Grid, Button } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { Link } from 'react-router-dom'

const YouthUnion = () => {
    return (
        <Stack>
			<Grid item xs={10}>
				<div className='union_pages'>
					<Title>Yoshlar ittifoqi</Title>
					<Text>O‘zbekiston yoshlar ittifoqining ustavini yuklab oling:</Text>
					<Link to="/about-us/youth-union"><Button variant='outlined' sx={{ textTransform: 'none' }} >Yuklab olish</Button></Link>
				</div>
			</Grid>
		</Stack>
    )
}

export default YouthUnion;