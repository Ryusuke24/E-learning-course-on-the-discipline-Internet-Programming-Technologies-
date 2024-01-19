import { Link } from "react-router-dom";
import MobileNavigation from "../Navigation/MobileNavigation";
import MobileLoginBlock from "../LoginBlock/MobileLoginBlock";
import style from "./PopupMenu.module.scss";

function PopupMenu() {
  return (
    <div className={style.popupMenu}>
      <MobileLoginBlock />
      <MobileNavigation />
    </div>
  );
}

export default PopupMenu;
