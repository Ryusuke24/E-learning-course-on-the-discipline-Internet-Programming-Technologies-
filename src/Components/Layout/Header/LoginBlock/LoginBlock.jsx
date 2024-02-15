import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import style from "./LoginBlock.module.scss";

function LoginBlock({ isAuth, obj }) {
  return (
    <>
      {isAuth ? (
        <div className={style.authLoginBlock}>
          <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
          <button className={style.logoutButton} onClick={() => {}}>
            Выйти
          </button>
        </div>
      ) : (
        <div className={style.loginBlock}>
          <Link to={"login"} className={style.registerLink}>
            Войти
          </Link>
          <Link to={"register"} className={style.signInLink}>
            Зарегистрироваться
          </Link>
        </div>
      )}
    </>
  );
}

export default LoginBlock;
