import React, { useState, useContext, useEffect, useCallback } from 'react'
import { ExpandMore, FmdGood, Menu as MenuIcon, PhoneEnabled, RadioButtonChecked, RadioButtonUnchecked, RemoveRedEye } from '@mui/icons-material';
import { Button, FormControl, Grid, MenuItem, Select, Stack, Link as TelLink, Typography, Menu as MuiMenu, Divider, RadioGroup, FormControlLabel, Radio, Box, FormGroup, Checkbox } from '@mui/material';
import { Drawer, Menu } from 'antd';
import { CgCloseO } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom';
import { useT } from "../../custom/hooks/useT";
import { changeLang, getIsImage, setIsImage, setLang } from '../../helpers';
import { ConsultContext } from "../../App";
import { ColorModeContext } from '../../static';
import { blue } from '@mui/material/colors';
import { menusUrl, telsUrl } from "../../api/apiUrls";
import baseAPI from "../../api/baseAPI";
import './style.scss';


const Header = () => {
    const [isImg, setIsImg] = useState(Boolean(getIsImage()));
    const [visible, setVisible] = useState(false);
    const { t, lang } = useT();
    let langs = [{ 1: "UZ", 2: "uz" }, { 1: "РУ", 2: "ru" }, { 1: "EN", 2: "en" }];

    const [tels, setTels] = useState([]);
    const [menus, setMenus] = useState([]);
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
        getTels();
        getMenus();
    }, [getTels, getMenus])

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
                sub.id)
        )))
    ))

    const { mode, setMode } = useContext(ColorModeContext);
    const { onOpenConsultModal } = useContext(ConsultContext);

    const [value, setValue] = useState(0);
    const handleChangeSlider = (e) => {
        setValue(e.target.value)
    }

    const boxStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '8px',
        display: 'grid',
        placeItems: 'center',
        margin: 'auto'
    };

    const modeLabelStyle = {
        margin: '4px 0',
        textAlign: 'center',
        fontSize: '12px',
        color: 'info.light',
        fontWeight: 500
    }

    const titleStyle = {
        fontSize: '18px',
        color: 'info.main',
        fontWeight: 500
    }

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
            newMode = { ...newMode, color: 'light' };
        } else {
            document.body.style.filter = 'grayscale(0)';
            setMode(prev => ({ ...prev, color: e.target.value }));
            newMode = { ...newMode, color: e.target.value };
        }
        localStorage.setItem("mode", JSON.stringify(newMode));
    }

    // useEffect(() => {
    //     setIsImage(isImg);
    // }, [isImg])

    // const toggleIsImage = (e) => {
    //     setIsImg(e.target.checked);
    //     if (!isImg) {
    //         Array.from(document.images).forEach(img => {
    //             img.style.display = 'none';
    //         })
    //     } else {
    //         Array.from(document.images).forEach(img => {
    //             img.style.display = 'block';
    //         })
    //     }
    // }

    return (
        <Stack className='header' bgcolor='background.default'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={2} display='flex' alignItems='center' justifyContent={"space-between"}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <MenuIcon
                                sx={{ color: 'secondary.main', mr: 1, cursor: 'pointer' }}
                                className='header__menu-icon'
                                fontSize='large'
                                onClick={() => setVisible(true)}
                            />
                            <Link to='/' className='header__logo'>
                                <img src={mode['color'] === 'light' ? '/assets/img/logo.svg' : '/assets/img/logo.png'} alt='logo' />
                            </Link>
                        </Box>
                        <Box sx={{ display: { md: "block", lg: "none", xl: "none" } }}>
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
                    <Box component={Grid} item xs={12} lg={6} sx={{
                        display: {
                            xs: "none", lg: "flex", xl: "flex"
                        }
                    }}
                        justifyContent='space-evenly'
                    >
                        <div className='header__tel'>
                            <Stack className='header__tel-icon' sx={{ bgcolor: 'background.iconBg' }}>
                                <PhoneEnabled sx={{ color: 'primary.main' }} />
                            </Stack>
                            <Stack className='header__tel-content'>
                                {
                                    tels.map((tel, ind) => (
                                        <TelLink
                                            key={ind}
                                            href={`tel:${tel.tel_namber}`}
                                            sx={{ color: 'info.light', textDecoration: 'none' }}
                                        >
                                            {tel.tel_namber}
                                        </TelLink>
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
                    <Grid item xs={12} md={12} lg={4} display="flex" alignItems='center' justifyContent='space-between'>
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
                        <Box sx={{ display: { xs: "none", lg: "block", xl: "block" } }}>
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
                            // onClose={handleClose}
                            // onMouseOver={handleClick}
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
                                    right: '33%',
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
                                {/* <FormControlLabel
                                    // disabled
                                    control={<Checkbox
                                        size='small'
                                        sx={{ p: 0.5 }}
                                        icon={<RadioButtonUnchecked />}
                                        checkedIcon={<RadioButtonChecked />}
                                    />}
                                    checked={isImg}
                                    onChange={toggleIsImage}
                                    label={
                                        <>
                                            <Box bgcolor='#C4C4C4' sx={boxStyle}>
                                                <img src='/assets/icon/no-image.png' alt="no_image" />
                                            </Box>
                                            <Typography sx={modeLabelStyle}>No image</Typography>
                                        </>
                                    }
                                    labelPlacement="top"
                                /> */}
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
                        mode="vertical"
                        items={items}
                    />
                </Drawer>
            </div>
        </Stack>
    )
}

export default Header
