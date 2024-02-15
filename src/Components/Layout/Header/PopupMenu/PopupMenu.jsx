import MobileNavigation from "../Navigation/MobileNavigation";
import MobileLoginBlock from "../LoginBlock/MobileLoginBlock";
import style from "./PopupMenu.module.scss";

function PopupMenu({ setClick, isAuth, obj }) {
  return (
    <div className={style.popupMenu}>
      <MobileLoginBlock setClick={setClick} isAuth={isAuth} obj={obj} />
      <MobileNavigation setClick={setClick} />
    </div>
  );
}

export default PopupMenu;
