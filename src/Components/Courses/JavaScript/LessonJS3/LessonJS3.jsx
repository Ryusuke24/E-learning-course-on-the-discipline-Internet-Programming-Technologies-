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

function LessonJS3() {
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
              Практическое занятие 3 : Разработка скриптов на языке JavaScript
            </Title>
            <Title>Порядок создания веб-сценариев на языке JavaScript.</Title>
            <SubTitle>Задание 1: Создание окна оповещения</SubTitle>
            <Text>
              Разработать функцию для вывода окна оповещения с заданным
              сообщением. <br />
              Пример выполнения:{" "}
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`alert('Hello world');`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 2: Создать функцию суммурования</SubTitle>
            <Text>
              Создать функцию, которая принимает два числа (a и b) и возвращает
              их сумму. Вызвать эту функцию и проверить правильность ее работы.
            </Text>
            <SubTitle>Задание 3: Создание рекурсивной функции</SubTitle>
            <Text>
              Напишите рекурсивную функцию, которая вычисляет факториал числа.
              Факториал числа - это произведение всех целых чисел от 1 до этого
              числа включительно. Например, факториал числа 5 равен 120 (5! = 1
              × 2 × 3 × 4 × 5 = 120). <br />
              Пример выполнения:{" "}
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`function factorial(n) {
  if (n === 0 || n < 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
 Продолжи   
}
alert(factorial(5)); // Должно вывести 120`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 4: Создайте Employee</SubTitle>
            <Text>
              Создание класса Employee с свойствами name, id и salary, а также
              методов для получения информации об сотруднике (getInfo()),
              изменения зарплаты (setSalary()) и добавления отработанных часов
              (addHours()):
            </Text>
            <SubTitle>Задание 5: Функция проверки на простое число. </SubTitle>
            <Text>
              Cоздайте функцию, которая генерирует случайное число и определяет
              является ли оно простым. <br />
              Например, если случайно сгенерировалось число 5, вывод будет
              такой:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`// generated number = 5. IsPrime : true`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 6: Проверка на палиндром</SubTitle>
            <Text>
              В переменной X лежит какое-то целое число или строка. Проверить,
              является ли это вводное значение палиндромом. (задача должна быть
              нечувствительна к регисту)
              <br />
              Например, если случайно сгенерировалось число 12321, вывод будет
              такой:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`// true`}</code>
                </pre>
              }
            />
            <br />
            <Text>Если qwerty</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`// false`}</code>
                </pre>
              }
            />
            <SubTitle>Задание 7: Нахождение делителей</SubTitle>
            <Text>
              Написать функцию, которая получает на вход число и выводит все
              делители этого числа. Вывод оформить в виде массива делителей.
            </Text>
            <PaginationBlock to={"/Courses/JS/4"} back={"/Courses/JS/2"} />
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

export default LessonJS3;
