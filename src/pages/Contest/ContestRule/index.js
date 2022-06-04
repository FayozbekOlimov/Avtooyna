import React, { useState, useEffect, useCallback } from "react";
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
				if (res.data.success) {
					setContestRule(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => alert(e))
	}, [])

	useEffect(() => {
		getContestRule()
	}, [getContestRule])

	const { title, text, img } = contestRule;

	return (
		loading ? (<Loading />) : (
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Title>{title}</Title>
					<Text>
						<span dangerouslySetInnerHTML={{ __html: text }}></span>
					</Text>
				</Grid>
				<Grid item xs={12} md={6}>
					<div className="contest_banner_img">
						<img
							src={API_IMG_URL + img}
							alt="resume_img"
						/>
					</div>
				</Grid>
			</Grid>
		)
	);
}
