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

function LessonJS4() {
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
          title={"Учебный курс по JavaScript"}
          elems={[
            {
              to: "/courses/JS/1",
              text: (
                <p>
                  1. Лекция <br />
                  <span className={style.markedText}>Основы JavaScript</span>
                </p>
              ),
            },
            {
              to: "/courses/JS/2",
              text: (
                <p>
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Работа с Document и Browser Object Model (Dom и Bom)
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/JS/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Разработка скриптов на языке JavaScript
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/JS/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок применения средств разработки скриптов для
                    веб-страниц на языке JavaScript
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/JS/test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме JavaScript
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>
              Практическое занятие 4 : Порядок применения средств разработки
              скриптов для веб-страниц на языке JavaScript
            </Title>

            <SubTitle>Задание 1: Работа с датами</SubTitle>
            <Text>
              Создайте объект Date и вeрните текущую дату и время. <br />
              Пример выполнения:{" "}
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let date = new Date();
alert(date);`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 2: Работа с массивами</SubTitle>
            <Text>
              Используя метод map, возведите в 3 степень каждое значение и
              получите преобразованный массив, далее с помощью метода filter
              отфильтруйте значения. <br /> Входные данные :{" "}
              {"[1,2,3,4,5,6,7,8,9,10]"}
            </Text>
            <SubTitle>
              Задание 3: Нахождение корней квадратного уравнения
            </SubTitle>
            <Text>
              Напишите функцию, которая вычисляет корни квадратного уравнения,
              учитывая случаи, когда дискриминант больше или равен 0, при
              отрицательном дискриминанте выводите сообщение : "Дискриминант
              меньше нуля" (Используйте объект Math для возведения в степень)
            </Text>
            <SubTitle>Задание 4: Получите сведения о браузере</SubTitle>
            <Text>
              Получте информацию о браузере пользователя, такой как разрешение
              экрана, версия браузера и т. д., с использованием JavaScript.
              Выведите результаты в консоль.
            </Text>
            <SubTitle>Задание 5: Работа с DOM</SubTitle>
            <Text>
              Cоздайте произвольный элемент и поместите его в начало тега{" "}
              {"<body>"}. Измените его цвет фона на черный, а шрифт на белый с
              помощью JavaScript.
            </Text>
            <SubTitle>Задание 6: Создайте таймер</SubTitle>
            <Text>
              Создайте таймер, который каждую секунду будет выводить в консоль
              текущее время.
            </Text>
            <SubTitle>
              Задание 7: Создайте игру "Камень-Ножницы-Бумага"
            </SubTitle>
            <Text>
              При нажатии на кнопку, двум переменным player1 и player2
              присваивается случайное значение(Камень,Ножницы или бумага) и они
              сравниваются. Далее информация выводится на экран, в которой будет
              указанны данные: Жест первого игрока, жест второго игрока, и
              результаты.
            </Text>
            <SubTitle>Задание 7: Работа с jQuery</SubTitle>
            <Text>
              Добавить кнопку на страницу, ее функциона при нажатии либо
              скрывать параграф, либо отображать параграф. Выполните все
              операции с помощью jQuery.
            </Text>
            <SubTitle>Задание 9*: Создать галерею изображений </SubTitle>
            <Text>
              Создать галерею изображений, где при наведении на изображение оно
              увеличивается.
            </Text>
            <PaginationBlock to={"/Courses/JS/test"} back={"/Courses/JS/3"} />
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

export default LessonJS4;
