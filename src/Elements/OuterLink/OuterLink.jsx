import { Link } from "react-router-dom";
import style from "./OuterLink.module.scss";

export const OuterLink = ({ to, children }) => {
  return (
    <Link className={style.defaultLink} target="_blank" to={to}>
      {children}
    </Link>
  );
};
