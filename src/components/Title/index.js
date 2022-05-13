import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: 'var(--title-color)',
    fontSize: '26px',
    [theme.breakpoints.up('sm')]: {
        fontSize: '30px',
    }
}))

export default function StyledCustomization({children}) {
    return <Title variant="h5" mb={2}>{children}</Title>
}