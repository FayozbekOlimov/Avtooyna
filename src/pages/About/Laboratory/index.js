import React, { useCallback, useEffect, useState } from 'react'
import { ImageList, ImageListItem, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { laboratoryUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { aboutOrgImgGrid, srcset } from '../AboutOrg';
import { API_IMG_URL } from '../../../constants';
import useWindowSize from '../../../custom/hooks/useWindowSize';
import Loading from '../../../components/Loading';
import Fancybox from '../../../components/Fancybox';
import './style.scss';

const Laboratory = () => {
    const [laboratory, setLaboratory] = useState({});
    const [loading, setLoading] = useState(false);
    const { width } = useWindowSize();

    const getLaboratory = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll(laboratoryUrl)
            .then((res) => {
                if (res.data.success) {
                    setLaboratory(res.data.data);
                    setLoading(false);
                }
            })
            .catch((e) => console.log("e", e))
    }, [])

    useEffect(() => {
        getLaboratory()
    }, [getLaboratory])

    const { title, text, imgs = [] } = laboratory;

    let imgCols = width >= 768 ? 4 : width >= 576 ? 2 : width >= 320 ? 1 : 1;

    return (
        <Stack>
            {
                loading ? (<Loading />) : (
                    <>
                        <div className="laboratory__gallery">
                            <ImageList
                                sx={{ width: "100%", height: "auto" }}
                                variant="quilted"
                                cols={imgCols}
                                rowHeight={140}
                                gap={16}
                            >
                                <Fancybox>
                                    {imgs.slice(-8).map((image, idx) => (
                                        <ImageListItem key={idx} cols={width > 576 ? aboutOrgImgGrid[idx].cols : 2} rows={width > 576 ? aboutOrgImgGrid[idx].rows : 2}>
                                            <a data-fancybox="about-lab-gallery" href={API_IMG_URL + "/" + image} className='fancybox-item'>
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
                        <Text><span dangerouslySetInnerHTML={{ __html: text }}></span></Text>
                    </>
                )}
        </Stack>
    )
}

export default Laboratory;

