import React, { useState, useEffect, useCallback } from "react";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import Text from "../../../components/Text";
import Title from "../../../components/Title";
import Loading from "../../../components/Loading";
import "./_style.scss";
import { constestRulesUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import { API_IMG_URL } from "../../../constants";

export default function ContestRule() {

	const [contestRule, setContestRule] = useState({});
	const [loading, setLoading] = useState(false);

	const getContestRule = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(constestRulesUrl)
			.then((res) => {
				// if (res.data.success) {
				setContestRule(res.data.tanlovNizomi);
				setLoading(false);
				// }
			})
			.catch((e) => console.log("e", e))
	}, [])

	useEffect(() => {
		getContestRule()
	}, [getContestRule])

	const { title, text, img } = contestRule;

	return (
		<Stack direction="row" width="100%">
			{
				loading ? (<Loading />) : (
					<Grid container spacing={{ md: "30px", sm: "20px", xs: "10px" }}>
						<Grid item xs={12} md={6}>
							<Title>{title}</Title>
							<Text>
								<div dangerouslySetInnerHTML={{ __html: text }}></div>
							</Text>
						</Grid>
						<Grid item xs={12} md={6}>
							<img
								className="contest_banner_img"
								src={API_IMG_URL + img}
								alt="resume_img"
							/>
						</Grid>
					</Grid>
				)
			}

		</Stack>
	);
}
