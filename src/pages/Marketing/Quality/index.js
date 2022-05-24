import React, { useState, useCallback, useEffect } from 'react'
import { Grid } from '@mui/material'
import Title from '../../../components/Title'
import Text from "../../../components/Text";
import Loading from "../../../components/Loading";
import { qualityUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import "./style.scss"

const Quality = () => {
    const [quality, setQuality] = useState([]);
    const [loading, setLoading] = useState(false);

    const getQuality = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll(qualityUrl)
            .then((res) => {
                // if (res.data.success) {
                setQuality(res.data.sifat);
                setLoading(false);
                // }
            })
            .catch((e) => console.log("e", e))

    }, [])

    useEffect(() => {
        getQuality()
    }, [getQuality])

    const { title, text } = quality;

    return (
        <Grid item xs={12} md={9}>
            <div className="quality">
                {
                    loading ? (<Loading />) : (
                        <>
                            <Title>{title}</Title>
                            <Text>
                                <div dangerouslySetInnerHTML={{ __html: text }}></div>
                            </Text>
                        </>
                    )
                }

            </div>
        </Grid>

    )
}

export default Quality;