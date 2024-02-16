import { ListBlock } from "../../Elements/ListBlock/ListBlock";
import style from "./CoursesMain.module.scss";

function CoursesMain() {
  return (
    <>
      <div className={style.main}>
        <ListBlock
          title={'Темы для изучения дисциплины "ТИП"'}
          section={1}
          elems={[
            {
              to: "HTML",
              text: (
                <p>
                  Тема 1. <br />
                  <span className={style.markedText}>HTML 5</span>
                </p>
              ),
            },
            {
              to: "CSS",
              text: (
                <p>
                  Тема 2.
                  <br /> <span className={style.markedText}>CSS 3</span>
                </p>
              ),
            },
            {
              to: "Layout",
              text: (
                <p>
                  Тема 3. <br />
                  <span className={style.markedText}>Верстка веб-страниц</span>
                </p>
              ),
            },
            {
              to: "JS",
              text: (
                <p>
                  Тема 4.
                  <br /> <span className={style.markedText}>JavaScript</span>
                </p>
              ),
            },
            {
              to: "PHP",
              text: (
                <p>
                  Тема 5.
                  <br /> <span className={style.markedText}>PHP</span>
                </p>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export default CoursesMain;
