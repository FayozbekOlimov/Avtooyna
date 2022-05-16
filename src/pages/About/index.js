import React from 'react'
import { Grid, Stack } from '@mui/material'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const About = () => {
    return (
        <Stack direction='row' spacing={2}>
            <div className='container'>
                <Grid container>
                    <Grid item md={3}>
                        <Navbar />
                    </Grid>
                    <Grid item md={9}>
                        <Outlet />
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default About