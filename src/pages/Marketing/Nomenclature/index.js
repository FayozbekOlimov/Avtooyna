import React from 'react';
import { Grid, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import Title from "../../../components/Title";
import { nomenData } from './nomeData';
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const nomenImg = [
	{
		id: 1,
		img: "/assets/img/namenImg1.png"
	},
	{
		id: 2,
		img: "/assets/img/namenImg1.png"
	},
	{
		id: 3,
		img: "/assets/img/namenImg1.png"
	},
]

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
	return (
		<>
			{nomenImg.map(({ id, img }, ind) => (
				<Grid item md={3} xs={12} key={ind}>
					<div className='nomen_img'>
						<img src={img} alt={`img${id}`} width="100%" />
					</div>
				</Grid>
			))}
			<Grid item xs={12}>
				<Title>Nomenklatura</Title>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>№</StyledTableCell>
								<StyledTableCell>Detal nomi</StyledTableCell>
								<StyledTableCell>Model</StyledTableCell>
								<StyledTableCell>Detal raqami</StyledTableCell>
								<StyledTableCell>Ko'rinishi</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, ind) => (
								<StyledTableRow key={ind}>
									<StyledTableCell>{row.tr}</StyledTableCell>
									<StyledTableCell>{row.name}</StyledTableCell>
									<StyledTableCell>{row.model}</StyledTableCell>
									<StyledTableCell>{row.number}</StyledTableCell>
									<StyledTableCell>{row.img}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</>
		);
}

		export default Nomenclature;
