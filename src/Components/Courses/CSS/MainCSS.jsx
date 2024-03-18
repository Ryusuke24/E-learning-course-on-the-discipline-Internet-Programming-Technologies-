import { ListBlock } from "../../../Elements/index";
import style from "./CourseCSS.module.scss";

function MainCSS() {
  return (
    <>
      <div className={style.main}>
        <ListBlock
          title={"Занятия по теме CSS"}
          section={1}
          elems={[
            {
              to: "1",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Основы представления веб-страниц с помощью стилей CSS
                  </span>
                </p>
              ),
            },
            {
              to: "2",
              text: (
                <p>
                  Лекция 2.
                  <br />{" "}
                  <span className={style.markedText}>
                    Порядок настройки свойств стилей CSS
                  </span>
                </p>
              ),
            },
            {
              to: "3",
              text: (
                <p>
                  Практическое занятие 3. <br />
                  <span className={style.markedText}>
                    Порядок представления веб-страниц с помощью CSS
                  </span>
                </p>
              ),
            },
            {
              to: "4",
              text: (
                <p>
                  Практическое занятие 4.
                  <br />{" "}
                  <span className={style.markedText}>
                    Порядок применения современных средств разработки
                    представления веб-страниц с CSS
                  </span>
                </p>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export default MainCSS;
