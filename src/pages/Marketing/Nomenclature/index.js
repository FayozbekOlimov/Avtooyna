import React, { useCallback, useState, useEffect } from 'react';
import { Grid, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import Title from "../../../components/Title";
import Loading from "../../../components/Loading";
import { nomenData } from './nomeData';
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import baseAPI from '../../../api/baseAPI';
import { nomenclatureUrl } from '../../../api/apiUrls';
import { useT } from '../../../custom/hooks/useT';
import { API_IMG_URL } from '../../../constants';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.background.iconBg,
		color: "#728193",
		fontSize: '16px'
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		color: "#011223",
	},
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(tr, name, model, number, img) {
	return { tr, name, model, number, img };
}

const rows = [];

nomenData.map(({ tr, name, model, number, img }) => {
	rows.push(createData(tr, name, model, number, <img src={img} />))
})

const Nomenclature = () => {
	const { t, lang } = useT();
	const [nomenclature, setNomenclature] = useState({});
	const [loading, setLoading] = useState(false);

	const getNomenclature = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(nomenclatureUrl)
			.then((res) => {
				if (res.data.success) {
					setNomenclature(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getNomenclature()
	}, [getNomenclature])

	const { imgs = [], nomenklatura = [] } = nomenclature;

	return (
		loading ? (
			<Grid item md={9} sm={6} xs={12}>
				<Loading />
			</Grid>
		) : (
			<>
				{
					imgs.map(({ id, img }) => (
						<Grid item md={3} xs={12} key={id}>
							<div className='nomen_img'>
								<img src={API_IMG_URL + img} alt={`img${id}`} width="100%" />
							</div>
						</Grid>
					))
				}
				<Grid item xs={12}>
					<Title>{t(`nomenclature.${lang}`)}</Title>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 700 }} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell>№</StyledTableCell>
									<StyledTableCell>{t(`detailName.${lang}`)}</StyledTableCell>
									<StyledTableCell>{t(`model.${lang}`)}</StyledTableCell>
									<StyledTableCell>{t(`detailNumber.${lang}`)}</StyledTableCell>
									<StyledTableCell>{t(`view.${lang}`)}</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{nomenklatura.map((row, ind) => (
									<StyledTableRow key={row.id}>
										<StyledTableCell>{ind + 1}</StyledTableCell>
										<StyledTableCell>{row.title}</StyledTableCell>
										<StyledTableCell>{row.model}</StyledTableCell>
										<StyledTableCell>{row.number}</StyledTableCell>
										<StyledTableCell><img src={API_IMG_URL + row.img} alt={row.title} /></StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</>
		));
}
export default Nomenclature;
