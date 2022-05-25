import React, { useState, useEffect, useCallback, } from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import baseAPI from '../../../api/baseAPI';
import { localizationUrl } from '../../../api/apiUrls';
import Loading from '../../../components/Loading';

const Localization = () => {
    const [localization, setLocalization] = useState({});
    const [loading, setLoading] = useState(false);

    const getLocalization = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll(localizationUrl)
            .then((res) => {
                if (res.data.success) {
                    setLocalization(res.data.data);
                    setLoading(false);
                }
            })
            .catch((e) => console.log("e", e))

    }, [])

    useEffect(() => {
        getLocalization()
    }, [getLocalization])

    const { title, text } = localization;

    return (
        <Stack>
            {
                loading ? (<Loading />) : (
                    <>
                        <Title>{title}</Title>
                        <Text><div dangerouslySetInnerHTML={{ __html: text }}></div></Text>
                    </>
                )
            }

        </Stack>
    )
}

export default Localization