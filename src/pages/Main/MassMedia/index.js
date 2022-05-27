import React, { useEffect, useState, useCallback } from 'react';
import { Grid, Stack } from '@mui/material'
import MediaCard from './MediaCard'
import Title from '../../../components/Title'
import { useT } from '../../../custom/hooks/useT'
import { homeOavUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from "../../../constants";
import './style.scss';

const MassMedia = () => {

    const { t, lang } = useT();
    const [oav, setOav] = useState({});

    const getOav = useCallback(() => {
        baseAPI.fetchAll(homeOavUrl)
            .then((res) => {
                if (res.data.success) {
                    setOav(res.data);
                }
            })
            .catch((e) => console.log("e", e));
    }, [])

    useEffect(() => {
        getOav();
    }, [getOav])

    const { dataImg = {}, data: items = [] } = oav;

    return (
        <Stack py={{ xs: 2, md: 4 }} direction='row' className='massmedia' bgcolor='background.paper'>
            <div className='container'>
                <Grid container width="100%" ml={0} mt={0}>
                    <Grid item xs={12} lg={6} className='massmedia__left' bgcolor='background.default'>
                        <Stack className='massmedia__img' p={{xs: 2, sm: 4}} bgcolor='background.navBg'>
                            <img src={API_IMG_URL + dataImg.img} alt="oav" />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6} pl={{ xs: 0, lg: 2 }} pt={{ xs: 2, lg: 0 }}>
                        <Title>{t(`aboutOav.${lang}`)}</Title>
                        <Stack direction='column' spacing={2}>
                            {items.slice(0, 3).map((item) => (
                                <MediaCard {...item} key={item.id} />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    )
}

export default MassMedia