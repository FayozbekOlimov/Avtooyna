import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";
import Text from "../../../components/Text";
import { Link } from "react-router-dom";
import "./style.scss";
import { API_IMG_URL } from "../../../constants";

const Card = ({ id, img, date, title, text, content, toUrl }) => {
	return (
		<Stack className="card" bgcolor='background.default'>
			<Stack className="card__img">
				<img src={API_IMG_URL + img} alt={`card-${id}`} />
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
				><div dangerouslySetInnerHTML={{ __html: title }}></div></Typography>
				{
					content && (<Text className="card__text"><div dangerouslySetInnerHTML={{ __html: text }}></div></Text>)
				}
				<Link to={`/${toUrl}/:${id}`}>
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
