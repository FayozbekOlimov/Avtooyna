import React, { useCallback, useEffect, useState } from 'react'
import { Stack, Grid, Button } from '@mui/material'
import Card from '../Card'
import Title from '../../../components/Title'
import { contestsData } from './contestsData'
import { RiArrowRightSLine } from 'react-icons/ri'
import baseAPI from '../../../api/baseAPI'
import { homeChoiceUrl } from '../../../api/apiUrls'
import { Link } from 'react-router-dom'

const Contests = () => {

    const [contests, setContests] = useState([]);

    const getContests = useCallback(() => {
        baseAPI.fetchAll(homeChoiceUrl)
            .then((res) => {
                setContests(res.data.choise);
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
                    <Title>Tanlovlar</Title>
                    <Link to="/contest-announcement/contests">
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