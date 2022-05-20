import React, { useState, useCallback, useEffect } from 'react'
import { ImageList, ImageListItem, Stack } from '@mui/material'
import Title from '../../../components/Title';
import baseAPI from "../../../api/baseAPI";
import { aboutOrgUrl } from "../../../api/apiUrls";
import './style.scss';
import { API_BASE_URL } from '../../../constants';

const AboutOrg = () => {
    const [aboutOrg, setAboutOrg] = useState();
    const [loading, setLoading] = useState(false);

    const getAboutOrg = useCallback(() => {
        setLoading(true)
        baseAPI.fetchAll(aboutOrgUrl)
            .then((res) => {
                if (res.data.success) {
                    setAboutOrg(res.data.data);
                    setLoading(false);
                }
            })
            .catch((e) => console.log("e", e))

    }, [])

    useEffect(() => {
        getAboutOrg()
    }, [getAboutOrg])

    console.log("about", aboutOrg);


    // const { title, text, images } = aboutOrg;

    return (
        <Stack className='aboutOrg' direction='row'>
            <div className='container'>

                <div className='aboutOrg__gallery'>
                    <div className='aboutOrg__img'>
                        <img src={'/assets/img/aboutOrg2.png'} alt='aboutOrg1' />
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
                </div>
                {/* <Title>{aboutOrg.title}</Title> */}

                {/* <div dangerouslySetInnerHTML={{ __html: aboutOrg.text }}></div> */}
            </div>
        </Stack>
    )
}

export default AboutOrg;

