import { styled, Typography } from "@mui/material";

const Text = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    color: theme.palette.info.light,
    fontSize: '16px',
}))

export default function StyledCustomization(props) {
    return <Text className={props.className} variant="body1" mb={2}>{props.children}</Text>
}