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

function LessonPHP4() {
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
              Практическое занятие 4 : Порядок применения средств разработки
              скриптов для веб-страниц на языке PHP
            </Title>
            <SubTitle>Задание 1: Работа с cookie</SubTitle>
            <Text>Настройте и выведите cookie</Text>
            <br />
            <SubTitle>Задание 2: Работа с сессиями</SubTitle>
            <Text>Запустите сессию и получите данные</Text>
            <br />
            <SubTitle>Задание 3: ООП в PHP </SubTitle>
            <Text>
              Cоздайте класс Employee в который входят данные работника
              (возраст, стаж, имя, фамилия, должность, зарплата и метод, который
              возвращает годовую зарплату работника)
            </Text>
            <br />
            <SubTitle>Задание 4: Работа с БД</SubTitle>
            <Text>
              Пройдите задания в данном{" "}
              <OuterLink
                to={
                  "https://code.mu/ru/php/book/prime/database/test-table-users/"
                }
              >
                курсе
              </OuterLink>
            </Text>

            <PaginationBlock to={"/Courses/PHP/test"} back={"/Courses/PHP/3"} />
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

export default LessonPHP4;
