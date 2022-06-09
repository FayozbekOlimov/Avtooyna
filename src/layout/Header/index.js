import React, { useState, useContext, useEffect, useCallback } from 'react'
import { ExpandMore, Menu as MenuIcon, RemoveRedEye } from '@mui/icons-material';
import { Button, FormControl, Grid, MenuItem, Select, Stack, Typography, Menu as MuiMenu, Divider, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { Drawer, Menu } from 'antd';
import { CgCloseO } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom';
import { useT } from "../../custom/hooks/useT";
import { changeLang, setLang } from '../../helpers';
import { ConsultContext } from "../../App";
import { ColorModeContext } from '../../static';
import { blue } from '@mui/material/colors';
import { menusUrl } from "../../api/apiUrls";
import baseAPI from "../../api/baseAPI";
import './style.scss';
import { boxStyle, modeLabelStyle, titleStyle } from './style';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const { t, lang } = useT();
    let langs = [{ 1: "UZ", 2: "uz" }, { 1: "РУ", 2: "ru" }, { 1: "EN", 2: "en" }];

    // const [tels, setTels] = useState([]);
    const [menus, setMenus] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const getTels = useCallback(() => {
    //     setLoading(true);
    //     baseAPI.fetchAll(telsUrl)
    //         .then((res) => {
    //             if (res.data.success) {
    //                 setTels(res.data.data);
    //                 setLoading(false);
    //             }
    //         })
    //         .catch((e) => console.log("e", e))
    // }, [])

    const getMenus = useCallback(() => {
        baseAPI.fetchAll(menusUrl)
            .then((res) => {
                // if (res.data.success) {
                setMenus(res.data.menu);
                // }
            })
            .catch((e) => console.log("e", e))
    }, [])

    useEffect(() => {
        getMenus();
    }, [getMenus])

    const handleChange = (event) => {
        setLang(event.target.value);
        changeLang(event.target.value);
        window.location.reload();
    };

    function getItem(label, key, children) {
        return { key, children, label };
    }

    const items = menus.map((menu) => (
        getItem(menu.menuName, menu.id, menu.subMenus.map((sub) => (
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

    // const rootSubmenuKeys = menus.map(menu => menu.id);
    // const [openKeys, setOpenKeys] = useState([]);
    // const onOpenChange = (keys) => {
    //     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    //     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //         setOpenKeys(keys);
    //     } else {
    //         setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    //     }
    // };

    const { mode, setMode } = useContext(ColorModeContext);
    const { onOpenConsultModal } = useContext(ConsultContext);

    // const [value, setValue] = useState(0);
    // const handleChangeSlider = (e) => {
    //     setValue(e.target.value)
    // }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeMode = (e) => {
        let newMode = JSON.parse(localStorage.getItem('mode'));
        if (e.target.value === 'gray') {
            setMode(prev => ({ ...prev, color: 'light' }));
            document.body.style.filter = 'grayscale(1)';
            newMode = { ...newMode, color: 'gray' };
        } else {
            document.body.style.filter = 'grayscale(0)';
            setMode(prev => ({ ...prev, color: e.target.value }));
            newMode = { ...newMode, color: e.target.value };
        }
        localStorage.setItem("mode", JSON.stringify(newMode));
    }

    return (
        <Stack className='header' bgcolor='background.default'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} lg={2} display='flex' alignItems='center' justifyContent="space-between">
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <MenuIcon
                                sx={{
                                    color: 'secondary.main',
                                    mr: 1,
                                    cursor: 'pointer',
                                    display: { xs: 'block', lg: 'none' }
                                }}
                                className='header__menu-icon'
                                fontSize='large'
                                onClick={() => setVisible(true)}
                            />
                            <Link to='/' className='header__logo'>
                                <img src={mode['color'] === 'dark' ? '/assets/img/logo.png' : '/assets/img/logo.svg'} alt='logo' />
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
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
                        </Box>
                    </Grid>
                    <Grid item xs={0} lg={6}
                        display={{ xs: "none", lg: "flex" }}
                        justifyContent='space-evenly'
                    >
                        <Menu
                            style={{
                                width: '100%',
                                backgroundColor: "transparent",
                                color: mode['color'] === 'dark' ? '#fff' : '#000',
                            }}
                            mode="horizontal"
                            items={items}
                        // openKeys={openKeys}
                        // onOpenChange={onOpenChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} lg={4} display="flex" alignItems='center' justifyContent='space-between'>
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
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
                        </Box>
                        <Button
                            variant='contained'
                            className='header__mode'
                            size='medium'
                            onClick={handleClick}
                            sx={{
                                bgcolor: 'primary.light',
                                '&:hover': {
                                    bgcolor: blue[800]
                                }
                            }}
                            aria-controls={open ? 'mode-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <RemoveRedEye />
                        </Button>
                    </Grid>
                    <MuiMenu
                        anchorEl={anchorEl}
                        id="mode-menu"
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: { xs: '10%', xl: '43%' },
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        sx={{ py: 0 }}
                        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    >
                        <Box px={2} py={1}>
                            <Typography sx={titleStyle} mb={1}>Ko'rinishi</Typography>
                            <Divider />
                            <RadioGroup
                                row
                                aria-labelledby="demo-form-control-label-placement"
                                name="position"
                                defaultValue={JSON.parse(localStorage.getItem('mode')) ? JSON.parse(localStorage.getItem('mode'))['color'] : 'light'}
                                sx={{ my: 1 }}
                                onChange={changeMode}
                            >
                                <FormControlLabel
                                    value={"light"}
                                    control={<Radio
                                        size='small'
                                        sx={{ p: 0.5 }}
                                    />}
                                    label={
                                        <>
                                            <Box bgcolor='#00468D' sx={boxStyle} />
                                            <Typography sx={modeLabelStyle}>Normal</Typography>
                                        </>
                                    }
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value={"gray"}
                                    control={<Radio
                                        size='small'
                                        sx={{ p: 0.5 }}
                                    />}
                                    label={
                                        <>
                                            <Box bgcolor='#C4C4C4' sx={boxStyle} />
                                            <Typography sx={modeLabelStyle}>Gray</Typography>
                                        </>
                                    }
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value={"dark"}
                                    control={<Radio
                                        size='small'
                                        sx={{ p: 0.5 }}
                                    />}
                                    label={
                                        <>
                                            <Box bgcolor='#021B34' sx={boxStyle} />
                                            <Typography sx={modeLabelStyle}>Dark</Typography>
                                        </>
                                    }
                                    labelPlacement="top"
                                />
                            </RadioGroup>
                        </Box>
                    </MuiMenu>
                </Grid>
                <Drawer
                    title={t(`menu.${lang}`)}
                    placement='left'
                    width={256}
                    onClose={() => setVisible(false)}
                    visible={visible}
                    closeIcon={<CgCloseO />}
                >
                    <Menu
                        style={{ width: '100%' }}
                        mode="inline"
                        items={items}
                    // openKeys={openKeys}
                    // onOpenChange={onOpenChange}
                    />
                </Drawer>
            </div>
        </Stack>
    )
}

export default Header