import React from 'react'
import { Stack, Grid, Button } from '@mui/material'
import Card from '../Card'
import Title from '../../../components/Title'
import { contestsData } from './contestsData'
import { RiArrowRightSLine } from 'react-icons/ri'

const Contests = () => {
    return (
        <Stack py={{ xs: 2, md: 4 }} className="Contests" bgcolor='background.paper'>
            <div className="container">
                <Stack direction='row' mb={1} justifyContent='space-between' alignItems='flex-start'>
                    <Title>Tanlovlar</Title>
                    <Button
                        variant='outlined'
                        sx={{
                            textTransform: 'none',
                            color: 'info.main',
                            borderColor: 'border.main'
                        }}
                        endIcon={<RiArrowRightSLine />}>
                        Barchasini ko'rish
                    </Button>
                </Stack>
                <Grid container spacing={2}>
                    {contestsData.map((data, ind) => (
                        <Grid item key={ind} xs={12} md={4}>
                            <Card {...data} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Stack>
    )
}

export default Contests