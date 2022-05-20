import React, { useState, useCallback, useEffect } from 'react'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { homeBannerUrl } from "../../../api/apiUrls"
import baseAPI from "../../../api/baseAPI"
import './style.scss'

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

    // const { id, img } = banner;

    return (
        <div className='banner'>
            <div className="banner__bg">
                <img src={"/assets/img/banner.png"} alt="banner" />
            </div>
            <div className="container">
                <div className="banner__content">
                    <Title>
                        Avtooyna Xalq istemollari bozorida
                        {/* <div dangerouslySetInnerHTML={{ __html: title }}></div> */}
                    </Title>
                    <Text>
                        Yirik sanoat mahsulotlari bozori balki xalq istemollari bozorida ham muhim ishtirokchi
                        {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
                    </Text>
                    <Button>Batafsil</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner