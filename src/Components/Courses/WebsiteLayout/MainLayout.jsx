import { ListBlock } from "../../../Elements/index";
import style from "./WebsiteLayout.module.scss";

function MainLayout() {
  return (
    <>
      <div className={style.main}>
        <ListBlock
          title={"Занятия по теме верстка"}
          section={1}
          elems={[
            {
              to: "1",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Основы макетирования и верстки веб-страниц
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
                    Основы применения адаптивного дизайна и мультимедиа при
                    верстке веб-страниц
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
                    Порядок макетирования и верстки веб-страниц
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
                    Порядок применения современных средств макетирование и
                    верстка веб-страниц с применением адаптивного дизайна и
                    мультимедиа
                  </span>
                </p>
              ),
            },
            {
              to: "test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме Верстка
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

export default MainLayout;
