import { Link } from "react-router-dom";
import style from "./LoginBlock.module.scss";

function MobileLoginBlock() {
  return (
    <div className={style.loginBlock}>
      <Link className={style.signInLink}>Зарегистрироваться</Link>
      <Link className={style.registerLink}>Войти</Link>
    </div>
  );
}

export default MobileLoginBlock;
