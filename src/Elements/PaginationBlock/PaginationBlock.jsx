import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import leftButtonSVG from "./LeftButton.svg";
import rightButtonSVG from "./RightButton.svg";
import style from "./PaginationBlock.module.scss";

export const PaginationBlock = ({ to, back }) => {
  return (
    <section className={style.paginationBlock}>
      <Tooltip title="На предыдущую страницу">
        {" "}
        <Link to={back}>
          <img src={leftButtonSVG} alt="Back" />
        </Link>
      </Tooltip>
      <Tooltip title="На следующую страницу">
        {" "}
        <Link to={to}>
          <img src={rightButtonSVG} alt="Forward" />
        </Link>
      </Tooltip>
    </section>
  );
};
