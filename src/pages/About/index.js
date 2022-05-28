import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Grid, Stack } from "@mui/material";

const About = () => {
	return (
		<Stack direction="row" py={2} bgcolor="background.paper">
			<div className="container">
				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Sidebar sidebarMenuIndex={0} />
					</Grid>
					<Grid item xs={12} md={9}>
						<Outlet />
					</Grid>
				</Grid>
			</div>
		</Stack>
	);
};

export default About;
