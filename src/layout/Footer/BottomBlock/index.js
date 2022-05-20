import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Stack, Typography, Link as SocialLink } from '@mui/material'

const FooterBottomBlock = () => {
    return (
        <Grid container py={2} spacing={1} alignItems='center' justifyContent='space-between' width='100%'>
            <Grid item xs={12} sm={4} display='flex' justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                <Link to='/'>
                    <img src="/assets/img/logo.png" alt="" />
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
                    <SocialLink href="" target='_blank'>
                        <img src="/assets/icon/fb.svg" alt="" />
                    </SocialLink>
                    <SocialLink href="" target='_blank'>
                        <img src="/assets/icon/youtube.svg" alt="" />
                    </SocialLink>
                    <SocialLink href="" target='_blank'>
                        <img src="/assets/icon/tg.svg" alt="" />
                    </SocialLink>
                    <SocialLink href="" target='_blank'>
                        <img src="/assets/icon/insta.svg" alt="" />
                    </SocialLink>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default FooterBottomBlock