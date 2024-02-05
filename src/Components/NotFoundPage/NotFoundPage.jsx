import style from "./NotFoundPage.module.scss";
import dragon from "./Dragon.svg";

function NotFoundPage() {
  return (
    <div className={style.notFound}>
      <h1>Hic sunt dracones... </h1>
      <img src={dragon} alt="" />
      <p>Error 404 : Page is not found</p>
    </div>
  );
}

export default NotFoundPage;
