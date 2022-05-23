import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Grid, Stack } from "@mui/material";

const About = () => {
	return (
		<Stack direction="row" py={2}>
			<div className="container">
				<Grid container spacing={{ md: "30px", sm: "20px", xs: "10px" }}>
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
