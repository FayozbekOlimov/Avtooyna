import React from 'react'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import './style.css'

const Banner = () => {
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