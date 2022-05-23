import React, { useCallback, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Loading from '../../../components/Loading'
import { leadershipUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';

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
        <Stack>
            {
                loading ? (<Loading />) : (
                    <>
                        <Title>Rahbariyat</Title>

                    </>
                )
            }
        </Stack>
    )
}

export default Leadership