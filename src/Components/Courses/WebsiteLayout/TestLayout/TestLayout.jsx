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

function TestLayout() {
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
          title={"Учебный курс PHP"}
          elems={[
            {
              to: "/courses/Layout/1",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Основы макетирования и верстки веб-страниц
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/Layout/2",
              text: (
                <p>
                  Лекция 2.
                  <br />{" "}
                  <span className={style.markedText}>
                    Основы применения адаптивного дизайна и мультимедиа при
                    верстке веб-страниц
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/Layout/3",
              text: (
                <p>
                  Практическое занятие 3. <br />
                  <span className={style.markedText}>
                    Порядок макетирования и верстки веб-страниц
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/Layout/4",
              text: (
                <p>
                  Практическое занятие 4.
                  <br />{" "}
                  <span className={style.markedText}>
                    Порядок применения современных средств макетирование и
                    верстка веб-страниц с применением адаптивного дизайна и
                    мультимедиа
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/Layout/test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме Верстка
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
              <OuterLink to={"https://forms.office.com/e/Dj52gVkSWm"}>
                Тестирование по верстке
              </OuterLink>
            </Text>
            <PaginationBlock to={"/Courses"} back={"/Courses/Layout/4"} />
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

export default TestLayout;
