import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

const setActive = ({ isActive }) =>
  isActive ? style.activeNavigateLink : style.navigateLink;

function Navigation() {
  return (
    <nav className={style.navigationBlock}>
      <NavLink to={"/"} className={setActive}>
        Главная
      </NavLink>
      <NavLink to={"courses"} className={setActive}>
        Учебные темы
      </NavLink>
      <NavLink to={"AdvanceCourses"} className={setActive}>
        Дополнительные курсы
      </NavLink>
      <NavLink to={"about"} className={setActive}>
        О нас
      </NavLink>
    </nav>
  );
}

export default Navigation;
