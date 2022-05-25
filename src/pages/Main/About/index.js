import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom';
import './style.scss';
import { API_IMG_URL } from "../../../constants";
import baseAPI from '../../../api/baseAPI';
import { homeCompanyUrl, homeEquipmentUrl, homeGlassUrl } from '../../../api/apiUrls'
import { useT } from '../../../custom/hooks/useT'

const About = () => {
    const { t, lang } = useT()
    const [company, setCompany] = useState({});
    const [homeGlasses, setHomeGlasses] = useState({});
    const [homeEquipment, setHomeEquipment] = useState({});

    const getCompany = useCallback(() => {
        baseAPI.fetchAll(homeCompanyUrl)
            .then((res) => {
                setCompany(res.data.data);
            })
            .catch((e) => console.log("e", e));

    }, [])

    const getGlasses = useCallback(() => {
        baseAPI.fetchAll(homeGlassUrl)
            .then((res) => {
                setHomeGlasses(res.data.data);
            })
            .catch((e) => console.log("e", e));

    }, [])

    const getEquipment = useCallback(() => {
        baseAPI.fetchAll(homeEquipmentUrl)
            .then((res) => {
                setHomeEquipment(res.data.data);
            })
            .catch((e) => console.log("e", e));

    }, [])

    useEffect(() => {
        getCompany();
        getGlasses();
        getEquipment();
    }, [getCompany, getGlasses, getEquipment])

    const { block_title1 = "", block_title2, block_title3, img: companyImg, number1, number2, number3, text: companyText, title: companyTitle } = company;
    const { imgs: glassImgs = [], text: glassText, title: glassTitle } = homeGlasses;
    const { imgs: equipmentImgs = [], text: equipmentText, title: equipmentTitle } = homeEquipment;

    return (
        <Stack
            py={{ xs: 2, md: 4 }}
            className="about"
            bgcolor='background.default'
            sx={{
                backgroundImage: 'url("/assets/img/about-bg.png")'
            }}
        >
            <div className="container">
                <Stack mt={1} mb={2}>
                    <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <div className="about__picture">
                                <img src={API_IMG_URL + companyImg} alt="about-company" />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>{companyTitle}</Title>
                                <Text>
                                    <div dangerouslySetInnerHTML={{ __html: companyText }}>
                                    </div>
                                </Text>
                                <Link to={"/about-us/about-org"}>
                                    <Button>{t(`detail.${lang}`)}</Button>
                                </Link>
                            </div>
                            <div className="about__numbers">
                                <Stack className="about__numbers-item" sx={{ bgcolor: 'background.iconBg' }}>
                                    <Typography component='h2' color='secondary.dark' gutterBottom>{number1}</Typography>
                                    <Typography component='p' color='secondary.dark'>{block_title1}</Typography>
                                </Stack>
                                <Stack className="about__numbers-item" sx={{ bgcolor: 'background.iconBg' }}>
                                    <Typography component='h2' color='secondary.dark' gutterBottom>{number2}</Typography>
                                    <Typography component='p' color='secondary.dark'>{block_title2}</Typography>
                                </Stack>
                                <Stack className="about__numbers-item" sx={{ bgcolor: 'background.iconBg' }}>
                                    <Typography component='h2' color='secondary.dark' gutterBottom>{number3}</Typography>
                                    <Typography component='p' color='secondary.dark'>{block_title3}</Typography>
                                </Stack>
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack my={2}>
                    <Grid container spacing={4} direction='row-reverse' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <img className='about__img' src={API_IMG_URL + (glassImgs[0])} alt="oyna1" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <img className='about__img' src={API_IMG_URL + glassImgs[1]} alt="oyna2" />
                                </Grid>
                                <Grid item xs={12}>
                                    <img className='about__img' src={API_IMG_URL + glassImgs[2]} alt="oyna3" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>{glassTitle}</Title>
                                <Text className="glass_text">   <div dangerouslySetInnerHTML={{ __html: glassText }}>
                                </div></Text>
                                <Link to="/about-us/:oynalar"><Button>{t(`detail.${lang}`)}</Button></Link>     </div>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack mt={2} mb={1}>
                    <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <img className='about__img' src={API_IMG_URL + equipmentImgs[0]} alt="ehtqism1" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <img className='about__img' src={API_IMG_URL + equipmentImgs[1]} alt="ehtqism2" />
                                </Grid>
                                <Grid item xs={12}>
                                    <img className='about__img' src={API_IMG_URL + equipmentImgs[2]} alt="ehtqism3" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>
                                    {equipmentTitle}
                                </Title>
                                <Text>
                                    <div dangerouslySetInnerHTML={{ __html: equipmentText }}></div>
                                </Text>
                                <Link to="/about-us/:equipment"><Button>{t(`detail.${lang}`)}</Button></Link>

                            </div>
                        </Grid>
                    </Grid>
                </Stack>
            </div>
        </Stack>
    )
}

export default About;