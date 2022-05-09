import { styled, Button as Btn } from "@mui/material";

const Button = styled(Btn)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '16px',
    textTransform: 'capitalize',
    padding: '6px 16px',
    marginBottom: '8px',
    [theme.breakpoints.up('sm')]: {
        padding: '8px 22px',
    },
    backgroundColor: theme.palette.primary.main,
}))

export default function StyledCustomization({children}) {
    return <Button variant='contained'>{children}</Button>
}