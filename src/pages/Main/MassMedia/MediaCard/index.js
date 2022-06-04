import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { API_IMG_URL } from '../../../../constants'
import { useT } from '../../../../custom/hooks/useT'
import './style.scss'

const MediaCard = ({ id, img, date, title, url }) => {
    const { t, lang } = useT();

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <Grid container className='media__card' bgcolor='background.default'>
                <Grid item xs={12} sm={4}>
                    <div className="media__card-img">
                        <img src={API_IMG_URL + img} alt='oav-img' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} p={1} display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'>
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
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="text"
                            sx={{ textTransform: "capitalize", color: "primary.light" }}
                            endIcon={<RiArrowRightSLine />}
                        >
                            {t(`detail.${lang}`)}
                        </Button>
                    </a>
                </Grid>
            </Grid>
        </a>
    )
}

export default MediaCard