import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/auth";
import Avatar from "@mui/material/Avatar";

import style from "./LoginBlock.module.scss";

function MobileLoginBlock({ setClick, obj }) {
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
        <div className={style.authLoginBlock}>
          <Link to={"/account"}>
            <Avatar alt={user.fullName} src={user.avatarUrl} />
          </Link>
          <button className={style.logoutButton} onClick={handleLogout}>
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
