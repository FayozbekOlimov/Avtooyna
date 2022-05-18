import React from 'react'
import { Grid, Stack } from '@mui/material'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import './style.css'

const About = () => {
    return (
        <Stack py={{xs: 2, md: 4}} className="about">
            <div className="container">
                <Stack mt={1} mb={2}>
                    <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <div className="about__picture">
                                <img src="/assets/img/company.png" alt="about-company" />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>Kompaniya haqida</Title>
                                <Text>"Avtooyna" MChJ tarixi uzoq ‘98 yillardan boshlanadi. O'zbekiston Respublikasi Vazirlar Mahkamasining 1998 yil 8 oktyabrdagi qaroriga asosan xavfsiz avtomobil oynalarini ishlab chiqarish tashkil qilingan.</Text>
                                <Button>Batafsil</Button>
                            </div>
                            <div className="about__numbers">
                                <div className="about__numbers-item">
                                    <h2>10000</h2>
                                    <p>dan ortiq mutaxassislar</p>
                                </div>
                                <div className="about__numbers-item">
                                    <h2>10000</h2>
                                    <p>dan ortiq mutaxassislar</p>
                                </div>
                                <div className="about__numbers-item">
                                    <h2>237</h2>
                                    <p>turdagi mahsulotlar</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack my={2}>
                    <Grid container spacing={4} direction='row-reverse' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <img className='about__img' src="/assets/img/oyna1.png" alt="oyna1" />
                                </Grid>
                                <Grid item sm={6}>
                                    <img className='about__img' src="/assets/img/oyna2.png" alt="oyna2" />
                                </Grid>
                                <Grid item xs={12}>
                                    <img className='about__img' src="/assets/img/oyna3.png" alt="oyna3" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>Avtomobil oynalarini ishlab chiqarish</Title>
                                <Text>Tashkilotimiz avtomobil oynalarini ishlab chiqarish va tayyor mahsulotlarni eksport qilish bilan shug’ullanadi. Barcha turdagi avtomashinalar uchun oynalar ishlab chiqariladi.</Text>
                                <Button>Batafsil</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack mt={2} mb={1}>
                    <Grid container spacing={4} direction='row' alignItems='center' justifyContent='center'>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <img className='about__img' src="/assets/img/ehtqism1.png" alt="ehtqism1" />
                                </Grid>
                                <Grid item sm={6}>
                                    <img className='about__img' src="/assets/img/ehtqism2.png" alt="ehtqism2" />
                                </Grid>
                                <Grid item xs={12}>
                                    <img className='about__img' src="/assets/img/ehtqism3.png" alt="ehtqism3" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about__content">
                                <Title>
                                    Avtomobil ehtiyot qismlarini ishlab chiqarish
                                </Title>
                                <Text>
                                    Ximoyalangan (kapsulali) bir qavatli (oddiy yoki qoraytirilgan) oyna, sovutish ventilyatorlari va motor svechalarini (mis o’zakli nikelli markaziy elektrodlar) ishlab chiqarish.
                                </Text>
                                <Button>Batafsil</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Stack>
            </div>
        </Stack>
    )
}

export default About