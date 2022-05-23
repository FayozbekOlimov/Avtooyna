import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import headerMenu from "../../layout/Header/headerMenu.json";
import "./style.scss";

const Sidebar = (props) => {
	const { sidebarMenuIndex } = props;

	const activeStyle = {
		color: '#00468D',
		fontWeight: 600,
	};

	const navStyle = {
		padding: '8px',
		fontWeight: 400,
		fontSize: "16px",
		color: 'inherit'
	};

	const ulStyle = {
		width: "100%",
		borderRadius: "8px",
		padding: '16px',
	};

	const items = headerMenu[sidebarMenuIndex];

	return (
		<Stack direction="column" component="ul" style={ulStyle} bgcolor="background.navBg">
			{items.submenu.map((item, ind) => (
				<Stack key={ind} component="li" sx={{color: 'secondary.light'}}>
					<NavLink
						to={`${items.to}${item.to}`}
						style={({ isActive }) => ({
							...navStyle,
							...(isActive ? activeStyle : null),
						})}
					>
						{item.text}
					</NavLink>
				</Stack>
			))}
		</Stack>
	);
};

export default Sidebar;
