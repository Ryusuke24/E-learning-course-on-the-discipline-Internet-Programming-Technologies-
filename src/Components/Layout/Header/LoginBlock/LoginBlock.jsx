import { Link } from "react-router-dom";
import style from "./LoginBlock.module.scss";

function LoginBlock() {
  return (
    <div className={style.loginBlock}>
      <Link className={style.registerLink}>Войти</Link>
      <Link className={style.signInLink}>Зарегистрироваться</Link>
    </div>
  );
}

export default LoginBlock;
