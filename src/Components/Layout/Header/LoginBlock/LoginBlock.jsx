import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/auth";

import Avatar from "@mui/material/Avatar";

import style from "./LoginBlock.module.scss";

function LoginBlock() {
  const dispatch = useDispatch();
  const isAuth = Boolean(useSelector(state => state.auth.data));
  const user = useSelector(state => state.auth.data);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("token", "");
  };
  return (
    <>
      {isAuth ? (
        <>
          <div className={style.authLoginBlock}>
            <Link to={"/account"}>
              <Avatar alt={user.userName} src={user.avatarUrl} />
            </Link>

            <button className={style.logoutButton} onClick={handleLogout}>
              Выйти
            </button>
          </div>
        </>
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
