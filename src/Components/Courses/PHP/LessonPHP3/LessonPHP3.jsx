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

function LessonPHP3() {
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
          title={"Учебный курс по PHP"}
          elems={[
            {
              to: "/courses/PHP/1",
              text: (
                <p>
                  1. Лекция <br />
                  <span className={style.markedText}>Основы PHP</span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/2",
              text: (
                <p>
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Базовые и дополнительные возможности PHP
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Разработка веб-сценариев на языке PHP
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок применения средств разработки скриптов для
                    веб-страниц на языке PHP
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/test",
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
        <div className={style.main}>
          <section className={style.section1}>
            <Title>
              Практическое занятие 3 : Базовые и дополнительные возможности PHP
            </Title>
            <SubTitle>Задание 1: Работа с переменными</SubTitle>
            <Text>
              Создайте переменную $num и присвойте ей значение 123. Выведите
              значение этой переменной
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"index.php"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php 
    $num = 123;
    echo $num;
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 2: Вычисления</SubTitle>
            <Text>
              Создайте переменную $a со значением 10 и переменную $b со
              значением 5. <br /> Отнимите от $a переменную $b и результат
              присвойте переменной $c. <br /> Затем создайте переменную $d,
              присвойте ей значение
              <br /> Сложите переменные $c и $d, а результат запишите в
              переменную $res. <br /> Выведите на экран значение переменной
              $res.
            </Text>
            <SubTitle>Задание 3: Математические операции</SubTitle>
            <Text>
              Пусть дана переменная tf с температурой в градусах Фаренгейта.{" "}
              <br /> По соответствующей формуле выполните перевод этой
              температуры в градусы Цельсия.
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"index.php"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php 
    // Ввод температуры в градусах Фаренгейта
    $tf = 70;

    // Формула для перевода температуры из градусов Фаренгейта в градусы Цельсия
    $tc = ($tf - 32) * 5 / 9;

    echo "Температура в градусах Цельсия: $tc";
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 4: Работа с массивами</SubTitle>
            <Text>
              Создайте массив с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'.
              Выведите на экран все его элементы.
            </Text>
            <SubTitle>Задание 5: Работа с функциями</SubTitle>
            <Text>
              Сделайте функцию, которая параметром будет принимать секунды, а
              возвращать количество суток, соответствующих этим секундам.
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"index.php"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php 
    function seconds_to_days($seconds) {
      $days = $seconds / 86400;
      return $days;
    }

    $seconds = 1000;
    $days = seconds_to_days($seconds);
    echo "За 1 секунду проходит $days день(ей).";
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 6: Проверка на простое число</SubTitle>
            <Text>
              Сделайте функцию, которая параметром будет принимать число и
              проверять, простое оно или нет.
            </Text>
            <SubTitle>Задание 7: Работа с формами</SubTitle>
            <Text>
              На странице index.php сделайте форму. Отправьте ее на страницу
              result.php. Проверьте оба метода отправки формы.
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"index.php"}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Форма</title>
</head>
<body>
    <form action="result.php" method="post">
        <input type="text" name="name">
        <button type="submit">Отправить</button>
    </form>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 8: Работа с формами 2.0</SubTitle>
            <Text>
              С помощью формы спросите у пользователя его имя и возраст. После
              отправки формы выведите эти данные на экран.
            </Text>
            <SubTitle>Задание 9*: Валидация пароля </SubTitle>
            <Text>
              Пусть с помощью формы у пользователя спрашивается пароль:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"index.php"}
              code={
                <pre>
                  <code className="language-html">
                    {`<form action="/result.php" method="POST">
  <input type="password" name="pass">
  <input type="submit">
</form>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Пусть на странице с результатом в переменной хранится правильный
              пароль:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"index.php"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
  $pass = '12345';
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Сделайте так, чтобы после отправки формы на странице результата
              сравнивался пароль из переменной и пароль из формы. После
              сравнения сообщите пользователю, правильный он ввел пароль или
              нет.
            </Text>
            <PaginationBlock to={"/Courses/PHP/4"} back={"/Courses/PHP/2"} />
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

export default LessonPHP3;
