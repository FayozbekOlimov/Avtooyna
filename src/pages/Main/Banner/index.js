import React, { useState, useCallback, useEffect } from 'react';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Text from '../../../components/Text';
import { homeBannerUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import './style.css';


const Banner = () => {
    const [banner, setBanner] = useState();

    const getBanner = useCallback(async () => {
        baseAPI.fetchAll(homeBannerUrl)
            .then(res => {
                if (res.data.status === 200) {
                    setBanner(res.data)
                    console.log("ban", banner);
                }
            })
            .catch((e) => console.log("error", e))
    }, [banner])

    useEffect(() => {
        getBanner();
    }, [getBanner])



    const { imgs, title, text } = banner.homeBanner;

    return (
        <div className='banner'>
            <div className="banner__bg">
                <img src={imgs} alt="banner" width="100%" />
            </div>
            <div className="container">
                <div className="banner__content">
                    <Title>
                        <div dangerouslySetInnerHTML={{ __html: title }}></div>
                    </Title>
                    <Text>
                        <div dangerouslySetInnerHTML={{ __html: text }}></div>
                    </Text>

                    <Button>Batafsil</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner