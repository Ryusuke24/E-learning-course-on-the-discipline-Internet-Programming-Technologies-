import { Link } from "react-router-dom";
import style from "./CourseHTML.module.scss";

function MainHTML() {
  return (
    <>
      <div className={style.main}>
        <section className={style.section1}>
          <h1 className={style.title}>Занятия по теме HTML</h1>
          <ul className={style.listBlocks}>
            <li>
              <Link to={"1"} className={style.outLinks}>
                Лекция 1. <br />
                <span className={style.markedText}>
                  Введение. <br /> Основы разработки интернет-приложений
                </span>
              </Link>
            </li>{" "}
            <li>
              <Link to={"2"} className={style.outLinks}>
                Лекция 2.
                <br />{" "}
                <span className={style.markedText}>
                  Основные элементы языка HTML
                </span>
              </Link>
            </li>
            <li>
              <Link to={"3"} className={style.outLinks}>
                {" "}
                Практическое занятие 3. <br />
                <span className={style.markedText}>
                  Использование основных элементов HTML
                </span>
              </Link>
            </li>
            <li>
              <Link to={"4"} className={style.outLinks}>
                Практическое занятие 4.
                <br />{" "}
                <span className={style.markedText}>
                  Современныхе средства разработки содержимого веб-страниц HTML
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default MainHTML;
