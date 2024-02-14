import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

function MobileNavigation({ setClick }) {
  return (
    <nav className={style.navigationBlock} onClick={() => setClick(false)}>
      <NavLink to={"/"} className={style.navigateLink}>
        Главная
      </NavLink>
      <NavLink to={"Courses"} className={style.navigateLink}>
        Учебные курсы
      </NavLink>
      <NavLink to={"advanceCourses"} className={style.navigateLink}>
        Дополнительные курсы
      </NavLink>
      <NavLink to={"about"} className={style.navigateLink}>
        О нас
      </NavLink>
    </nav>
  );
}

export default MobileNavigation;
