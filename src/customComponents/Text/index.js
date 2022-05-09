import { styled, Typography } from "@mui/material";

const Text = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    color: theme.palette.textColor.main,
    fontSize: '16px',
}))

export default function StyledCustomization({children}) {
    return <Text variant="body1" mb={2}>{children}</Text>
}