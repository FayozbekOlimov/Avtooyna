import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import './style.css';
import { API_BASE_URL } from "../../../constants"
import baseAPI from '../../../api/baseAPI'
import { homeCompanyUrl, homeEquipmentUrl, homeGlassUrl } from '../../../api/apiUrls'

const About = () => {

    const [company, setCompany] = useState();
    const [homeGlasses, setHomeGlasses] = useState();
    const [homeEquipment, setHomeEquipment] = useState();

    const getCompany = useCallback(() => {
        baseAPI.fetchAll(homeCompanyUrl)
            .then((res) => {
                setCompany(res?.data?.company);
            })
            .catch((e) => console.log("e", e));

    }, [])

    const getGlasses = useCallback(() => {
        baseAPI.fetchAll(homeGlassUrl)
            .then((res) => {
                setHomeGlasses(res.data.glasses);
            })
            .catch((e) => console.log("e", e));

    }, [])

    const getEquipment = useCallback(() => {
        baseAPI.fetchAll(homeEquipmentUrl)
            .then((res) => {
                setHomeEquipment(res.data.equipment);
            })
            .catch((e) => console.log("e", e));

    }, [])

    useEffect(() => {
        getCompany();
        getGlasses();
        getEquipment();
    }, [getCompany, getGlasses, getEquipment])

    // const { block_title1 = "", block_title2, block_title3, img: companyImg, number1, number2, number3, text: companyText, title: companyTitle } = company;
    // const { imgs: glassImgs, text: glassText, title: glassTitle } = homeGlasses;
    // const { imgs: equipmentImgs, text: equipmentText, title: equipmentTitle } = homeEquipment;


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
                                {/* <img src={companyImg} alt="about-company" /> */}
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                {/* <Title>{companyTitle}</Title> */}
                                <Text>
                                    {/* <div dangerouslySetInnerHTML={{ __html: companyText }}>
                                    </div> */}
                                </Text>
                                <Button>Batafsil</Button>
                            </div>
                            <div className="about__numbers">
                                <Stack className="about__numbers-item" sx={{ bgcolor: 'secondary.iconBg' }}>
                                    {/* <Typography component='h2' color='secondary.dark' gutterBottom>{number1}</Typography>
                                    <Typography component='p' color='secondary.dark'>{block_title1}</Typography> */}
                                </Stack>
                                <Stack className="about__numbers-item" sx={{ bgcolor: 'secondary.iconBg' }}>
                                    {/* <Typography component='h2' color='secondary.dark' gutterBottom>{number2}</Typography>
                                    <Typography component='p' color='secondary.dark'>{block_title2}</Typography> */}
                                </Stack>
                                <Stack className="about__numbers-item" sx={{ bgcolor: 'secondary.iconBg' }}>
                                    {/* <Typography component='h2' color='secondary.dark' gutterBottom>{number3}</Typography>
                                    <Typography component='p' color='secondary.dark'>{block_title3}</Typography> */}
                                </Stack>
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack my={2}>
                    <Grid container spacing={4} direction='row-reverse' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    {/* <img className='about__img' src={API_BASE_URL + glassImgs[0]} alt="oyna1" /> */}
                                </Grid>
                                <Grid item sm={6}>
                                    {/* <img className='about__img' src={API_BASE_URL + glassImgs[1]} alt="oyna2" /> */}
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <img className='about__img' src={API_BASE_URL + glassImgs[2]} alt="oyna3" /> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                {/* <Title>{glassTitle}</Title>
                                <Text>{glassText}</Text>
                                <Button>Batafsil</Button> */}
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack mt={2} mb={1}>
                    <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                {/* <Grid item sm={6}>
                                    <img className='about__img' src={API_BASE_URL + equipmentImgs[0]} alt="ehtqism1" />
                                </Grid>
                                <Grid item sm={6}>
                                    <img className='about__img' src={API_BASE_URL + equipmentImgs[1]} alt="ehtqism2" />
                                </Grid>
                                <Grid item xs={12}>
                                    <img className='about__img' src={API_BASE_URL + equipmentImgs[2]} alt="ehtqism3" />
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                {/* <Title>
                                    {equipmentTitle}
                                </Title>
                                <Text>
                                    {equipmentText}
                                </Text> */}
                                <Button>Batafsil</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
            </div>
        </Stack>
    )
}

export default About;