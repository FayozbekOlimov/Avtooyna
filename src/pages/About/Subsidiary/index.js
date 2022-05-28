import React, { useCallback, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Loading from '../../../components/Loading'
import baseAPI from '../../../api/baseAPI';
import { subsidiaryUrl } from '../../../api/apiUrls';

const Subsidiary = () => {
    const [subsidiary, setSubsidiary] = useState({});
    const [loading, setLoading] = useState(false);

    const getSubsidiary = useCallback(() => {
        setLoading(true)
        baseAPI.fetchAll(subsidiaryUrl)
            .then((res) => {
                if (res.data.success) {
                    setSubsidiary(res.data.data);
                    setLoading(false);
                }
            })
            .catch((e) => console.log("e", e))

    }, [])

    useEffect(() => {
        getSubsidiary()
    }, [getSubsidiary])

    const { title, text } = subsidiary;
    return (
        <Stack>
            {
                loading ? (<Loading />) : (
                    <>
                        <Title>{title}</Title>
                        <Text>
                            <span dangerouslySetInnerHTML={{ __html: text }}></span>
                        </Text>
                    </>
                )
            }
        </Stack>
    )
}

export default Subsidiary