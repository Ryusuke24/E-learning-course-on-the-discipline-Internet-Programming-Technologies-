import style from "./LogoComponent.module.scss";
import MainLogo from "./MainLogo.svg";

function LogoComponent() {
  return <img className={style.logo} src={MainLogo} alt="logo" />;
}

export default LogoComponent;
