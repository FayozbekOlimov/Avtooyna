import React, { useState, useEffect, useCallback } from 'react';
import { Stack, Grid, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import VacanciesCard from './VacanciesCard';
import Title from "../../../components/Title"
import { vacanciesUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { useT } from "../../../custom/hooks/useT";
import { API_IMG_URL } from '../../../constants';
import './style.scss';
import Fancybox from '../../../components/Fancybox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaginationRounded from '../../../components/PaginationRounded';

const Vacancies = () => {
	const { t, lang } = useT();
	const [vacancies, setVacancies] = useState({});
	const [announcment, setAnnouncment] = useState({});
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	const [expanded, setExpanded] = useState(false);
	const handleAccChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleChange = (event, value) => {
		setPage(value);
	};

	const getVacancies = useCallback(() => {
		setLoading(true);
		baseAPI.fetchWithPagination({ url: vacanciesUrl, page })
			.then((res) => {
				if (res.data.success) {
					setVacancies(res.data.data);
					setAnnouncment(res.data.datas);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))
	}, [page])

	useEffect(() => {
		getVacancies()
	}, [getVacancies])

	const { items = [], _meta = {} } = announcment;

	return (
		<Stack className="jobs_wrapper">
			<Title>
				{t(`vacancies.${lang}`)}
			</Title>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<VacanciesCard
						{...vacancies}
						title={`downloadResume`}
						text={`resumeBlank`}
						number={1}
					/>
					<VacanciesCard
						title={`fillResume`}
						text={`downloadedResumeFill`}
						number={2}
					/>
					<VacanciesCard
						title={`sendToUs`}
						text={`filledResumeSend`}
						number={3}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Fancybox>
						<div className='resume_img'>
							<a href={API_IMG_URL + vacancies.img} data-fancybox="about-vacancies" className='fancybox-item'>
								<img
									src={API_IMG_URL + vacancies.img}
									alt="resume_img"
									width='100%'
								/>
							</a>
						</div>
					</Fancybox>
				</Grid>
				<Grid item xs={12}>
					{items.map((item) => (
						<Accordion key={item.id} expanded={expanded === `panel${item.id}`} onChange={handleAccChange(`panel${item.id}`)}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`panel${item.id}bh-content`}
								id={`panel${item.id}bh-header`}
								sx={{
									alignItems: 'center',
									'& .MuiAccordionSummary-content': {
										display: 'flex',
										alignItems: 'flex-start',
										flexDirection: {
											xs: 'column',
											lg: 'row'
										}
									}
								}}
							>
								<Typography
									className="card__date"
									sx={{
										width: { xs: '100%', lg: '20%' },
										flexShrink: 1,
										marginBottom: { xs: '8px', lg: '0' }
									}}
								>
									<img src="/assets/icon/calendar.png" alt="calendar-icon" />
									{item.date}
								</Typography>
								<Typography sx={{ color: 'info.main', flex: 1 }}>
									{item.title}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography color='info.light' component='div'>
									<div dangerouslySetInnerHTML={{ __html: item.text }} />
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
					{_meta.pageCount > 1 && (
						<PaginationRounded handleChange={handleChange} count={_meta.pageCount} page={page} />
					)}
				</Grid>
			</Grid>
		</Stack>
	);
}

export default Vacancies;
