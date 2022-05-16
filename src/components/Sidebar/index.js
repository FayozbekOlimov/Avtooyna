import { Stack } from '@mui/material';
import { Menu } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { theme } from '../../static/theme'
import './style.scss';

const Sidebar = () => {
    // const sidebarLinksStyle = {
    //     width: '100%',
    //     backgroundColor: theme.palette.primary.navBg,
    // }

    // const activeStyle = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? 'bold' : 'normal',
    //         textDecoration: isActive ? 'none' : 'underline',
    //     }
    // };

    // const items = [
    //     {
    //         to: "/",
    //         link: "about",
    //     },
    //     {
    //         to: "/",
    //         link: "about",
    //     },
    //     {
    //         to: "/",
    //         link: "about",
    //     },
    // ]

    return (
        <Stack direction='column' component='ul' style={sidebarLinksStyle}>
            {/* {items.map((item, ind) => (
                <Stack key={ind} component='li'>
                    <NavLink to={item.to} style={activeStyle}>
                        {item.link}
                    </NavLink>
                </Stack>
            ))} */}
        </Stack>
    )
}

export default Sidebar