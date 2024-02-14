import { Link } from "react-router-dom";
import style from "./CoursesMain.module.scss";

function CoursesMain() {
  return (
    <>
      <div className={style.main}>
        <section className={style.section1}>
          <h1 className={style.title}>Учебные курсы по дисциплине "ТИП"</h1>
          <ul className={style.listBlocks}>
            <li>
              <Link to={"HTML"} className={style.outLinks}>
                Тема 1. <br />
                <span className={style.markedText}>HTML 5</span>
              </Link>
            </li>{" "}
            <li>
              <Link to={"CSS"} className={style.outLinks}>
                Тема 2.
                <br /> <span className={style.markedText}>CSS 3</span>
              </Link>
            </li>
            <li>
              <Link to={"Layout"} className={style.outLinks}>
                {" "}
                Тема 3. <br />
                <span className={style.markedText}>Верстка веб-страниц</span>
              </Link>
            </li>
            <li>
              <Link to={"JS"} className={style.outLinks}>
                Тема 4.
                <br /> <span className={style.markedText}>JavaScript</span>
              </Link>
            </li>
            <li>
              <Link to={"PHP"} className={style.outLinks}>
                Тема 5.
                <br /> <span className={style.markedText}>PHP</span>
              </Link>
            </li>
          </ul>
        </section>

        <section className={style.section2}>
          <h1 className={style.title}>Дополнительные курсы</h1>
          <ul className={style.listBlocks}>
            <li>
              <Link to={"Courses/React"} className={style.outLinks}>
                Курс по React <br />
                (в разработке)
              </Link>
            </li>{" "}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CoursesMain;
