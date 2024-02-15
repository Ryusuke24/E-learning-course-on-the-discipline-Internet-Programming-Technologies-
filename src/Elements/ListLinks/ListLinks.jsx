import { NavLink } from "react-router-dom";
import style from "./ListLinks.module.scss";
import { Title } from "../Title/Title";

const setActive = ({ isActive }) =>
  isActive ? style.activeNavigateLink : style.navigateLink;

export const ListLinks = ({ title, elems }) => (
  <ul className={style.list}>
    <Title>{title}</Title>
    {elems.map((elem, index) => (
      <li key={index}>
        <NavLink to={elem.to} className={setActive}>
          {elem.text}
        </NavLink>
      </li>
    ))}
  </ul>
);
