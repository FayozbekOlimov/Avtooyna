import React from "react";
import { Button } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";
import Text from "../../../components/Text";
import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ id, src, date, title, text, toUrl, content = true }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={src} alt={`card-${id}`} />
      </div>
      <div className="card__content">
        <p className="card__date">
          <img src="/assets/icon/calendar.png" alt="calendar-icon" />
          {date}
        </p>
        <h5 className="card__title">{title}</h5>
        {content && <Text>{text}</Text>}
        <Link to={toUrl}>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize" }}
            endIcon={<RiArrowRightSLine />}
          >
            Batafsil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
