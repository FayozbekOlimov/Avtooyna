import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Loading from '../../../components/Loading'
import { leadershipUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from '../../../constants'
import "./style.scss"

const Leadership = () => {
    const [leadership, setLeadership] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLeadership = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll(leadershipUrl)
            .then((res) => {
                // if (res.data.success) {
                setLeadership(res.data.leader);
                setLoading(false);
                // }
            })
            .catch((e) => console.log("e", e))
    }, [])

    useEffect(() => {
        getLeadership()
    }, [getLeadership])

    return (
        <Stack className="leadership">
            <Grid item xs={12} md={12}>
                <Title>Rahbariyat</Title>
                {leadership.map(({ id, email, fullname, img, job }) => (
                    <div className='leadership_card' width="100%" key={id}>
                        <img className='leader_img' src={API_IMG_URL + img} alt={`img${id + 1}`} />
                        <div className='leader_title'>
                            <h4>{fullname}</h4>
                            <p>{job}</p>
                            <div className='leader_email'>
                                <img src="/assets/icon/mail.svg" alt={`img${id + 1}`} />
                                <a href="mailto:farhod.turaev@avtooyna.uz">{email}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Grid>
        </Stack>
    )
}

export default Leadership;