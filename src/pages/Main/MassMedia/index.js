import { Grid, Stack } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'
import Title from '../../../components/Title'
import { mediaCardData } from './mediaCardData'

const MassMedia = () => {
    return (
        <Stack direction='row' className='massmedia'>
            <div className='container'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className='massmedia__img'>
                            <img src="/assets/img/oav.png" alt="oav" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Title>OAV Biz haqimizda</Title>
                        <Stack direction='column' spacing={2}>
                            {mediaCardData.map((data, ind) => (
                                <MediaCard {...data} />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default MassMedia