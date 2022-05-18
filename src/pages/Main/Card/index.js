import React from "react";
import { Button } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";
import Text from "../../../components/Text";
import "./style.css";

const Card = ({ id, src, date, title, text, content = true }) => {
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
        <Button
          variant="text"
          sx={{ textTransform: "capitalize" }}
          endIcon={<RiArrowRightSLine />}
        >
          Batafsil
        </Button>
      </div>
    </div>
  );
};

export default Card;
