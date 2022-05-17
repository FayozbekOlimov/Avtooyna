import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { theme } from "../../static/theme";
import "./style.scss";
import headerMenu from "../../layout/Header/headerMenu.json";

const Sidebar = (props) => {
  const { sidebarMenuIndex } = props;

  const activeStyle = {
    color: theme.palette.primary.main,
    fontWeight: 600,
  };

  const navStyle = {
    padding: theme.spacing(0.5),
    fontWeight: 400,
    fontSize: "16px",
    color: "#6E7E8B",
  };

  const ulStyle = {
    width: "100%",
    backgroundColor: "#F2F9FF",
    borderRadius: "8px",
    padding: theme.spacing(2),
  };

  const items = headerMenu[sidebarMenuIndex];

  return (
    <Stack direction="column" component="ul" style={ulStyle}>
      {items.submenu.map((item, ind) => (
        <Stack key={ind} component="li">
          <NavLink
            to={`${items.to}${item.to}`}
            style={({ isActive }) => ({
              ...navStyle,
              ...(isActive ? activeStyle : undefined),
            })}
          >
            {" "}
            {item.text}
          </NavLink>
        </Stack>
      ))}
    </Stack>
  );
};

export default Sidebar;
