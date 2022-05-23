import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Text from '../../../../components/Text'
import Title from '../../../../components/Title'
import "./style.scss";

const Resume = (props) => {
	const titleStyle = {
		fontWeight: 700,
		fontSize: '20px',
		color: 'info.main',
		marginBottom: '16px'
	}
	const largeIconStyle = {
		fontWeight: 400,
		fontSize: '30px',
		width: '80px',
		height: '80px',
		borderRadius: '50%',
		display: 'grid',
		placeItems: 'center',
		backgroundColor: 'primary.light',
		color: '#fff',
	}
	return (
		<Stack className='resume' direction='row' spacing={2} mb={2}>
			<Stack>
				<Typography sx={largeIconStyle}>{props.number}</Typography>
			</Stack>
			<Stack direction='column'>
				<Typography sx={titleStyle}>{props.title}</Typography>
				<Text>
					{props.text}
					{props.docSize && (props.docSize)}
				</Text>
				{props.doc &&
					<Button
						className='btn-compliance'
						variant='outlined'
						sx={{
							textTransform: "none",
							alignSelf: 'flex-start',
							color: 'secondary.main',
							borderColor: 'border.main'
						}}
					>
						{props.doc}
					</Button>
				}
			</Stack>
		</Stack>
	);
}

export default Resume;
