import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import { Button, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import "./_style.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#ECF2F9",
		color: "#728193",
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		// backgroundColor: theme.palette.action.hover,
		color: "#011223",
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Труба пластиковая  Д=40", "Метр", 50),
	createData("Труба пластиковая  Д=40", "Метр", 50),
	createData("Труба пластиковая  Д=40", "Метр", 500),
	createData("Труба пластиковая  Д=40", "Метр", 50),
	createData("Труба пластиковая  Д=40", "Метр", 500),
];

export default function InsideContest() {
	let { contest_id } = useParams();
	const navigate = useNavigate();

	return (
		<Stack direction='column' bgcolor='background.paper'>
			<div className="container">
				<Button
					variant="outlined"
					sx={{
						textTransform: "none",
						alignSelf: 'flex-start',
						my: 1.5,
						color: 'secondary.main',
						borderColor: 'border.main'
					}}
					startIcon={<ArrowBack />}
					className="inside_contest_back_btn"
					onClick={() => navigate(-1)}
				>
					Orqaga qaytish
				</Button>
				<Title>
					Объявляется конкурс на поставку сантехнические материалы для нужд ООО
					"Автоойна"
				</Title>
				<p className="card__date">
					<img src="/assets/icon/calendar.png" alt="calendar-icon" />6 may 2022
				</p>
				<Text>
					Объявляется конкурс на поставку сантехнические материалы для нужд ООО
					"Автоойна" 19.04.2021 09:00
				</Text>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Наименование</StyledTableCell>
								<StyledTableCell align="right">Ед.изм.</StyledTableCell>
								<StyledTableCell align="right">Кол.</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, ind) => (
								<StyledTableRow key={ind}>
									<StyledTableCell component="th" scope="row">
										{row.name}
									</StyledTableCell>
									<StyledTableCell align="right">
										{row.calories}
									</StyledTableCell>
									<StyledTableCell align="right">{row.fat}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<Text>
					<b className="inside_contest_footer_text">
						{" "}
						Дата окончания подачи коммерческих предложений 21.04.2021 г 18:00
					</b>{" "}
					<br />
					Все Коммерческие предложения отправлять строго по электронному адресу
					offers@avtooyna.uz Отправленные коммерческие предложение по другим
					адресам считаются не действительны.
				</Text>
			</div>
		</Stack>
	);
}
