import {
  PaginationBlock,
  AddComment,
  List,
  SubTitle,
  Text,
  Title,
  CodeBlock,
  Menu,
} from "../../../../Elements/index";
import { CommentsBlock } from "../../../CommentsBlock/CommentsBlock";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../../../redux/comments";
import { useState } from "react";

import style from "./LessonHTML1.module.scss";

function LessonHTML1() {
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
                  Лекция 1. <br />
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
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Введение. <br /> Основы разработки интернет-приложений
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/HTML/3",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Введение. <br /> Основы разработки интернет-приложений
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/HTML/4",
              text: (
                <p>
                  Лекция 1. <br />
                  <span className={style.markedText}>
                    Введение. <br /> Основы разработки интернет-приложений
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>
              Электронный учебный курс по дисциплине "Технологии интернет
              программирования"
            </Title>
            <Text>
              В рамках улучшения качества обучения учащихся и поддержки освоения
              дисциплины "Технологии интернет программирования" реализован
              данный проект
            </Text>
            <SubTitle>Цели и задачи дисциплины</SubTitle>
            <Text>
              <span className={style.markedText}>Основная цель</span> —
              получение обучающимися современных знаний о методах и средствах
              технологий интернет-программирования (ТИП), а также формирование
              навыков их самостоятельной применения при разработке прикладного
              программного обеспечения вычислительной техники и
              автоматизированных систем (ППО ВТ и АС).
            </Text>
            <SubTitle>Задачи изучения дисциплины</SubTitle>
            <List
              elems={[
                "Формирование знаний о современных методах, средствах итенденциях разработки сайтов и SPA-приложений;",
                "Овладение инструментальными средствами ТИП при разработкеразработки сайтов и SPA-приложений;",
                "Овладение практическими навыками разработки сайтов иSPA-приложений.",
              ]}
            ></List>
            <CodeBlock
              linkToEdit="https://onecompiler.com/html/424mce2cc"
              lang={"JavaScript"}
              code={
                <pre>
                  <code className="language-javascript">
                    {`
  alert('Hello world')
  let obj = { a : 1}
  alert(obj.a)`}
                  </code>
                </pre>
              }
            />
            <PaginationBlock to={"/Courses/HTML/2"} back={"/Courses/HTML/"} />
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
                }) || []
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

export default LessonHTML1;
