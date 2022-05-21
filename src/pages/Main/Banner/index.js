import React, { useState, useCallback, useEffect } from 'react';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Text from '../../../components/Text';
import { homeBannerUrl } from "../../../api/apiUrls";
import{ API_IMG_URL} from '../../../constants/index'
import baseAPI from "../../../api/baseAPI";
import './style.scss';


const Banner = () => {
    const [banner, setBanner] = useState({});

    const getBanner = useCallback(() => {
        baseAPI.fetchAll(homeBannerUrl)
            .then(res => {
                if (res.data.status === 200) {
                    setBanner(res.data.homeBanner)
                    console.log("ban", banner);
                }
            })
            .catch((e) => console.log("error", e))
    }, [banner])

    useEffect(() => {
        getBanner();
    }, [getBanner])



    // const { imgs = "", title = "", text = "" } = banner.homeBanner;

    return (
        <div className='banner'>
            <div className="banner__bg">
                <img src={API_IMG_URL+banner.imgs} alt="banner" />
            </div>
            <div className="container">
                <div className="banner__content">
                    <Title>
                        {banner.title}
                    </Title>
                    <Text>
                        {banner.text}
                    </Text>
                    <Button>Batafsil</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner