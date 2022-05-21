import { Grid, Stack } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'
import Title from '../../../components/Title'
import { mediaCardData } from './mediaCardData'
import './style.scss'

const MassMedia = () => {
    return (
        <Stack py={{ xs: 2, md: 4 }} direction='row' className='massmedia' bgcolor='background.paper'>
            <div className='container'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className='massmedia__left' bgcolor='background.default'>
                        <div className='massmedia__img'>
                            <img src="/assets/img/oav.png" alt="oav" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Title>OAV Biz haqimizda</Title>
                        <Stack direction='column' spacing={2}>
                            {mediaCardData.map((data, ind) => (
                                <MediaCard {...data} key={ind} />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default MassMedia