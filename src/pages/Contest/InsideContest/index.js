import React, { useState, useEffect, useCallback } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import Loading from "../../../components/Loading";
import { Button, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useT } from "../../../custom/hooks/useT";
import baseAPI from "../../../api/baseAPI";
import { contestsDetailUrl } from "../../../api/apiUrls";
import "./_style.scss";

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

function createData(tr, name, calories, fat) {
	return { tr, name, calories, fat };
}

const rows = [
	createData(1, "Труба пластиковая  Д=40", "Метр", 50),
	createData(2, "Труба пластиковая  Д=40", "Метр", 50),
	createData(3, "Труба пластиковая  Д=40", "Метр", 500),
	createData(4, "Труба пластиковая  Д=40", "Метр", 50),
	createData(5, "Труба пластиковая  Д=40", "Метр", 500),
];

export default function InsideContest() {
	const { t, lang } = useT();
	let { contest_id } = useParams();
	contest_id = contest_id.slice(1);
	const navigate = useNavigate();

	const [oneContest, setOneContest] = useState([]);
	const [loading, setLoading] = useState(false);

	const getOneContest = useCallback(() => {
		setLoading(true);
		baseAPI.find(contest_id, contestsDetailUrl)
			.then((res) => {
				if (res.data.success) {
					setOneContest(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))
	}, [contest_id])

	useEffect(() => {
		getOneContest()
	}, [getOneContest])

	const { title, text, date, items = [] } = oneContest;

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
					{t(`back.${lang}`)}
				</Button>

				{
					loading ? (
						<Loading />
					) : (
						<>
							<Title>
								{title}
							</Title>
							<p className="card__date">
								<img src="/assets/icon/calendar.png" alt="calendar-icon" />{date}
							</p>
							<Text>
								<div dangerouslySetInnerHTML={{ __html: text }}></div>
							</Text>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 700 }} aria-label="customized table">
									<TableHead>
										<TableRow>
											<StyledTableCell>№</StyledTableCell>
											<StyledTableCell>Наименование</StyledTableCell>
											<StyledTableCell align="right">Ед.изм.</StyledTableCell>
											<StyledTableCell align="right">Кол.</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{items.map((row, ind) => (
											<StyledTableRow key={ind}>
												<StyledTableCell>
													{ind + 1}
												</StyledTableCell>
												<StyledTableCell>
													{row.title}
												</StyledTableCell>
												<StyledTableCell align="right">
													{row.single}
												</StyledTableCell>
												<StyledTableCell align="right">
													{row.value}
												</StyledTableCell>
											</StyledTableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
							{/* <Text>
								<b className="inside_contest_footer_text">
									Дата окончания подачи коммерческих предложений 21.04.2021 г 18:00
								</b>
								<br />
								Все Коммерческие предложения отправлять строго по электронному адресу
								offers@avtooyna.uz Отправленные коммерческие предложение по другим
								адресам считаются не действительны.
							</Text> */}
						</>
					)
				}
			</div>
		</Stack>
	);
}
