import React, { useState, useContext, useEffect, useCallback } from 'react'
import { ExpandMore, FmdGood, Menu as MenuIcon, PhoneEnabled, RemoveRedEye } from '@mui/icons-material';
import { Button, FormControl, Grid, Box, MenuItem, Select, Stack, Link as TelLink, Typography, Tooltip, createTheme } from '@mui/material';
import { Drawer, Menu } from 'antd';
import { CgCloseO } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom';
import { useT } from "../../custom/hooks/useT";
import { changeLang, setLang } from '../../helpers';
import headerMenu from './headerMenu.json';
import { ConsultContext } from "../../App";
import { ColorModeContext } from '../../static';
import { blue } from '@mui/material/colors';
import { telsUrl } from "../../api/apiUrls";
import baseAPI from "../../api/baseAPI";
import './style.scss';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const { t, lang } = useT();
    let langs = [{ 1: "UZ", 2: "uz" }, { 1: "РУ", 2: "ru" }, { 1: "EN", 2: "en" }];

    const [tels, setTels] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTels = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll(telsUrl)
            .then((res) => {
                if (res.data.success) {
                    setTels(res.data.data);
                    setLoading(false);
                }
            })
            .catch((e) => console.log("e", e))

    }, [])

    useEffect(() => {
        getTels()
    }, [getTels])


    const handleChange = (event) => {
        setLang(event.target.value);
        changeLang(event.target.value);
        // window.location.reload();
    };

    function getItem(label, key, children) {
        return { key, children, label };
    }


    const items = headerMenu.map((menu) => (
        getItem(menu.menuName, menu.key, menu.submenu.map((sub) => (
            getItem(<NavLink
                to={`${menu.to}${sub.to}`}
                className='header__link'
                onClick={() => setVisible(false)}
            >
                {sub.text}
            </NavLink>,
                sub.key)
        )))
    ))

    const { mode, toggleMode } = useContext(ColorModeContext);
    const { onOpenConsultModal } = useContext(ConsultContext);

    return (
        <Stack className='header' bgcolor='background.default'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={2} display='flex' alignItems='center'>
                        <MenuIcon
                            sx={{ color: 'secondary.main', mr: 1, cursor: 'pointer' }}
                            className='header__menu-icon'
                            fontSize='large'
                            onClick={() => setVisible(true)}
                        />
                        <Link to='/' className='header__logo'>
                            <img src={mode === 'light' ? '/assets/img/logo.svg' : '/assets/img/logo.png'} alt='logo' />
                        </Link>
                    </Grid>
                    <Box component={Grid} item xs={12} md={9} lg={6} display={{
                        md: "none", lg: "flex"
                    }} justifyContent='space-evenly'>
                        <div className='header__tel'>
                            <Stack className='header__tel-icon' sx={{ bgcolor: 'background.iconBg' }}>
                                <PhoneEnabled sx={{ color: 'primary.main' }} />
                            </Stack>
                            <Stack className='header__tel-content'>
                                {
                                    tels.map(tel => (
                                        <>
                                            <TelLink href={`tel:${tel.tel_namber}`} sx={{ color: 'info.light', textDecoration: 'none' }}
                                                key={tel.id}
                                            >{tel.tel_namber}</TelLink>
                                        </>
                                    ))
                                }
                            </Stack>
                        </div>
                        <div className='header__tel'>
                            <Stack className='header__tel-icon' sx={{ bgcolor: 'background.iconBg' }}>
                                <FmdGood sx={{ color: 'primary.main' }} />
                            </Stack>
                            <div className='header__tel-content'>
                                <Typography component='p' sx={{ color: 'info.light' }}>{t(`ourAddressName.${lang}`)}</Typography>
                                <small>{t(`ourAddress.${lang}`)}</small>
                            </div>
                        </div>
                    </Box>
                    <Grid item xs={12} md={12} lg={4} display='flex' alignItems='center' justifyContent='space-between'>
                        <Box display={{ md: "none", lg: "block" }}>
                            <Button
                                variant='outlined'
                                sx={{
                                    textTransform: 'none',
                                    padding: '8px',
                                    color: 'info.main',
                                    borderColor: 'border.main'
                                }}
                                onClick={onOpenConsultModal}
                            >
                                {t(`getConsult.${lang}`)}
                            </Button>
                        </Box>
                        <FormControl className="language_wrapper" >
                            <Select
                                IconComponent={ExpandMore}
                                value={lang}
                                onChange={handleChange}
                                size='small'
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    padding: 0,
                                    width: '80px',
                                    '& .MuiSvgIcon-root': {
                                        color: 'info.main',
                                        left: '7px'
                                    }
                                }}
                            >
                                {
                                    langs.map((language, idx) => (
                                        <MenuItem key={idx} value={language[2]}>{language[1]}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <Button
                            variant='contained'
                            className='header__mode'
                            size='medium'
                            onClick={toggleMode}
                            sx={{
                                bgcolor: 'primary.light',
                                '&:hover': {
                                    bgcolor: blue[800]
                                }
                            }}
                        >
                            <RemoveRedEye />
                        </Button>
                    </Grid>
                </Grid>
                <Drawer
                    title="MENU"
                    placement='left'
                    width={256}
                    onClose={() => setVisible(false)}
                    visible={visible}
                    closeIcon={<CgCloseO />}
                >
                    <Menu
                        style={{ width: '100%' }}
                        mode="vertical"
                        items={items}
                    />
                </Drawer>
            </div>
        </Stack>
    )
}

export default Header
