import MobileNavigation from "../Navigation/MobileNavigation";
import MobileLoginBlock from "../LoginBlock/MobileLoginBlock";
import style from "./PopupMenu.module.scss";

function PopupMenu({ setClick }) {
  return (
    <div className={style.popupMenu}>
      <MobileLoginBlock setClick={setClick} />
      <MobileNavigation setClick={setClick} />
    </div>
  );
}

export default PopupMenu;
