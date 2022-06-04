import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Text from "../../../../components/Text"
import { API_IMG_URL } from '../../../../constants'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useT } from '../../../../custom/hooks/useT'

const NewsCard = ({ id, img, date, title, text, url }) => {
    const { t, lang } = useT();
    const titleStyle = {
        fontWeight: 700,
        fontSize: '20px',
        color: 'info.main',
        marginBottom: '8px',
        '& *': {
            fontWeight: "inherit",
        }
    }

    return (
        <Link to={`/news/:${id}`}>
            <Grid item xs={12} key={id}>
                <Grid container className='news__card' p={2} bgcolor='background.default'>
                    <Grid item xs={12} md={4}>
                        <div className="news_img">
                            <img src={API_IMG_URL + img} alt={`img${id}`} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8} pl={{ xs: 0, md: 2 }} pt={{ xs: 2, md: 0 }}>
                        <Typography component={'div'} sx={titleStyle} className="card__title"><div dangerouslySetInnerHTML={{ __html: title }}></div></Typography>
                        <p className="card__date">
                            <img src="/assets/icon/calendar.png" alt="calendar-icon" />
                            {date}
                        </p>
                        <Text className="news__card__text"><span dangerouslySetInnerHTML={{ __html: text }}></span></Text>
                        <Link to={`/news/:${id}`}>
                            <Button
                                variant="text"
                                sx={{ textTransform: "capitalize" }}
                                endIcon={<RiArrowRightSLine />}
                            >
                                {t(`detail.${lang}`)}
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Link>
    )
}

export default NewsCard