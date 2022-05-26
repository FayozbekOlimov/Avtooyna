import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Stack, Typography, Link as SocialLink } from '@mui/material'

const FooterBottomBlock = () => {
    return (
        <Grid container py={2} spacing={2} alignItems='center' justifyContent='space-between' width='100%'>
            <Grid item xs={12} sm={4} display='flex' justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                <Link to='/'>
                    <img src="/assets/img/logo.png" alt="logo" />
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link to='/' className="copyright">
                    <Typography
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                            color: '#fff',
                            textAlign: 'center'
                        }}
                    >
                        www.avtooyna.uz 2022</Typography>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} display='flex' justifyContent={{ xs: 'center', sm: 'flex-end' }}>
                <Stack direction='row' spacing={1}>
                    <SocialLink href="https://www.facebook.com/%D0%9E%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D1%81-%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E-Avtooyna-109277454574502" target='_blank' rel="noopener noreferrer">
                        <img src="/assets/icon/fb.svg" alt="facebok" />
                    </SocialLink>
                    {/* <SocialLink href="" target='_blank' rel="noopener noreferrer">
                        <img src="/assets/icon/youtube.svg" alt="youtube" />
                    </SocialLink> */}
                    <SocialLink href="https://t.me/Avtooyna_Fergana" target='_blank' rel="noopener noreferrer">
                        <img src="/assets/icon/tg.svg" alt="telegram" />
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/ooo_avtooyna_uz/" target='_blank' rel="noopener noreferrer">
                        <img src="/assets/icon/insta.svg" alt="instagram" />
                    </SocialLink>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default FooterBottomBlock