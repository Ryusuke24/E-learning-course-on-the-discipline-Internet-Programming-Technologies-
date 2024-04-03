import { ListBlock } from "../../../Elements/index";
import style from "./CourseJS.module.scss";

function MainJs() {
  return (
    <>
      <div className={style.main}>
        <ListBlock
          title={"Занятия по теме JavaScript"}
          section={1}
          elems={[
            {
              to: "1",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>Основы JavaScript</span>
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
                    Работа с Document и Browser Object Model (Dom и Bom)
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
                    Разработка скриптов на языке JavaScript
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
                    Порядок применения средств разработки скриптов для
                    веб-страниц на языке JavaScript
                  </span>
                </p>
              ),
            },
            {
              to: "test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме JavaScript
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

export default MainJs;
