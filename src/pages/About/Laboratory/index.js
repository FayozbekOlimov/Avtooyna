import React, { useCallback, useEffect, useState } from 'react'
import { ImageList, ImageListItem, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import { laboratoryUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { aboutOrgImgGrid, srcset } from '../AboutOrg';
import { API_IMG_URL } from '../../../constants';
import useWindowSize from '../../../custom/hooks/useWindowSize';

const Laboratory = () => {
    const [laboratory, setLaboratory] = useState({});
    const [loading, setLoading] = useState(false);
    const { width } = useWindowSize();

    const getLaboratory = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll(laboratoryUrl)
            .then((res) => {
                // if (res.data.success) {
                setLaboratory(res.data.libariry);
                setLoading(false);
                // }
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
            <div className="laboratory__galllery">
                <ImageList

                    sx={{ width: "100%", height: "auto" }}
                    variant="quilted"
                    cols={imgCols}
                    rowHeight={121}
                    gap={"16px"}
                >
                    {imgs.map((image, idx) => (
                        <ImageListItem key={idx} cols={aboutOrgImgGrid[idx].cols} rows={aboutOrgImgGrid[idx].rows}>
                            <img
                                {...srcset(API_IMG_URL + image, 121, aboutOrgImgGrid[idx].rows, aboutOrgImgGrid[idx].cols)}
                                alt={`about org img${idx + 1}`}
                                loading="lazy"
                                style={{ borderRadius: "12px" }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            <Title>{title}</Title>
            <Text><div dangerouslySetInnerHTML={{ __html: text }}></div></Text>
        </Stack>
    )
}

export default Laboratory;

