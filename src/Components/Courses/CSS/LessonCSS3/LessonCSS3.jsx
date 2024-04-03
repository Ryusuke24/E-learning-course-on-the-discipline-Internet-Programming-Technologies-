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

import task2 from "./task2.png";
import task5_1 from "./task5_1.png";
import task5_2 from "./task5_2.png";
import task6 from "./task6.png";

import style from "../LessonStyle.module.scss";

function LessonCSS3() {
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
              Практическое занятие 3 : Порядок представления веб-страниц с
              помощью стилей CSS
            </Title>
            <SubTitle>Задание 1: Определение стилей CSS </SubTitle>
            <Text>
              Создайте веб-страницу с 3 тегами div в которых содержится любой
              текст, следуя следующим условиям:
            </Text>
            <List
              elems={[
                "Стили у первого div заданы через inline стили (Border - 2px solid red, color - white, background-color : #242424)",
                "Стили у второго div заданы через тег <style> (Border - 4px solid black, border-radius: 10px, color - black , background-color : blue )",
                "Стили у третьего div заданы через файл styles.css подключенный к странице (Border - 6px solid orange, color - orange , background-color : gray )",
                "Установить всем тегам div минимальную ширину и высоту в  150 пикселей, центрировать текст по центру",
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
                    {`.three {
  border: 6px solid orange;
  color: orange;
  background-color: grey;
}

div {
  min-height: 150px;
  min-width: 150px;
  text-align: center;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
      .two {
        border: 4px solid black;
        border-radius: 10px;
        color: black;
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div
      class="one"
      style="border: 2px solid red; color: white; background-color: #242424"
    >Text</div>
    <div class="two">Text</div>
    <div class="three">Text</div>
  </body>
</html>

`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 2: Определение стилей CSS </SubTitle>
            <Text>
              С использованием стилей для селекторов элементов разработайте
              веб-страницу со следующим содержимым:
            </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task2} alt="task2" />
            </div>
            <SubTitle>
              Задание 3: Cоздание примитивного шаблона страницы{" "}
            </SubTitle>
            <Text>
              Определите стили для идентификаторов аналогично определению
              классов, только вместо точки ставится символ решетки # . <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`div {
    margin : 10px;
    border: 1px solid #222;

#header {
  height : 80px;
  background-color: #ccc;
} 
#content {
  height : 180px;
  background-color : #eee;
}
#footer {
  height : 80px;
  background-color : #ccc;
}
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 4: </SubTitle>
            <Text>
              Создание кнопки с подсветкой при наведении: создайте кнопку с
              фоновым изображением, и добавьте к ней псевдоэлемент :hover,
              который будет отображаться при наведении. Цвет фона псевдоэлемента
              должен быть немного светлее, чтобы создать эффект подсветки.{" "}
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
                    {`button {
    padding : 20px;
    background-color : black;
    border-radius : 10px;
    font-size: 1.5em;                  
    color : white;                  

    &:hover {
      background-color : grey;
    }
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
            <SubTitle>
              Задание 5 : Создание выпадающего меню с использованием
              псевдоэлементов{" "}
            </SubTitle>
            <Text>
              Cоздайте меню с горизонтальным списком элементов и добавьте
              псевдоэлементы :hover и ::after к ссылкам, чтобы при наведении на
              них отображалась дополнительная информация в виде выпадающей
              подсказки.
            </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task5_1} alt="task5_1" />
            </div>{" "}
            <div className={style.imageContainer}>
              <img className={style.image} src={task5_2} alt="task5_2" />
            </div>
            <SubTitle>Задание 6 : Работа с псевдоэлементами</SubTitle>
            <Text>
              Cоздайте список в котором c помощью псевдоэлемента, каждый
              нечетный элемент выделяется красным цветом (color : red;) и размер
              шрифта равен 32px, а каждый четный с синим цветом (color: blue;) и
              размер шрифта равен 12px
            </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task6} alt="task6" />
            </div>
            <PaginationBlock to={"/Courses/CSS/4"} back={"/Courses/CSS/2"} />
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

export default LessonCSS3;
