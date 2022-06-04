import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.info.main,
    fontSize: '26px',
    [theme.breakpoints.up('sm')]: {
        fontSize: '30px',
    }
}))

export default function StyledCustomization(props) {
    return <Title className={props.className} variant="h5" mb={2} component={'div'}>{props.children}</Title>
}