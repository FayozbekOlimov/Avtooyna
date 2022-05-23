import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";
import Text from "../../../components/Text";
import { Link } from "react-router-dom";
import "./style.scss";

const Card = ({ id, src, date, title, text, toUrl, content = true }) => {
	return (
		<Stack className="card" bgcolor='background.default'>
			<Stack className="card__img">
				<img src={src} alt={`card-${id}`} />
			</Stack>
			<Stack className="card__content" direction='column'>
				<p className="card__date">
					<img src="/assets/icon/calendar.png" alt="calendar-icon" />
					{date}
				</p>
				<Typography
					sx={{
						color: 'info.main',
						fontSize: '20px',
						fontWeight: 700,
						marginBottom: '16px'
					}}
					className="card__title"
				>{title}</Typography>
				{content && <Text className="card__text">{text}</Text>}
				<Link to={toUrl}>
					<Button
						variant="text"
						sx={{ textTransform: "capitalize", color: "primary.light" }}
						endIcon={<RiArrowRightSLine />}
					>
						Batafsil
					</Button>
				</Link>
			</Stack>
		</Stack>
	);
};

export default Card;
