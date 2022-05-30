import React, { useState, useCallback, useEffect } from 'react';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Text from '../../../components/Text';
import { homeBannerUrl } from "../../../api/apiUrls";
import { API_IMG_URL } from '../../../constants/index'
import baseAPI from "../../../api/baseAPI";
import { useT } from "../../../custom/hooks/useT";
import { Link } from "react-router-dom";
import './style.scss';


const Banner = () => {
    const { t, lang } = useT()
    const [banner, setBanner] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getBanner = useCallback(() => {
        setIsLoading(true);
        baseAPI.fetchAll(homeBannerUrl)
            .then(res => {
                if (res.data.success) {
                    setBanner(res.data.data)
                    setIsLoading(false);
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
                {!isLoading ? <img src={API_IMG_URL + imgs} alt="banner" /> : null}
            </div>
            <div className="container">
                <div className="banner__content">
                    <Title>
                        <div dangerouslySetInnerHTML={{ __html: title }} />
                    </Title>
                    <Text>
                        <span dangerouslySetInnerHTML={{ __html: text }} />
                    </Text>
                    <Link to={"/about-us/babout"}>
                        <Button>{t(`detail.${lang}`)}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner