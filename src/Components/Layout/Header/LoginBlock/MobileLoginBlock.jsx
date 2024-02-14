import { Link } from "react-router-dom";
import style from "./LoginBlock.module.scss";

function MobileLoginBlock({ setClick }) {
  return (
    <div className={style.loginBlock} onClick={() => setClick(false)}>
      <Link to={"register"} className={style.signInLink}>
        Зарегистрироваться
      </Link>
      <Link to={"login"} className={style.registerLink}>
        Войти
      </Link>
    </div>
  );
}

export default MobileLoginBlock;
