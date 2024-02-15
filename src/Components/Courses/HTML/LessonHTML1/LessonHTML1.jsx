import { PaginationBlock } from "../../../../Elements/PaginationBlock/PaginationBlock";
import { AddComment } from "../../../../Elements/AddComment/AddComment";
import { List } from "../../../../Elements/List/List";
import { SubTitle } from "../../../../Elements/SubTitle/SubTitle";
import { Text } from "../../../../Elements/Text/Text";
import { Title } from "../../../../Elements/Title/Title";
import { CodeBlock } from "../../../../Elements/CodeBlock/CodeBlock";
import { CommentsBlock } from "../../../CommentsBlock/CommentsBlock";
import { Menu } from "../../../../Elements/Menu/Menu";
import style from "./LessonHTML1.module.scss";

function LessonHTML1() {
  const imageUrl = "https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg";

  return (
    <>
      <div className={style.container}>
        <Menu
          title={"Учебный курс HTML"}
          elems={[
            {
              to: "/courses/HTML/1",
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
              to: "/courses/HTML/2",
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
              to: "/courses/HTML/3",
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
              to: "/courses/HTML/4",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Введение. <br /> Основы разработки интернет-приложений
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>
              Электронный учебный курс по дисциплине "Технологии интернет
              программирования"
            </Title>
            <Text>
              В рамках улучшения качества обучения учащихся и поддержки освоения
              дисциплины "Технологии интернет программирования" реализован
              данный проект
            </Text>
            <SubTitle>Цели и задачи дисциплины</SubTitle>
            <Text>
              <span className={style.markedText}>Основная цель</span> —
              получение обучающимися современных знаний о методах и средствах
              технологий интернет-программирования (ТИП), а также формирование
              навыков их самостоятельной применения при разработке прикладного
              программного обеспечения вычислительной техники и
              автоматизированных систем (ППО ВТ и АС).
            </Text>
            <SubTitle>Задачи изучения дисциплины</SubTitle>
            <List
              elems={[
                "Формирование знаний о современных методах, средствах итенденциях разработки сайтов и SPA-приложений;",
                "Овладение инструментальными средствами ТИП при разработкеразработки сайтов и SPA-приложений;",
                "Овладение практическими навыками разработки сайтов иSPA-приложений.",
              ]}
            ></List>
            <CodeBlock
              lang={"JavaScript"}
              code={
                <pre>
                  <code className="language-javascript">
                    {`
        onSubmit(e) {
          e.preventDefault();
          const job = {
            title: 'Developer',
            company: 'Facebook' 
            };
          }
        }
        `}
                  </code>
                </pre>
              }
            />
            <PaginationBlock to={"/Courses/HTML/2"} back={"/Courses/HTML/"} />
          </section>
          <section className={style.commentBlock}>
            <AddComment imageUrl={imageUrl} />
          </section>
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий 555555",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </div>
      </div>
    </>
  );
}

export default LessonHTML1;
