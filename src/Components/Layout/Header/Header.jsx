import { useResize } from "../../../UserHooks/useResize/useResize";
import { useState } from "react";
import Hamburger from "hamburger-react";
import LogoComponent from "./LogoComponent/LogoComponent";
import Navigation from "./Navigation/Navigation";
import PopupMenu from "./PopupMenu/PopupMenu";
import LoginBlock from "./LoginBlock/LoginBlock";
import style from "./Header.module.scss";

function Header() {
  const width = useResize();
  const [isClicked, setClick] = useState(false);

  return (
    <>
      <header className={style.header}>
        <LogoComponent />
        {width.width >= 991 ? (
          <>
            <Navigation />
            <LoginBlock />
          </>
        ) : (
          <>
            <Hamburger
              toggled={isClicked}
              toggle={setClick}
              className={style.openMenuButton}
            />
            {isClicked && <PopupMenu setClick={setClick} />}
          </>
        )}
      </header>
    </>
  );
}

export default Header;
