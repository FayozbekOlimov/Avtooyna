import React from 'react'
import { Stack } from '@mui/material'
import Title from '../../../components/Title'
import './style.scss'

const AboutOrg = () => {
    return (
        <Stack className='aboutOrg' direction='row'>
            <div className='container'>

                {/* <div className='aboutOrg__gallery'>
                    <div className='aboutOrg__img'>
                        <img src='/assets/img/aboutOrg1.png' alt='aboutOrg1' />
                    </div>
                    <div className='aboutOrg__img'>
                        <img src='/assets/img/aboutOrg2.png' alt='aboutOrg2' />
                    </div>
                    <div className='aboutOrg__img'>
                        <img src='/assets/img/aboutOrg3.png' alt='aboutOrg3' />
                    </div>
                    <div className='aboutOrg__img'>
                        <img src='/assets/img/aboutOrg4.png' alt='aboutOrg4' />
                    </div>
                    <div className='aboutOrg__img'>
                        <img src='/assets/img/aboutOrg5.png' alt='aboutOrg5' />
                    </div>
                    <div className='aboutOrg__img'>
                        <img src='/assets/img/aboutOrg6.png' alt='aboutOrg6' />
                    </div>
                    <div className='aboutOrg__img'>
                        <img src='/assets/img/aboutOrg7.png' alt='aboutOrg7' />
                    </div>
                </div> */}
                <Title>Tashkilot haqida</Title>
            </div>
        </Stack>
    )
}

export default AboutOrg