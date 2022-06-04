import React from 'react'
import { Fab, Link } from '@mui/material'
import { Phone, PhoneEnabled } from '@mui/icons-material'

const PhoneButton = () => {
    const style = {
        // margin: 0,
        // top: 'auto',
        right: 30,
        bottom: 30,
        // left: 'auto',
        position: 'fixed',
        '&:hover *': {
            color: '#fff',
        }
    };
    return (
        <Fab size='large' sx={style} color='primary'>
            <Link href='tel:+998935697522' color='#fff' sx={{ display: "grid", placeItems: "center", width: "100%" }}>
                <PhoneEnabled />
            </Link>
        </Fab>
    )
}

export default PhoneButton