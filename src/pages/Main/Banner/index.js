import React, { useState, useCallback, useEffect } from 'react';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Text from '../../../components/Text';
import { homeBannerUrl } from "../../../api/apiUrls";
import { API_IMG_URL } from '../../../constants/index'
import baseAPI from "../../../api/baseAPI";
import { useT } from "../../../custom/hooks/useT";
import './style.scss';


const Banner = () => {
    const { t, lang } = useT()
    const [banner, setBanner] = useState({});

    const getBanner = useCallback(() => {
        baseAPI.fetchAll(homeBannerUrl)
            .then(res => {
                if (res.data.success) {
                    setBanner(res.data.data)
                }
            })
            .catch((e) => console.log("error", e))
    }, [])

    useEffect(() => {
        getBanner();
    }, [getBanner])

    const { title, text, imgs } = banner;

    return (
        <div className='banner'>
            <div className="banner__bg">
                <img src={API_IMG_URL + imgs} alt="banner" />
            </div>
            <div className="container">
                <div className="banner__content">
                    <Title>
                        <div dangerouslySetInnerHTML={{ __html: title }} />
                    </Title>
                    <Text>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </Text>
                    <Button>{t(`detail.${lang}`)}</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner