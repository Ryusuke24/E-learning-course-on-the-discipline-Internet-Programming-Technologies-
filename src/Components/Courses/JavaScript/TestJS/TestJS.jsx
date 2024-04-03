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

function TestJS() {
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
          title={"Учебный курс JavaScript"}
          elems={[
            {
              to: "/courses/JS/1",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>Основы JavaScript</span>
                </p>
              ),
            },
            {
              to: "/courses/JS/2",
              text: (
                <p>
                  Лекция 2.
                  <br />{" "}
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
                  Практическое занятие 3. <br />
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
                  Практическое занятие 4.
                  <br />{" "}
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
            <Title>Тестирование</Title>
            <Text>
              Пройдите тестирование по данной ссылке :{" "}
              <OuterLink to={"https://forms.office.com/e/BWZ1c8VtFW"}>
                Тестирование JavaScript
              </OuterLink>
            </Text>
            <PaginationBlock to={"/Courses"} back={"/Courses/JS/4"} />
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

export default TestJS;
