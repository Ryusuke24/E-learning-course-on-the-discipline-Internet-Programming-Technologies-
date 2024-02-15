import { Link } from "react-router-dom";
import leftButtonSVG from "./LeftButton.svg";
import rightButtonSVG from "./RightButton.svg";
import style from "./PaginationBlock.module.scss";

export const PaginationBlock = ({ to, back }) => {
  return (
    <section className={style.paginationBlock}>
      <Link to={back}>
        <img src={leftButtonSVG} alt="Back" />
      </Link>
      <Link to={to}>
        <img src={rightButtonSVG} alt="Forward" />
      </Link>
    </section>
  );
};
