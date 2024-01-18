import { useResize } from "../../../UserHooks/useResize/useResize";
import MainLogo from "./MainLogo.svg";
import toolbar from "./toolbar.svg";
import close from "./close.svg";
import AccountLogo from "./AccountLogo.svg";
import style from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";

function Header() {
  const width = useResize();
  const ref = useRef();
  const [isClicked, setClick] = useState(false);

  return (
    <>
      <header className={style.header}>
        <img className={style.logo} src={MainLogo} alt="logo" />
        {width.isScreenMd ? (
          <>
            <nav>
              <NavLink to={"/"}>Главная</NavLink>
              <NavLink>Учебный курс</NavLink>
              <NavLink to={"about"}>О нас</NavLink>
            </nav>
            <p>Войти / Зарегистрироваться</p>
          </>
        ) : (
          <>
            <Hamburger
              toggled={isClicked}
              toggle={setClick}
              className={style.openMenuButton}
            />
            {isClicked && (
              <div className={style.popupMenu}>
                <div className={style.loginBlock}>
                  {" "}
                  <Link className={style.registerLink}>Register</Link>
                  <Link className={style.signInLink}>Sign In</Link>
                </div>

                <hr />
                <nav className={style.navigationBlock}>
                  <NavLink to={"/"}>Главная</NavLink>
                  <NavLink>Учебный курс</NavLink>
                  <NavLink to={"about"}>О нас</NavLink>
                </nav>
              </div>
            )}
          </>
        )}
      </header>
    </>
  );
}

export default Header;
