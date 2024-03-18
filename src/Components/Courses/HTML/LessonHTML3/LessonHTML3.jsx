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

import task1 from "./task1.png";
import task2_1 from "./task2_1.png";
import task2_2 from "./task2_2.png";
import task2_3 from "./task2_3.png";

import style from "../LessonStyle.module.scss";

function LessonHTML3() {
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
          title={"Учебный курс HTML"}
          elems={[
            {
              to: "/courses/HTML/1",
              text: (
                <p>
                  1. Лекция <br />
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
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Порядок применения основных элементов HTML
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/HTML/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Использование основных элементов HTML
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/HTML/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Применение современных средств разработки содержимого
                    веб-страниц
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>
              Практическое занятие 3 : Порядок использования основных элементов
              HTML5
            </Title>
            <SubTitle>Задание 0 : Создание документа HTML</SubTitle>
            <Text>
              Сделать свою первую страницу HTML в среде разработки и запустить
              ее. <br /> Пример выполнения:
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>Content</div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 1 : Форматирование текста</SubTitle>
            <Text>
              Сделать отформатированную страницу с помощью элементов оформления.
              <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Форматирование текста</title>
  </head>
  <body>
    <p>Форматирование в <mark>HTML 5</mark></p>
    <p>Это <b>выделенный</b> текст</p>
    <p>Это <strong>важный</strong> текст</p>
    <p>Это <del>зачеркнутый</del> текст</p>
    <p>Это <s>недействительный</s> текст</p>
    <p>Это <em>важный курсивный</em> текст</p>
    <p>Это <i>курсивный</i> текст</p>
    <p>Это <ins>добавленный</ins> текст</p>
    <p>Это <u>подчеркнутый</u> текст</p>
    <p>X<sub>i</sub> = Y <sup><small>2</small></sup> + Z<sup><small>2</small></sup></p>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 1.1 : Форматирование текста</SubTitle>
            <Text>
              Сделать отформатированную страницу с помощью элементов оформления.
              <br />
              Пример выполнения: <br />
              <img src={task1} alt="task1" />
            </Text>
            <SubTitle>Задание 2 :Работа с элементом img</SubTitle>
            <Text>
              Сделать отформатированную страницу с помощью элемента img.
              <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>
      <img
        src="https://avatanplus.com/files/resources/original/59956a2e0b41e15defa6c3de.png"
        alt="cat"
        width="150px"
        style="float: none || left || right"
      />
      ...текст...
      ...текст...
      ...текст...
    </p>
  </body>
</html>

`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 2.1 : Работа с изображениями</SubTitle>
            <Text>
              Разработать веб-страницу, содержащие 3 абзаца с разными способами
              форматирования текста с обтеканием рисунка
              <br />
              Пример выполнения (содержимое заполните произвольным текстом):{" "}
              <br />
              <img src={task2_1} alt="task2" />
              <br />
              <img src={task2_2} alt="task2" />
              <br />
              <img src={task2_3} alt="task2" />
              <br />
            </Text>
            <SubTitle>Задание 3 : Работа со списками</SubTitle>
            <Text>
              Сделать 4 списка с помощью элемента {"<ul> и <ol>"}. (два
              стандартных, один с произвольным маркером, один расположенный по
              горизонтали)
              <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>IPhone</li>
      <li>Samsung</li>
      <li>Xiomi</li>
      <li>Note</li>
    </ul>
    <ol>
      <li>Apple</li>
      <li>Microsoft</li>
      <li>Yandex</li>
      <li>Tesla</li>
    </ol>
    <ul style="list-style-type: upper-roman">
      <li>SBER</li>
      <li>ALPHA</li>
      <li>Tinkoff</li>
      <li>VTB</li>
    </ul>
    <ul>
      <li style="display: inline">Main</li>
      <li style="display: inline">About</li>
      <li style="display: inline">Contact</li>
    </ul>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  Существуют удобный способ создания списков и вообще страниц,
                  но на первых порах лучше приучиться писать самому и запоминать
                  тем самым теги и их аттрибуты. <br />
                  Flexbox и Emmet, мы рассмотрим в теме CSS и Layout
                </em>
              </Text>
            </div>
            <SubTitle>Задание 4 : Работа со ссылками</SubTitle>
            <Text>
              Сделать 3 ссылки с помощью элемента {"<a>"}. (одну на Google,
              другую на портал Академии и ссылка-изображение)
              <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="https://edu.amchs.ru/login/index.php">Портал Академии</a>
    <br />
    <a href="https://www.google.ru/?hl=ru" target="_blank">Google</a>
    <br />
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      <img
        width="100px"
        src="https://avatanplus.com/files/resources/original/59956a2e0b41e15defa6c3de.png"
        alt="cat"
      />
    </a>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <PaginationBlock to={"/Courses/HTML/3"} back={"/Courses/HTML/1"} />
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

export default LessonHTML3;
