import React, { useState } from 'react'
import { ExpandMore, FmdGood, Logout, Menu, PersonAdd, PhoneEnabled, RemoveRedEye, Settings } from '@mui/icons-material';
import { Avatar, Button, Divider, FormControl, Grid, IconButton, ListItemIcon, MenuItem, Select, Tooltip } from '@mui/material';
import { Drawer, Menu as Menus } from 'antd';
import { CgCloseO } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom';
import { useT } from "../../custom/hooks/useT";
import './style.scss'
import { changeLang, setLang } from '../../helpers';
import headerMenu from './headerMenu.json';
import { theme } from '../../static/theme';

const Header = () => {
    const { t, lang } = useT();
    let langs = [{ 1: "UZ", 2: "uz" }, { 1: "РУ", 2: "ru" }, { 1: "EN", 2: "en" }];

    const handleChange = (event) => {
        setLang(event.target.value);
        changeLang(event.target.value);
        // window.location.reload();
    };

    function getItem(label, key, children) {
        return { key, children, label };
    }

    const [visible, setVisible] = useState(false);
    // const onClose = () => { setVisible(false); };
    // const showDrawer = () => { setVisible(true); };

    const items = headerMenu.map((menu) => (
        getItem(menu.menuName, menu.key, menu.submenu.map((sub) => (
            getItem(<NavLink to={`${menu.to}${sub.to}`} className='header__link' onClick={() => setVisible(false)}>{sub.text}</NavLink>, sub.key)
        )))
    ))

    return (
        <header className='header'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={2} display='flex' alignItems='center'>
                        <Menu
                            className='header__menu-icon'
                            fontSize='large'
                            onClick={() => setVisible(true)}
                        />
                        <Link to='/' className='header__logo'>
                            <img src='/assets/img/logo.svg' alt='logo' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={9} lg={6} display='flex' justifyContent='space-evenly'>
                        <div className='header__tel'>
                            <div className='header__tel-icon'>
                                <PhoneEnabled />
                            </div>
                            <div className='header__tel-content'>
                                <a href='tel:+998732497575'>+998 73 249-75-75</a>
                                <a href='tel:+998732430835'>+998 73 243-08-35</a>
                            </div>
                        </div>
                        <div className='header__tel'>
                            <div className='header__tel-icon'>
                                <FmdGood />
                            </div>
                            <div className='header__tel-content'>
                                <p>Farg’ona sh, Istiqlol 1A uy</p>
                                <small>{t(`ourAddress.${lang}`)}</small>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} display='flex' alignItems='center' justifyContent='space-between'>
                        <Button
                            variant='outlined'
                            sx={{
                                textTransform: 'none',
                                color: theme.palette.titleColor.main,
                                padding: '8px'
                            }}>
                            Konsultatsiya olish
                        </Button>
                        <FormControl >
                            <Select
                                IconComponent={ExpandMore}
                                value={lang}
                                onChange={handleChange}
                                size='small'
                                displayEmpty
                                defaultValue='uz'
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    padding: 0,
                                    width: '80px',
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.titleColor.main
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
                    <Menus
                        style={{ width: '100%' }}
                        mode="vertical"
                        items={items}
                    />
                </Drawer>
            </div>
        </header>
    )
}

export default Header
