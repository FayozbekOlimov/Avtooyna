import { blue } from '@mui/material/colors'
import { IconButton, styled } from '@mui/material';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'


const ArrowBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[600]),
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: blue[700],
  },
  width: '32px',
  height: '32px'
}));

const ArrowButton = (props) => {
  const { ref, arrowName } = props;
  let icon = arrowName === "left" ? <RiArrowLeftSLine /> : <RiArrowRightSLine />

  return (
    <ArrowBtn ref={ref}>
      {icon}
    </ArrowBtn>
  )
}

export default ArrowButton;