import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './style.scss'

const MediaCard = ({ id, src, date, title, toUrl }) => {
    return (
        <Grid container className='media__card'>
            <Grid item xs={4}>
                <img className='media__card-img' src={src} alt='oav-img' />
            </Grid>
            <Grid item xs={8} p={1} display='flex' direction='column' justifyContent='center'>
                <p className="card__date">
                    <img src="/assets/icon/calendar.png" alt="calendar-icon" />
                    {date}
                </p>
                <Typography
                    sx={{
                        color: 'info.main',
                        fontSize: '20px',
                        fontWeight: 700,
                        marginBottom: '16px'
                    }}
                    className="card__title"
                >{title}</Typography>
                <Link to={toUrl}>
                    <Button
                        variant="text"
                        sx={{ textTransform: "capitalize", color: "primary.light" }}
                        endIcon={<RiArrowRightSLine />}
                    >
                        Batafsil
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default MediaCard