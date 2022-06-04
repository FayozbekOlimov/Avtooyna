import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";
import Text from "../../../components/Text";
import { Link } from "react-router-dom";
import "./style.scss";
import { API_IMG_URL } from "../../../constants";
import { useT } from "../../../custom/hooks/useT";

const Card = ({ id, img, date, title, text, content, toUrl }) => {
	const { t, lang } = useT();
	const titleStyle = {
		color: 'info.main',
		fontSize: '20px',
		fontWeight: 700,
		marginBottom: '16px',
		'& *': {
			fontWeight: "inherit",
		}
	};
	return (
		<Link to={`/${toUrl}/:${id}`}>
			<Stack className="card" bgcolor='background.default'>
				<Stack className="card__img">
					<img src={API_IMG_URL + img} alt={`card-${id}`} />
				</Stack>
				<Stack className="card__content" direction='column' alignItems='flex-start'>
					<p className="card__date">
						<img src="/assets/icon/calendar.png" alt="calendar-icon" />
						{date}
					</p>
					<Typography
						sx={titleStyle}
						className="card__title"
						component={'div'}
					><div dangerouslySetInnerHTML={{ __html: title }}></div></Typography>
					{
						content && (<Text className="card__text"><span dangerouslySetInnerHTML={{ __html: text }}></span></Text>)
					}
					<Link to={`/${toUrl}/:${id}`}>
						<Button
							variant="text"
							sx={{ textTransform: "capitalize", color: "primary.light" }}
							endIcon={<RiArrowRightSLine />}
						>
							{t(`detail.${lang}`)}
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Link>
	);
};

export default Card;
