import React, { useCallback, useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Loading from '../../../components/Loading'
import { leadershipUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { API_IMG_URL } from '../../../constants'
import { useT } from '../../../custom/hooks/useT'
import "./style.scss";

const Leadership = () => {
    const { t, lang } = useT();
    const [leadership, setLeadership] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLeadership = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll(leadershipUrl)
            .then((res) => {
                if (res.data.success) {
                    setLeadership(res.data.data);
                    setLoading(false);
                }
            })
            .catch((e) => console.log("e", e))
    }, [])

    useEffect(() => {
        getLeadership()
    }, [getLeadership])

    const titleStyle = {
        fontWeight: 700,
        fontSize: '20px',
        color: 'info.main',
        marginBottom: '16px'
    }

    return (
        <Stack className="leader">
            {
                loading ? (<Loading />) : (
                    <>
                        <Title>{t(`leadership.${lang}`)}</Title>
                        {
                            leadership.map(({ id, email, fullname, img, job }) => (
                                <Stack
                                    key={id}
                                    p={2}
                                    spacing={2}
                                    bgcolor='background.default'
                                    direction={{ xs: 'column', sm: 'row' }}
                                    alignItems='center'
                                    className='leader_card'
                                >
                                    <Stack className='leader_img'>
                                        <img src={API_IMG_URL + img} alt={`img${id + 1}`} />
                                    </Stack>
                                    <Stack className='leader_title' direction='column' flex={1}>
                                        <Typography sx={titleStyle}>{fullname}</Typography>
                                        <Text className='leader_job'>{job}</Text>
                                        <div className='leader_email'>
                                            <img src="/assets/icon/mail.svg" alt={`img${id + 1}`} />
                                            <a href="mailto:farhod.turaev@avtooyna.uz">{email}</a>
                                        </div>
                                    </Stack>
                                </Stack>
                            ))}
                    </>
                )
            }

        </Stack>
    )
}

export default Leadership;