import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AccountLogoSVG from "./AccountLogo.svg";

import style from "./LoginBlock.module.scss";

function MobileLoginBlock({ setClick, isAuth, obj }) {
  return (
    <>
      {isAuth ? (
        <div className={style.authLoginBlock}>
          <Link to={"/account"}>
            <Avatar
              alt={obj.user.fullName}
              src={obj.user.avatarUrl ? obj.user.avatarUrl : AccountLogoSVG}
            />
          </Link>
          <button className={style.logoutButton} onClick={() => {}}>
            Выйти
          </button>
        </div>
      ) : (
        <div className={style.loginBlock} onClick={() => setClick(false)}>
          <Link to={"register"} className={style.signInLink}>
            Зарегистрироваться
          </Link>
          <Link to={"login"} className={style.registerLink}>
            Войти
          </Link>
        </div>
      )}
    </>
  );
}

export default MobileLoginBlock;
