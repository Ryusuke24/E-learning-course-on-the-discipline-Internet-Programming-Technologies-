import { ListLinks } from "../ListLinks/ListLinks";
import Hamburger from "hamburger-react";
import style from "./MenuBar.module.scss";

export const MenuBar = ({ title, elems, isClicked, setClick }) => {
  return (
    <div className={style.navigationMenu}>
      <div className={style.closeMenuButton}>
        <Hamburger toggled={isClicked} toggle={setClick} />
      </div>{" "}
      <div className={style.list}>
        <ListLinks title={title} elems={elems} />
      </div>
    </div>
  );
};
