import {
  PaginationBlock,
  AddComment,
  List,
  SubTitle,
  Text,
  Title,
  CodeBlock,
  Menu,
  OuterLink,
} from "../../../../Elements/index";
import { CommentsBlock } from "../../../CommentsBlock/CommentsBlock";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../../../redux/comments";
import { useState } from "react";

import style from "../LessonStyle.module.scss";

import task2 from "./task2.png";
import task6 from "./task6.png";

function LessonCSS4() {
  const [text, setText] = useState();
  const [isEdit, setEditMode] = useState(false);
  const [editableId, setEditableId] = useState("");
  const ref = useRef();
  const { comments, errors, loading } = useSelector(state => state.comments);
  const user = useSelector(state => state.auth.data);
  const location = useLocation();
  const [_, __, course, lesson] = location.pathname.split("/");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  return (
    <>
      <div className={style.container}>
        <Menu
          title={"Учебный курс CSS"}
          elems={[
            {
              to: "/courses/CSS/1",
              text: (
                <p>
                  1. Лекция <br />
                  <span className={style.markedText}>
                    Основы представления веб-страниц с помощью стилей CSS
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/CSS/2",
              text: (
                <p>
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Порядок настройки свойств стилей CSS
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/CSS/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок представления веб-страниц с помощью CSS
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/CSS/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок применения современных средств разработки
                    представления веб-страниц с CSS
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/CSS/test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме CSS
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>
              {" "}
              Практическое занятие 4 : Порядок применения современных средств
              разработки представления веб-страниц с CSS
            </Title>
            <SubTitle>Задание 1: Определение стилей CSS </SubTitle>
            <Text>
              Создайте веб-страницу, в котором настройте свойства стилей для
              следующих элементов:
            </Text>
            <List
              elems={[
                "Заголовок страницы (h1) - размер шрифта 24px, цвет синий, курсив",
                "Основной текст (p) - размер шрифта 16px, цвет черный, выравнивание по ширине",
                "Ссылка (a) - цвет шрифта синий, при наведении меняется на красный, подчеркивание исчезает",
                "Изображение (img) - ширина 50%, максимальная высота 300px, обтекание текстом",
              ]}
            />
            <Text>Пример выполнения :</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`h1 {
  font-size: 24px;
  color: blue;
  font-style: italic;
}

p {
  font-size: 16px;
  color: black;
  text-align : center;
}

a {
  color : blue;
  text-decoration: none;
  &:hover {
    color : red;
  }
}

img {
  width : 50%;
  max-height : 300px;
  float : left;
}
`}
                  </code>
                </pre>
              }
            />
            <br />

            <SubTitle>Задание 2: Определение стилей CSS </SubTitle>
            <Text>
              Создайте HTML-страницу с двумя колонками текста и настройте стили
              для каждой колонки, чтобы они имели следующие свойства:
            </Text>
            <List
              elems={[
                "Колонку с цитатами (blockquote) - отступ слева 20px, граница справа 1px, отступ текста 10px",
                "Основную колонку (article) - граница слева 1px, выравнивание текста по центру",
              ]}
            />
            <Text>Пример выполнения:</Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task2} alt="task2" />
            </div>
            <SubTitle>
              Задание 3: Форматирование межстрочного интервала и расстояния
              между буквами{" "}
            </SubTitle>
            <Text>
              Отформатируйте произвольный текст и добавьте несколько ссылок
            </Text>
            <List
              elems={[
                "Создайте CSS правило, которое устанавливает межстрочный интервал (line-height) для всех абзацев (p) равным 1.5em.",
                "Измените правило так, чтобы межстрочный интервал для заголовка (h1) был равен 1.2em, а для подзаголовка (h2) - 1.1em.",
                "Измените правило для ссылок внутри элемента nav так, чтобы расстояние между буквами было равно 2px.",
              ]}
            />
            <Text>Пример выполнения:</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`h1 {
  line-height: 1.2em;
}

h2 {
  line-height: 1.1em;
}

p {
  line-height: 1.5em;
}


nav {
  letter-spacing: 2px;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 4: Форматирование стилей списка </SubTitle>
            <Text>
              Создайте маркированный список (ul) и примените к нему CSS правило,
              которое изменяет цвет маркеров на красный и увеличивает их размер
              до 32px, так же создайте нумерованный список и уберите нумерацию и
              отступ слева.
              <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`ul {
  list-style-type: none;
}

.list::before {
  content: "•";
  color: red;
  margin-right: 10px;
  font-size: 32px;
  
}

ol {
  list-style-type: none;
  padding: 0;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  Знак амперсанта & используется для указания элемента к
                  которому применяется псевдокласс или псевдоэлемент. <br />
                  Данный способ написания улучшает читаемость кода.
                </em>
              </Text>
            </div>
            <SubTitle>Задание 5 : Работа с радиальным градиент</SubTitle>
            <Text>
              Создайте шар с использованием линейного градиента в CSS
              <br />
              Пример выполнения :
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`div { 
    width: 100px;
    height: 100px;
    padding: 15px;
    box-sizing: padding-box;
    text-align: center;
    border-radius: 100px;
    background-color:  #eee;
    background-image: radial-gradient(white,black);
  }`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 6 : Создание навигационного меню</SubTitle>
            <Text>
              Создайте горизонтальную панель навигации с такими вкладками:
            </Text>
            <List elems={["Главная", "Новости", "Контакты", "О сайте"]} />
            <Text>
              При наведении на элемент панели навигации, он должен делаться чуть
              темнее вашего цвета. Оформление произвольное. <br />
              Пример выполнения:
            </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task6} alt="task6" />
            </div>
            <br />
            <PaginationBlock to={"/Courses/CSS/test"} back={"/Courses/CSS/3"} />
          </section>
          <section className={style.commentBlock}>
            <AddComment
              ref={ref}
              course={course}
              lesson={lesson}
              imageUrl={user?.avatarUrl}
              setEditMode={setEditMode}
              isEdit={isEdit}
              editableId={editableId}
              setText={setText}
              text={text}
            />
          </section>
          <CommentsBlock
            items={
              (comments ? comments : Array(1))
                .filter(comment => comment?.courseName === course)
                .filter(comment => comment?.lessonNumber === lesson)
                .map(comment => {
                  return {
                    id: comment._id,
                    user: {
                      id: comment.userId,
                      fullName: comment.user,
                      avatarUrl: comment.userImageUrl,
                    },
                    text: comment.text,
                  };
                })
                .reverse() || []
            }
            setEditableId={setEditableId}
            isLoading={loading}
            setEditMode={setEditMode}
            setText={setText}
            ref={ref}
          />
        </div>
      </div>
    </>
  );
}

export default LessonCSS4;
