import Hamburger from "hamburger-react";
import style from "./OpenMenuButton.module.scss";

export const OpenMenuButton = ({ isClicked, setClick }) => {
  return (
    <div className={style.openMenuButton}>
      <Hamburger toggled={isClicked} toggle={setClick} />
    </div>
  );
};
