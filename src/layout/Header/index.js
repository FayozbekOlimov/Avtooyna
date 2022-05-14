import React from 'react'
import { ExpandMore, FmdGood, Menu, PhoneEnabled, RemoveRedEye } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, SwipeableDrawer } from '@mui/material';
import { BsMailbox as MailIcon, BsInbox as InboxIcon } from 'react-icons/bs'
// import Button from '../../components/Button'
import './style.css'
import { theme } from '../../static/theme';
import { useT } from "../../custom/hooks/useT";
import { changeLang, setLang } from '../../helper';


const Header = () => {

    const { t, lang } = useT();
    let langs = [{ 1: "UZ", 2: "uz" }, { 1: "РУ", 2: "ru" }, { 1: "EN", 2: "en" }];


    const handleChange = (event) => {
        setLang(event.target.value);
        changeLang(event.target.value);
        window.location.reload();
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );
    return (
        <header className='header'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item sm={2} display='flex' alignItems='center'>
                        <Menu className='header__menu-icon' fontSize='large' />
                        <div className='header__logo'>
                            <img src='./assets/img/logo.svg' alt='logo' />
                        </div>
                    </Grid>
                    <Grid item sm={6} display='flex' justifyContent='space-evenly'>
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
                    <Grid item sm={4} display='flex' alignItems='center' justifyContent='space-between'>
                        <Button
                            variant='outlined'
                            sx={{ textTransform: 'none', color: 'var(--title-color)' }}>Konsultatsiya olish
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
                                    width: '80px',
                                    borderColor: 'var(--primary-color)',
                                    color: 'var(--title-color)'
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
                {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))} */}
            </div>
        </header>
    )
}

export default Header
