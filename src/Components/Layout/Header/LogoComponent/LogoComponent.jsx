import { Link } from "react-router-dom";
import style from "./LogoComponent.module.scss";
import MainLogo from "./MainLogo.svg";

function LogoComponent() {
  return (
    <Link to={"/"}>
      <img className={style.logo} src={MainLogo} alt="logo" />
    </Link>
  );
}

export default LogoComponent;
