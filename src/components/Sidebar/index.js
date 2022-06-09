import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
// import headerMenu from "../../layout/Header/headerMenu.json";
// import trheaderMenu from "../../layout/Header/trheaderMenu.json";
// import { useT } from "../../custom/hooks/useT";
import baseAPI from "../../api/baseAPI";
import { menusUrl } from "../../api/apiUrls";

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

const Sidebar = (props) => {
	// const { t, lang } = useT();
	const { sidebarMenuIndex } = props;
	const [menus, setMenus] = useState({});

	const getMenus = useCallback(() => {
		baseAPI.fetchAll(menusUrl)
			.then((res) => {
				// if (res.data.success) {
				setMenus(res.data.menu[sidebarMenuIndex]);
				// }
			})
			.catch((e) => console.log("e", e))

	}, [sidebarMenuIndex])

	useEffect(() => {
		getMenus();
	}, [getMenus])

	// const items = trheaderMenu[sidebarMenuIndex];
	const { subMenus = [] } = menus;
	return (
		<Stack direction="column" component="ul" style={ulStyle} bgcolor="background.navBg" alignItems="flex-start">
			{subMenus.map((item) => (
				<Stack key={item.key} component="li" sx={{ color: 'secondary.light' }}>
					<NavLink
						to={`${menus.to}${item.to}`}
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
