import { Link } from "react-router-dom";
import style from "./Home.module.scss";

function Home() {
  return (
    <>
      <main className={style.main}>
        <section className={style.section1}>
          <h1 className={style.title}>
            Электронный учебный курс по дисциплине "Технологии интернет
            программирования"
          </h1>
          <p className={style.text}>
            В рамках улучшения качества обучения учащихся и поддержки освоения
            дисциплины "Технологии интернет программирования" реализован данный
            проект
          </p>
          <h1 className={style.subTitle}>Цели и задачи дисциплины</h1>
          <p className={style.text}>
            <span className={style.markedText}>Основная цель</span> — получение
            обучающимися современных знаний о методах и средствах технологий
            интернет-программирования (ТИП), а также формирование навыков их
            самостоятельной применения при разработке прикладного программного
            обеспечения вычислительной техники и автоматизированных систем (ППО
            ВТ и АС).
          </p>
          <h2 className={style.subTitle}>Задачи изучения дисциплины</h2>
          <ul className={style.list}>
            <li>
              Формирование знаний о современных методах, средствах и тенденциях
              разработки сайтов и SPA-приложений;
            </li>{" "}
            <li>
              Овладение инструментальными средствами ТИП при разработке
              разработки сайтов и SPA-приложений;
            </li>{" "}
            <li>
              Овладение практическими навыками разработки сайтов и
              SPA-приложений.
            </li>
          </ul>
        </section>
        <section className={style.section2}>
          <h1 className={style.title}>Темы для изучения дисциплины "ТИП"</h1>
          <ul className={style.listBlocks}>
            <li>
              <Link to={"Courses/HTML"} className={style.outLinks}>
                Тема 1. <br />
                <span className={style.markedText}>HTML 5</span>
              </Link>
            </li>{" "}
            <li>
              <Link to={"Courses/CSS"} className={style.outLinks}>
                Тема 2.
                <br /> <span className={style.markedText}>CSS 3</span>
              </Link>
            </li>
            <li>
              <Link to={"Courses/Layout"} className={style.outLinks}>
                {" "}
                Тема 3. <br />
                <span className={style.markedText}>Верстка веб-страниц</span>
              </Link>
            </li>
            <li>
              <Link to={"Courses/JS"} className={style.outLinks}>
                Тема 4.
                <br /> <span className={style.markedText}>JavaScript</span>
              </Link>
            </li>
            <li>
              <Link to={"Courses/PHP"} className={style.outLinks}>
                Тема 5.
                <br /> <span className={style.markedText}>PHP</span>
              </Link>
            </li>
          </ul>
        </section>
        <section className={style.section1}>
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
      </main>
    </>
  );
}

export default Home;
