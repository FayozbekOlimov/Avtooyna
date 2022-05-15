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
    return (
        <div className='banner'>
            <div className="banner__bg">
                <img src="./assets/img/banner.png" alt="banner" />
            </div>
            <div className="container">
                <div className="banner__content">
                    <Title>Avtooyna Xalq istemollari bozorida</Title>
                    <Text>Yirik sanoat mahsulotlari bozori balki xalq istemollari bozorida ham muhim ishtirokchi</Text>
                    <Button>Batafsil</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner