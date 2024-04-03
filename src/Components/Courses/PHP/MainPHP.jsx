import { ListBlock } from "../../../Elements/index";
import style from "./CoursePHP.module.scss";

function MainPHP() {
  return (
    <>
      <div className={style.main}>
        <ListBlock
          title={"Занятия по теме PHP"}
          section={1}
          elems={[
            {
              to: "1",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>Основы PHP</span>
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
                    Базовые и дополнительные возможности PHP
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
                    Разработка веб-сценариев на языке PHP
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
                    веб-страниц на языке PHP
                  </span>
                </p>
              ),
            },
            {
              to: "test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме PHP
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

export default MainPHP;
