import React, { useState, useCallback, useEffect } from 'react'
import { ImageList, ImageListItem, Stack } from '@mui/material'
import Title from '../../../components/Title';
import Loading from '../../../components/Loading';
import Text from '../../../components/Text';
import baseAPI from "../../../api/baseAPI";
import { aboutOrgUrl } from "../../../api/apiUrls";
import useWindowSize from "../../../custom/hooks/useWindowSize";
import { API_IMG_URL } from '../../../constants';
import Fancybox from '../../../components/Fancybox';
import './style.scss';

const AboutOrg = () => {
    const [aboutOrg, setAboutOrg] = useState({});
    const [loading, setLoading] = useState(false);
    const { width } = useWindowSize();

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

    const { title, text, images = [] } = aboutOrg;

    let imgCols = width >= 768 ? 4 : width >= 576 ? 2 : width >= 320 ? 1 : 1;

    return (
        <Stack className='aboutOrg'>
            {
                loading ? (<Loading />) : (
                    <>
                        <div className='aboutOrg__gallery'>
                            <ImageList
                                sx={{ width: "100%", height: "auto" }}
                                variant="quilted"
                                cols={imgCols}
                                rowHeight={140}
                                gap={16}
                            >
                                <Fancybox>
                                    {images.slice(-8).map((image, idx) => (
                                        <ImageListItem key={idx} cols={width > 576 ? aboutOrgImgGrid[idx].cols : 2} rows={width > 576 ? aboutOrgImgGrid[idx].rows : 2}>
                                            <a data-fancybox="about-org-gallery" href={API_IMG_URL + image} className='fancybox-item'>
                                                <img
                                                    {...srcset(API_IMG_URL + image, 121, aboutOrgImgGrid[idx].rows, aboutOrgImgGrid[idx].cols)}
                                                    alt={`about org img${idx + 1}`}
                                                    loading="lazy"
                                                />
                                            </a>
                                        </ImageListItem>
                                    ))}
                                </Fancybox>
                            </ImageList>
                        </div>
                        <Title>{title}</Title>
                        <Text>
                            <span dangerouslySetInnerHTML={{ __html: text }}></span>
                        </Text>
                    </>
                )
            }
        </Stack>
    )
}

export default AboutOrg;

export function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const aboutOrgImgGrid = [
    {
        rows: 2,
        cols: 2
    },
    {
        rows: 1,
        cols: 1
    },
    {
        rows: 1,
        cols: 1
    },
    {
        rows: 1,
        cols: 2
    },
    {
        rows: 1,
        cols: 2
    },
    {
        rows: 2,
        cols: 2
    },
    {
        rows: 1,
        cols: 1
    },
    {
        rows: 1,
        cols: 1
    },
    {
        rows: 1,
        cols: 2
    }
];
