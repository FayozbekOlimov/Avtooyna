import React, { useCallback, useContext, useEffect, useState } from 'react'
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
import { ColorModeContext } from '../../../static'
import Fancybox from '../../../components/Fancybox'

const About = () => {
    const { t, lang } = useT()
    const [company, setCompany] = useState({});
    const [homeGlasses, setHomeGlasses] = useState({});
    const [homeEquipment, setHomeEquipment] = useState({});
    const [isLoadingCompany, setIsLoadingCompany] = useState(false);
    const [isLoadingGlasses, setIsLoadingGlasses] = useState(false);
    const [isLoadingEquipment, setIsLoadingEquipment] = useState(false);

    const getCompany = useCallback(() => {
        setIsLoadingCompany(true);
        baseAPI.fetchAll(homeCompanyUrl)
            .then((res) => {
                if (res.data.success) {
                    setCompany(res.data.data);
                    setIsLoadingCompany(false);
                }
            })
            .catch((e) => console.log("e", e));

    }, [])

    const getGlasses = useCallback(() => {
        setIsLoadingGlasses(true);
        baseAPI.fetchAll(homeGlassUrl)
            .then((res) => {
                if (res.data.success) {
                    setHomeGlasses(res.data.data);
                    setIsLoadingGlasses(false);
                }
            })
            .catch((e) => console.log("e", e));

    }, [])

    const getEquipment = useCallback(() => {
        setIsLoadingEquipment(true);
        baseAPI.fetchAll(homeEquipmentUrl)
            .then((res) => {
                if (res.data.success) {
                    setHomeEquipment(res.data.data);
                    setIsLoadingEquipment(false);
                }
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

    const { mode, setMode } = useContext(ColorModeContext);

    return (
        <Stack
            py={{ xs: 2, md: 4 }}
            className="about"
            bgcolor='background.default'
            sx={{
                backgroundImage: mode['color'] === 'light' ? 'url("/assets/img/about-bg.png")' : null
            }}
        >
            <div className="container">
                <Stack mt={1} mb={2}>
                    <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Fancybox>
                                <div className="about__picture">
                                    {!isLoadingCompany ? (
                                        <a data-fancybox="main-about1" href={API_IMG_URL + companyImg} className='fancybox-item'>
                                            <img src={API_IMG_URL + companyImg} alt="about-company" />
                                        </a>
                                    ) : null}
                                </div>
                            </Fancybox>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>{companyTitle}</Title>
                                <Text>
                                    <span dangerouslySetInnerHTML={{ __html: companyText }}>
                                    </span>
                                </Text>
                                <Link to={"/about-us/babout"}>
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
                                    <Fancybox>
                                        <div className="about__img">
                                            {!isLoadingGlasses ? (
                                                <a data-fancybox="main-about2" href={API_IMG_URL + glassImgs[0]} className='fancybox-item'>
                                                    <img src={API_IMG_URL + glassImgs[0]} alt="oyna1" />
                                                </a>
                                            ) : null}
                                        </div>
                                    </Fancybox>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Fancybox>
                                        <div className="about__img">
                                            {!isLoadingGlasses ? (
                                                <a data-fancybox="main-about2" href={API_IMG_URL + glassImgs[1]} className='fancybox-item'>
                                                    <img src={API_IMG_URL + glassImgs[1]} alt="oyna2" />
                                                </a>
                                            ) : null}
                                        </div>
                                    </Fancybox>
                                </Grid>
                                <Grid item xs={12}>
                                    <Fancybox>
                                        <div className="about__img">
                                            {!isLoadingGlasses ? (
                                                <a data-fancybox="main-about2" href={API_IMG_URL + glassImgs[2]} className='fancybox-item'>
                                                    <img src={API_IMG_URL + glassImgs[2]} alt="oyna3" />
                                                </a>
                                            ) : null}
                                        </div>
                                    </Fancybox>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>{glassTitle}</Title>
                                <Text className="glass_text">
                                    <span dangerouslySetInnerHTML={{ __html: glassText }}></span>
                                </Text>
                                <Link to="/about-us/:oynalar"><Button>{t(`detail.${lang}`)}</Button></Link>     </div>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack mt={2} mb={1}>
                    <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <div className="about__img">
                                        {!isLoadingEquipment ? (
                                            <a data-fancybox="main-about3" href={API_IMG_URL + equipmentImgs[0]} className='fancybox-item'>
                                                <img src={API_IMG_URL + equipmentImgs[0]} alt="ehtqism1" />
                                            </a>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <div className="about__img">
                                        {!isLoadingEquipment ? (
                                            <a data-fancybox="main-about3" href={API_IMG_URL + equipmentImgs[1]} className='fancybox-item'>
                                                <img src={API_IMG_URL + equipmentImgs[1]} alt="ehtqism1" />
                                            </a>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="about__img">
                                        {!isLoadingEquipment ? (
                                            <a data-fancybox="main-about3" href={API_IMG_URL + equipmentImgs[2]} className='fancybox-item'>
                                                <img src={API_IMG_URL + equipmentImgs[2]} alt="ehtqism1" />
                                            </a>
                                        ) : null}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>
                                    {equipmentTitle}
                                </Title>
                                <Text>
                                    <span dangerouslySetInnerHTML={{ __html: equipmentText }}></span>
                                </Text>
                                <Link to="/about-us/:equipment"><Button>{t(`detail.${lang}`)}</Button></Link>

                            </div>
                        </Grid>
                    </Grid>
                </Stack>
            </div >
        </Stack >
    )
}

export default About;