import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Text from '../../../../components/Text';
import { useT } from '../../../../custom/hooks/useT';
import { API_IMG_URL } from '../../../../constants';

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

const VacanciesCard = (props) => {
	const { t, lang } = useT();
	const { title, text, number, file, size } = props;

	return (
		<Stack className='resume' direction='row' spacing={2} mb={2}>
			<Stack>
				<Typography sx={largeIconStyle}>{number}</Typography>
			</Stack>
			<Stack direction='column'>
				<Typography sx={titleStyle}>{t(`${title}.${lang}`)}</Typography>
				<Text>
					{t(`${text}.${lang}`)} {size && ({ size })}
				</Text>
				{file &&
					(
						<a href={API_IMG_URL + file} target="_blank" rel="noopener noreferrer">
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
								{t(`download.${lang}`)}
							</Button>
						</a>
					)
				}
			</Stack>
		</Stack>
	);
}

export default VacanciesCard;
