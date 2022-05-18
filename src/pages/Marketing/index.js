import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { Grid, Stack } from '@mui/material'

const Marketing = () => {
    return (
        <Stack direction='row' spacing={2} py={2}>
            <div className='container'>
                <Grid container spacing={{ xs: "10px", sm: "20px", md: "30px" }}>
                    <Grid item xs={12} md={3}>
                        <Sidebar sidebarMenuIndex={2} />
                    </Grid >
                    <Outlet />
                </Grid>
            </div>
        </Stack>
    )
}

export default Marketing;