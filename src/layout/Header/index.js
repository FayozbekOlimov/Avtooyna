import React, { useState } from 'react'
import { ExpandMore, FmdGood, Menu, PhoneEnabled, RemoveRedEye } from '@mui/icons-material';
import { Button, FormControl, Grid, MenuItem, Select } from '@mui/material';
import { Drawer, Menu as Menus } from 'antd';
import { CgCloseO } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
import './style.scss'

const Header = () => {
    const [lang, setLang] = useState('uz');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    function getItem(label, key, children, type) {
        return {
            key,
            children,
            label,
            type,
        };
    }

    // const submenus = ["leaderShip", "laboratory"];

    // submenus.map((menu, idx) => (
    //     <NavLink to={`${submenus[idx]}/:${menu[url_values]}`} ></NavLink>
    // ))

    const items = [
        getItem('Biz haqimizda', 'sub1', [
            getItem(<NavLink to='about' className='header__link'>Tashkilot haqida</NavLink>, '1'),
            getItem(<NavLink to='subsidiary/:' className='header__link'>Sho’xa korxonamiz</NavLink>, '2'),
            getItem(<NavLink to='leadership' className='header__link'>Rahbariyat</NavLink>, '3'),
            getItem(<NavLink to='laboratory' className='header__link'>Laboratoriya</NavLink>, '4'),
            getItem(<NavLink to='localization' className='header__link'>Mahalliylashtirish</NavLink>, '5'),
            getItem(<NavLink to='certificates' className='header__link'>Sertifikatlar</NavLink>, '6'),
            getItem(<NavLink to='normative' className='header__link'>Normativ huquq hujjatlari</NavLink>, '7'),
            getItem(<NavLink to='career' className='header__link'>Martabani oshirish</NavLink>, '8'),
            getItem(<NavLink to='vacancies' className='header__link'>Bo’sh ish o’rinlari</NavLink>, '9'),
            getItem(<NavLink to='compliance' className='header__link'>Muvofiqlik</NavLink>, '10'),
            getItem(<NavLink to='youthUnion' className='header__link'>Yoshlar ittifoqi</NavLink>, '11'),
        ]),
        getItem('Tanlov va e’lonlar', 'sub2', [
            getItem(<NavLink to='contestRules' className='header__link'>Tanlov o’tkazish nizomi</NavLink>, '12'),
            getItem(<NavLink to='contests' className='header__link'>Tanlovlar</NavLink>, '13'),
        ]),
        getItem('Marketing', 'sub3', [
            getItem(<NavLink to='quality' className='header__link'>Sifat</NavLink>, '14'),
            getItem(<NavLink to='nomenclature' className='header__link'>Nomenklatura</NavLink>, '15'),
            getItem(<NavLink to='brands' className='header__link'>Avtomobil markalari</NavLink>, '16'),
            getItem(<NavLink to='sale' className='header__link'>Sotish va jo’natish</NavLink>, '17'),
            getItem(<NavLink to='goods' className='header__link'>Xalq iste’mol mollari</NavLink>, '18'),
        ]),
        getItem('Matbuot xizmati', 'sub4', [
            getItem(<NavLink to='news' className='header__link'>Yangiliklar</NavLink>, '19'),
            getItem(<NavLink to='publicOffer' className='header__link'>Biz haqimizda ommaviy oferta</NavLink>, '20'),
            getItem(<NavLink to='photogallery' className='header__link'>Fotogalereya</NavLink>, '21'),
            getItem(<NavLink to='videogallery' className='header__link'>Videogalereya</NavLink>, '22'),
        ]),
    ];

    const onClick = (e) => {
        console.log('click', e);
    };

    const [visible, setVisible] = useState(false);
    const onClose = () => {
        setVisible(false);
    };
    const showDrawer = () => {
        setVisible(true);
    };

    return (
        <header className='header'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={2} display='flex' alignItems='center'>
                        <Menu
                            className='header__menu-icon'
                            fontSize='large'
                            onClick={showDrawer}
                        />
                        <div className='header__logo'>
                            <img src='./assets/img/logo.svg' alt='logo' />
                        </div>
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
                                <small>Bizning manzil</small>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} display='flex' alignItems='center' justifyContent='space-between'>
                        <Button
                            variant='outlined'
                            sx={{
                                textTransform: 'none',
                                color: 'var(--title-color)',
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
                                    borderColor: 'var(--primary-color)',
                                    color: 'var(--title-color)'
                                }}
                            >
                                <MenuItem value='uz'>UZ</MenuItem>
                                <MenuItem value='ru'>РУ</MenuItem>
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
                    onClose={onClose}
                    visible={visible}
                    closeIcon={<CgCloseO />}
                >
                    <Menus
                        onClick={onClick}
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
