import React, { useCallback, useEffect, useState } from 'react'
import { Stack, Grid, Button } from '@mui/material'
import Card from '../Card'
import Title from '../../../components/Title'
import { RiArrowRightSLine } from 'react-icons/ri'
import baseAPI from '../../../api/baseAPI'
import { homeContestsUrl } from '../../../api/apiUrls'
import { Link } from 'react-router-dom'
import { useT } from '../../../custom/hooks/useT'

const Contests = () => {
    const { t, lang } = useT();
    const [contests, setContests] = useState([]);

    const getContests = useCallback(() => {
        baseAPI.fetchAll(homeContestsUrl)
            .then((res) => {
                if (res.data.success) {
                    setContests(res.data.data);
                }
            })
            .catch((e) => console.log("e", e));
    }, [])

    useEffect(() => {
        getContests();
    }, [getContests])

    return (
        <Stack py={{ xs: 2, md: 4 }} className="Contests" bgcolor='background.paper'>
            <div className="container">
                <Stack direction='row' mb={1} justifyContent='space-between' alignItems='flex-start'>
                    <Title>{t(`contests.${lang}`)}</Title>
                    <Link to="/contest-announcement/contests">
                        <Button
                            variant='outlined'
                            sx={{
                                textTransform: 'none',
                                color: 'info.main',
                                borderColor: 'border.main'
                            }}
                            endIcon={<RiArrowRightSLine />}>
                            {t(`viewAll.${lang}`)}
                        </Button>
                    </Link>
                </Stack>
                <Grid container spacing={2}>
                    {contests.map((contest) => (
                        <Grid item key={contest.id} xs={12} md={4}>
                            <Card content={false} toUrl={"contests"} {...contest} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Stack>
    )
}

export default Contests