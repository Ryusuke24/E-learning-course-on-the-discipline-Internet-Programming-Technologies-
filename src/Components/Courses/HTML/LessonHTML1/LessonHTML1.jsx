import { Avatar } from "@mui/material";
import { CommentsBlock } from "../../../CommentsBlock/CommentsBlock";
import style from "./LessonHTML1.module.scss";
import Prism from "prismjs";
import "../../../../prism.css";
import runButtonSVG from "../../RunButton.svg";
import editButtonSVG from "../../EditButton.svg";
import leftButtonSVG from "../../LeftButton.svg";
import rightButtonSVG from "../../RightButton.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

function LessonHTML1() {
  const imageUrl = "https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg";
  const [isClicked, setClick] = useState();
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div className={style.container}>
        {isClicked ? (
          <div className={style.navigationMenu}>
            <div className={style.closeMenuButton}>
              <Hamburger toggled={isClicked} toggle={setClick} />
            </div>{" "}
            <div className={style.list}>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className={style.openMenuButton}>
            <Hamburger toggled={isClicked} toggle={setClick} />
          </div>
        )}

        <div className={style.main}>
          <section className={style.section1}>
            <h1 className={style.title}>
              Электронный учебный курс по дисциплине "Технологии интернет
              программирования"
            </h1>
            <p className={style.text}>
              В рамках улучшения качества обучения учащихся и поддержки освоения
              дисциплины "Технологии интернет программирования" реализован
              данный проект
            </p>
            <h1 className={style.subTitle}>Цели и задачи дисциплины</h1>
            <p className={style.text}>
              <span className={style.markedText}>Основная цель</span> —
              получение обучающимися современных знаний о методах и средствах
              технологий интернет-программирования (ТИП), а также формирование
              навыков их самостоятельной применения при разработке прикладного
              программного обеспечения вычислительной техники и
              автоматизированных систем (ППО ВТ и АС).
            </p>
            <h2 className={style.subTitle}>Задачи изучения дисциплины</h2>
            <ul className={style.list}>
              <li>
                Формирование знаний о современных методах, средствах и
                тенденциях разработки сайтов и SPA-приложений;
              </li>{" "}
              <li>
                Овладение инструментальными средствами ТИП при разработке
                разработки сайтов и SPA-приложений;
              </li>{" "}
              <li>
                Овладение практическими навыками разработки сайтов и
                SPA-приложений.
              </li>
            </ul>
            <div className={style.codeBlock}>
              <p>JavaScript</p>
              <div className={style.codeBlockButtons}>
                <a href="#">
                  <img src={runButtonSVG} alt="Run" />
                </a>
                <a href="#">
                  <img src={editButtonSVG} alt="Edit" />
                </a>
              </div>
            </div>
            <pre>
              <code className="language-javascript">
                {`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  }
 `}{" "}
              </code>
            </pre>
            <section className={style.paginationBlock}>
              <Link to={"/"}>
                <img src={leftButtonSVG} alt="left" />
              </Link>
              <Link to={"/"}>
                <img src={rightButtonSVG} alt="Right" />
              </Link>
            </section>
          </section>
          <section className={style.commentBlock}>
            <div className={style.addCommentBlock}>
              {imageUrl ? (
                <img className={style.avatar} src={imageUrl} alt="avatar" />
              ) : (
                <Avatar />
              )}
              <div className={style.addComment}>
                {" "}
                <textarea placeholder="Ваш комментарий" />
                <button>Оставить комментарий</button>
              </div>
            </div>
            <div className={style.comments}></div>
          </section>
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий 555555",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </div>
      </div>
    </>
  );
}

export default LessonHTML1;
