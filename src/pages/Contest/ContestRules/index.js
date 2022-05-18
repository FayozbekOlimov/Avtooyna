import React from "react";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import Text from "../../../components/Text";
import Title from "../../../components/Title";
import "./_style.scss";

export default function ContestRules() {
	return (
		<Stack direction="row" width="100%">
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Title>Tanlov o'tkazish nizomi</Title>
					<Text>
						Barcha tijorat takliflari qat'iyan
						<a
							href="mailto:name@email.com"
							className="contest_email_link"
						>
							offers@avtooyna.uz
						</a>
						elektron pochta manziliga yuborilishi shart. * Boshqa
						manzillarga yuborilgan tijorat takliflar bekor hisoblanadi
					</Text>
				</Grid>
				<Grid item xs={12} md={6}>
					<img
						className="contest_banner_img"
						src="/assets/img/resume_img.png"
						alt="resume_img"
					/>
				</Grid>
			</Grid>
		</Stack>
	);
}
