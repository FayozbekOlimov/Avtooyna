import React from 'react'
import { ChevronRight, ExpandMore, FmdGood, HighlightOff, HighlightOffOutlined, InputOutlined, Menu, PhoneEnabled, RemoveRedEye } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Modal, Select, SwipeableDrawer } from '@mui/material';
import { BsMailbox as MailIcon, BsInbox as InboxIcon } from 'react-icons/bs'
// import Button from '../../components/Button'
import Title from '../../components/Title'
import './style.css'
import { theme } from '../../static/theme';

const Header = () => {
    const [lang, setLang] = React.useState('uz');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    return (
        <header className='header'>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={2} display='flex' alignItems='center'>
                        <Menu
                            className='header__menu-icon'
                            fontSize='large'
                            onClick={() => setIsDrawerOpen(true)}
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
                <SwipeableDrawer
                    anchor='left'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    onOpen={() => setIsDrawerOpen(true)}
                >
                    <Box width={220} height={320} role="presentation">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>MENU</ListItemText>
                                    <HighlightOff onClick={() => setIsDrawerOpen(false)} />
                                </ListItemButton>
                            </ListItem>
                            {['Biz haqimizda', 'Tanlov va e\'lonlar', 'Marketing', 'Matbuot xizmati'].map((text) => (
                                <ListItem key={text} disablePadding sx={{
                                    '&:hover': {
                                        backgroundColor: '#EBF4FD'
                                    }
                                }}>
                                    <ListItemButton>
                                        <ListItemText primary={text} />
                                        <ChevronRight />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </SwipeableDrawer>
            </div>
        </header>
    )
}

export default Header
