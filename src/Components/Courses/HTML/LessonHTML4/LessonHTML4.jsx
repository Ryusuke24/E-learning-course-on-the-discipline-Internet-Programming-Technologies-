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

import task3_1 from "./task3_1.png";
import task3_2 from "./task3_2.png";

function LessonHTML4() {
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
              Практическое занятие 4 : Порядок работы с формами HTML5.
            </Title>
            <SubTitle>Задание 1 : Создание простой формы</SubTitle>
            <Text>
              Создать свою форму с 3 input в которых указывается логин, пароль и
              кнопка подтверждения. <br /> Пример выполнения:
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
    <form action="#" method="GET">
      <input type="text" name="login" placeholder="Введите логин" />
      <input type="password" placeholder="Введите пароль" />
      <input type="submit" />
    </form>
  </body>
</html>

`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 2 : Создание простой формы </SubTitle>
            <Text>
              Создайте простую HTML-страницу с формой, которая содержит
              следующие элементы:
            </Text>
            <List
              elems={[
                "Телефонный номер: Используйте тег <input> с атрибутом type=“tel”.",
                "Логин: Также используйте тег <input>, но с атрибутом type=“text”.",
                "E-mail: Добавьте еще один тег <input> для ввода адреса электронной почты с атрибутом type=“email”.",
                "Пароль: Создайте тег <input> с типом “password” для ввода пароля.",
                "Кнопка отправки: Используйте тег <button> с атрибутом “type=submit” для отправки формы.",
                "Кнопка сброса: Используйте тег <button> с атрибутом “type=reset” для отправки формы.",
              ]}
            />
            <Text>
              Оберните каждый input в label и укажите их связь c помощью for(у
              label) и id (у input), установите атрибуты name для каждого тега.
              В inpute для телефона указать в атрибут pattern ={" "}
              {"^((8|+7)[- ]?)?((?d{3})?[- ]?)?[d- ]{7,10}$"}
            </Text>
            <SubTitle>Задание 3 : Работа с input </SubTitle>
            <Text>
              Создайте простую HTML-страницу с формой, которая содержит элемент
              select и элементы option в нем. <br />
              Так же создать input c типом range
              <br />
              Пример выполнения: <br />
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
    <label for="pet-select">Choose a pet:</label>
    <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
    </select>
    <label for="range">Range</label>
    <input id="range" type="range" name="range" min="0" max="25"/>
  </body>
</html>

`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 4 : Создание формы</SubTitle>
            <Text>
              Разработайте форму для анкетирования абитуриентов образовательной
              организации
              <br />
              Пример выполнения:
              <br />
              <img src={task3_1} alt="task3_1" />
              <br />
              <img src={task3_2} alt="task3_2" />
              <br />
            </Text>
            <SubTitle>
              Задание 5 : Cоздание страницы HTML с помощью семантических тегов
            </SubTitle>
            <Text>
              Создать страницу как показано в примере.
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
                    {`<<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/"></a>Главная</li>
        <li><a href="/blog">Блог</a></li>
        <li><a href="/contact">Контакты</a></li>
      </ul>
    </nav>
    <article>
      <header>
        <h2></h2>
      </header>
      <nav>
        <ul>
          <li><a href="#part1">Part 1</a></li>
          <li><a href="#part2">Part 2</a></li>
        </ul>
      </nav>
      <main>
        <section id="part1">
          <h2>Part 1</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            expedita nisi. Iure voluptatum ex minus optio adipisci saepe
            architecto sequi iusto omnis perspiciatis, eos corporis
            exercitationem, consequatur vero blanditiis. Porro.
          </p>
        </section>
        <section id="part2">
          <h2>Part 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quo
            ipsam modi alias dolore provident similique tenetur. Iure
            voluptatibus quia ut perferendis natus. Accusantium itaque
            perferendis quasi quaerat excepturi quibusdam.
          </p>
        </section>
      </main>
      <footer>
        <p>
          <a href="">Лицензионное соглашение</a> |
          <a href="/about">О сайте</a> |
          <a href="/donations">Donations</a>
        </p>
        <p><small>© Copyright 2024 Corp.</small></p>
      </footer>
    </article>
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
                  Для генерации текста используйте Lorem, eсли вы работаете в
                  VSCode или сайт{" "}
                  <OuterLink to={"https://ru.lipsum.com/"}>
                    Lorem ipsum
                  </OuterLink>
                </em>
              </Text>
            </div>

            <PaginationBlock to={"/Courses"} back={"/Courses/HTML/3"} />
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

export default LessonHTML4;
