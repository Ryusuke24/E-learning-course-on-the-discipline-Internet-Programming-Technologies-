import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";

function Layout() {
  return (
    <div className={style.layout}>
      <Header className={style.header} />
      <main className={style.main}>
        <Outlet />
      </main>
      <footer className={style.footer}>footer</footer>
    </div>
  );
}

export default Layout;
