import { Title, Text, SubTitle, List, ListBlock } from "../../Elements/index";
import style from "./Home.module.scss";

function Home() {
  return (
    <>
      <div className={style.main}>
        <section className={style.section1}>
          <Title>
            Электронный учебный курс по дисциплине "Технологии интернет
            программирования"
          </Title>

          <Text>
            В рамках улучшения качества обучения учащихся и поддержки освоения
            дисциплины "Технологии интернет программирования" реализован данный
            проект
          </Text>

          <SubTitle>Цели и задачи дисциплины</SubTitle>
          <Text>
            <span className={style.markedText}>Основная цель</span> — получение
            обучающимися современных знаний о методах и средствах технологий
            интернет-программирования (ТИП), а также формирование навыков их
            самостоятельной применения при разработке прикладного программного
            обеспечения вычислительной техники и автоматизированных систем (ППО
            ВТ и АС).
          </Text>
          <SubTitle>Задачи изучения дисциплины</SubTitle>
          <List
            elems={[
              " Формирование знаний о современных методах, средствах и тенденциях разработки сайтов и SPA-приложений;",
              "Овладение инструментальными средствами ТИП при разработке разработки сайтов и SPA-приложений;",
              "Овладение практическими навыками разработки сайтов и SPA-приложений.",
            ]}
          />
        </section>
        <ListBlock
          title={'Темы для изучения дисциплины "ТИП"'}
          section={2}
          elems={[
            {
              to: "Courses/HTML",
              text: (
                <p>
                  Тема 1. <br />
                  <span className={style.markedText}>HTML 5</span>
                </p>
              ),
            },
            {
              to: "Courses/CSS",
              text: (
                <p>
                  Тема 2.
                  <br /> <span className={style.markedText}>CSS 3</span>
                </p>
              ),
            },
            {
              to: "Courses/Layout",
              text: (
                <p>
                  Тема 3. <br />
                  <span className={style.markedText}>Верстка веб-страниц</span>
                </p>
              ),
            },
            {
              to: "Courses/JS",
              text: (
                <p>
                  Тема 4.
                  <br /> <span className={style.markedText}>JavaScript</span>
                </p>
              ),
            },
            {
              to: "Courses/PHP",
              text: (
                <p>
                  Тема 5.
                  <br /> <span className={style.markedText}>PHP</span>
                </p>
              ),
            },
          ]}
        />
        <ListBlock
          title={"Дополнительные курсы"}
          section={1}
          elems={[
            {
              to: "Courses/React",
              text: (
                <p>
                  Курс по React <br />
                  (в разработке)
                </p>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export default Home;
