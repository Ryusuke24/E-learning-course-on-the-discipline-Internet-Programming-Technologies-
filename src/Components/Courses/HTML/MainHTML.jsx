import { ListBlock } from "../../../Elements/index";
import style from "./CourseHTML.module.scss";

function MainHTML() {
  return (
    <>
      <div className={style.main}>
        <ListBlock
          title={"Занятия по теме HTML"}
          section={1}
          elems={[
            {
              to: "1",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Введение. <br /> Основы разработки интернет-приложений
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
                    Основные элементы языка HTML
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
                    Основные элементы языка HTML
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
                    Cредства разработки веб-страниц
                  </span>
                </p>
              ),
            },
            {
              to: "test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме HTML
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

export default MainHTML;
