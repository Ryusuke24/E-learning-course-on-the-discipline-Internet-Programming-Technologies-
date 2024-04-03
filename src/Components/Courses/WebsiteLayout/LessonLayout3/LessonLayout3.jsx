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

import task2_1 from "./task2_1.png";
import task2_2 from "./task2_2.png";
import task4 from "./task4.png";
import task6 from "./task6.png";

import style from "../LessonStyle.module.scss";

function LessonLayout3() {
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
          title={"Учебный курс по верстке"}
          elems={[
            {
              to: "/courses/Layout/1",
              text: (
                <p>
                  1. Лекция <br />
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
                  2. Лекция <br />
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
                  3. Практическое занятие
                  <br />
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
                  4. Практическое занятие
                  <br />
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
            <Title>
              {" "}
              Практическое занятие 3 : Макетирование и верстка веб-страниц
            </Title>
            <SubTitle>
              Задание 1: Создайте макет страницы с использованием flexbox
            </SubTitle>
            <Text>
              Создайте макет страницы с использованием flexbox, на которой будет
              располагаться следующее:
            </Text>
            <List
              elems={[
                "Вверху страницы логотип и навигация (горизонтальное расположение)",
                "Под навигацией вертикально расположенный блок с категориями товаров, в котором при наведении на категорию должен отображаться список товаров этой категории.",
                "Под блоком категорий товаров должен располагаться слайдер с товарами (горизонтальное расположение), который должен занимать всю оставшуюся ширину страницы.",
              ]}
            />
            <Text>Пример выполнения :</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`* {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: Arial, sans-serif;
      }

      .container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
      }

      .logo-nav {
        display: flex;
        background-color: #f1f1f1;
        padding: 1rem;
        width: 100%;
        justify-content: center;
      }

      .logo-nav__logo {
        padding: 0.5rem;
        font-size: 1.5rem;
        border-radius: 5px;
        background-color: DodgerBlue;
      }

      .logo-nav__navigation {
        flex-grow: 3;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
      .logo-nav__navigation > a {
        text-decoration: none;
        color: black;
      }

      .logo-nav__navigation > a:hover {
        text-decoration: underline;
      }

      .categories {
        width: 100%;
        background: lightblue;
        display: flex;
        justify-content: center;
        gap: 2rem;
        overflow-y: auto;
        transition: max-width 0.3s;
      }

      .categories > div {
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
      }

      .categories > div:hover {
        background: #e9e9e9;
      }

      .slider1,
      .slider2,
      .slider3 {
        margin-top: 10px;
        display: none;
      }

      .products .product {
        padding: 5px 0;
      }

      .products.active {
        display: block;
      }

      /* Media Queries */
      @media screen and (max-width: 768px) {
        .categories {
          max-width: 100vw;
        }
      }`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`
<!DOCTYPE html>
<html lang="“en”">
  <head>
    <meta charset="“UTF-8”" />
    <meta
      name="“viewport”"
      content="“width"
      ="device-width,"
      initial-scale="1.0”"
    />
    <title>Flexbox Page Layout</title>
    <style>
      
    </style>
  </head>
  <body>
    <div class="container">
      <header class="logo-nav">
        <div class="logo-nav__logo">LOGO</div>
        <nav class="logo-nav__navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <!-- Categories Block -->
      <div class="categories">
        <div id="one" class="category">Category 1</div>
        <div id="two" class="category">Category 2</div>
        <div id="three" class="category">Category 3</div>
      </div>
      <main class="products">
        <!-- Product Slider -->
        <ul class="slider1">
          <!-- Add products here -->
          <li class="product">Product 1</li>
          <li class="product">Product 2</li>
          <li class="product">Product 3</li>
        </ul>
        <ul class="slider2">
          <!-- Add products here -->
          <li class="product">Product 4</li>
          <li class="product">Product 5</li>
          <li class="product">Product 6</li>
        </ul>
        <ul class="slider3">
          <!-- Add products here -->
          <li class="product">Product 7</li>
          <li class="product">Product 8</li>
          <li class="product">Product 9</li>
        </ul>
      </main>
    </div>
    <script src="index.js"></script>
  </body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`const categories = document.querySelectorAll(".category");
const firstProductsList = document.querySelector(".slider1");
const secondProductsList = document.querySelector(".slider2");
const thirdProductsList = document.querySelector(".slider3");

for (let category of categories) {
    category.addEventListener("mouseover", () => {
      if (category.id === "one") {
          firstProductsList.style.display = "block";
      } else if (category.id === "two") {
          secondProductsList.style.display = "block";
      } else if (category.id === "three") {
          thirdProductsList.style.display = "block";
      }
    });

    category.addEventListener("mouseout", () => {
      if (category.id === "one") {
          firstProductsList.style.display = "none";
      } else if (category.id === "two") {
          secondProductsList.style.display = "none";
      } else if (category.id === "three") {
          thirdProductsList.style.display = "none";
      }
    });
}`}
                  </code>
                </pre>
              }
            />
            <br />

            <SubTitle>
              Задание 2: Сделайте адаптивный макет страницы, используя flexbox{" "}
            </SubTitle>
            <Text>
              Сделайте адаптивный макет страницы, используя flexbox, с тремя
              колонками, которые должны занимать 25%, 50% и 25% ширины
              соответственно. <br /> Центральная колонка должна быть сменной в
              зависимости от размера экрана:
            </Text>
            <List
              elems={[
                "Для экранов меньше 768px центральная колонка должна занимать 100% ширины, а две другие колонки должны исчезнуть",
                "Для экранов больше 768px центральная колонка должна занимать только 50% ширины экрана, а две остальные должны занять по 25%.",
              ]}
            />
            <Text>Пример выполнения: </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task2_1} alt="task2_1" />
            </div>
            <div className={style.imageContainer}>
              <img className={style.image} src={task2_2} alt="task2_2" />
            </div>
            <SubTitle>
              Задание 3: Создайте holy grail верстку с помощью grid{" "}
            </SubTitle>
            <Text>
              Создайте holy grail верстку с помощью grid. Важно, чтобы футер был
              прибит к низу страницы. <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`.container {
  display: grid;

  grid-template-areas:
    "header header header"
    "nav content side"
    "footer footer footer";

  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 80px;
  grid-gap: 10px;

  height: 100vh;
}

header {
  grid-area: header;
  border: 1px solid black;
}

nav {
  grid-area: nav;
  margin-left: 0.5rem;
  border: 1px solid black;
}

main {
  grid-area: content;
  border: 1px solid black;
}

aside {
  grid-area: side;
  margin-right: 0.5rem;
  border: 1px solid black;
}

footer {
  grid-area: footer;
  border: 1px solid black;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <div class="container">
  <header>
    <!-- Header content -->
  </header>

  <nav>
    <!-- Navigation -->
  </nav>

  <main>
    <!-- Main content -->
  </main>

  <aside>
    <!-- Sidebar / Ads -->
  </aside>

  <footer>
    <!-- Footer content -->
  </footer>
</div>
  </body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>
              Задание 4: Создайте макет новостной ленты в социальных сетях
              используя grid
            </SubTitle>
            <Text>
              Создайте макет новостной ленты в социальных сетях используя grid.
              <br />
              Пример выполнения:
            </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task4} alt="task4" />
            </div>

            <SubTitle>Задание 5 : Работа с анимацией</SubTitle>
            <Text>
              Создайте веб-страницу с текстом, который при наведении курсора
              увеличивается в размере и плавно пульсирует. <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`body {
    padding: 100px;
    font-family: Arial, sans-serif;
}

div {
    text-align: center;
    border: 1px solid black;
    background-color: grey;
    width: 300px;
    height: 300px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
}

div:hover {
    transform: scale(1.2);
    color: red;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<title>Увеличение текста</title>
<style>

</style>
</head>
<body>
<div>
  Пульсация
</div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Задание 6 : Создание параллакс эффекта</SubTitle>
            <Text>
              Создайте веб-страницу с параллакс эффектом на заднем фоне, при
              прокрутке страницы изображения плавно перемещаются вверх. <br />{" "}
              Пример выполнения:
            </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={task6} alt="task6" />
            </div>
            <PaginationBlock
              to={"/Courses/Layout/4"}
              back={"/Courses/Layout/2"}
            />
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

export default LessonLayout3;
