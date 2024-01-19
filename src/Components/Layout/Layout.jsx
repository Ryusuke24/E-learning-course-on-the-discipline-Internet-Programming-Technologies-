import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className={style.layout}>
      <Header className={style.header} />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer className={style.footer} />
    </div>
  );
}

export default Layout;
