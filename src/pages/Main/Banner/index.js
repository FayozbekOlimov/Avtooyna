import React, { useState, useCallback, useEffect } from 'react'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Text from '../../../components/Text';
import { homeBannerUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import './style.css'

const Banner = () => {
    const [banner, setBanner] = useState();

    const getBanner = useCallback(async () => {
        baseAPI.fetchAll(homeBannerUrl)
            .then(res => {
                setBanner(res.data)
            })
            .catch((e) => console.log("error", e))
    }, [])

    useEffect(() => {
        getBanner();
    }, [getBanner])

    console.log("ban", banner);

    // const { id, img, title, text } = banner[0];

    return (
        <div className='banner'>
            <div className="banner__bg">
                <img src={"img"} alt="banner" />
            </div>
            <div className="container">
                <div className="banner__content">
                    <Title>
                        {/* <div dangerouslySetInnerHTML={{ __html: title }}></div> */}
                    </Title>
                    <Text>
                        {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
                    </Text>
                    {/* <Title>{title}</Title>
                    <Text>{text}</Text> */}
                    <Button>Batafsil</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner