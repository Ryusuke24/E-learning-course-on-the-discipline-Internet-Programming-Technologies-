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

function LessonLayout1() {
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
            <Title>Лекция 1 : Основы макетирования и верстки веб-страниц</Title>
            <SubTitle>
              Создание макета веб-страницы и способы ее верстки
            </SubTitle>
            <Text>
              Как правило, веб-страница состоит из множества различных
              элементов, которые могут иметь сложную структуру. Поэтому при
              создании веб-страницы возникает необходимость нужным образом
              позиционировать эти элементы, стилизовать их так, чтобы они
              располагались на странице нужным образом. То есть возникает вопрос
              создания макета страницы, ее верстки; <br /> Изначально
              распространенной была верстка на основе таблиц (табличная
              верстка). <br />{" "}
              <span className={style.markedText}>Достоинства</span>: <br />{" "}
              таблицы позволяют при необходимости очень легко и просто разделить
              все пространство веб-страницы на строки и столбцы. Строками и
              столбцами довольно легко управлять, в них легко позиционировать
              любое содержимое. <br />{" "}
              <span className={style.markedText}>Недостатки</span>: <br />{" "}
              табличная верстка создает не самые гибкие по дизайну страницы, что
              является особенно актуальным аспектом в мире, где нет одного
              единственного разрешения экрана, зато есть большие экраны на
              телевизорах, малые экраны на планшетах и фаблетах, очень маленькие
              экраны на смартфонах и т.д. Все это многообразие экранов табличная
              верстка оказалась не в состоянии удовлетворить.
            </Text>
            <Text>
              На смену табличной верстке пришла блочная верстка. <br /> Блочная
              верстка - это относительно условное название способов и приемов
              верстки, когда в большинстве веб-страниц для разметки используется
              CSS-свойство float, а основным строительным элементом веб-страниц
              является элемент {"<div>"}, то есть блок. <br /> Используя
              свойство float и элементы div или другие элементы, можно создать
              структуру страницы из нескольких столбцов, как при табличной
              верстке, которая будет значительно гибче. <br /> Свойство float
              используется для выравнивания (обтекания) элемента веб-страницы по
              левой или правой стороне родительского блока.
            </Text>
            <Text>
              Сейчас, в современной разработке используют flex и grid механизмы
              для создания простых и сложных макетов. <br />
              Рассмотрим пример создания двухколоночной веб-страницы c помощью
              flex со следующей структурой: вверху и внизу будут стандартно
              шапка и футер, а в центре - две колонки
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`header,main,footer {
  background-color: grey;
  border: 1px solid black;
}

body {
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

header,footer {
  padding: 25px;
display: flex;
justify-content: center;
}

main {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding:10px;
}

.col1, .col2 {
  background-color: white;
  padding: 25px;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit={"https://onecompiler.com/html/428agmxjg"}
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>Header</header>
    <main>
      <div class="col1">Column 1</div>
      <div class="col2">Column 2</div>
    </main>
    <footer>Footer</footer>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
          </section>
          <Text>
            Flexbox CSS - это современный способ верстки страниц с
            использованием CSS. Он позволяет создавать гибкие и адаптивные
            макеты, которые подстраиваются под различные размеры экранов.
            Flexbox использует свойства display: flex и display: inline-flex для
            создания гибких контейнеров и элементов. <br />
            Основные свойства Flexbox:
          </Text>
          <List
            elems={[
              "flex-direction - определяет направление элементов внутри контейнера;",
              "justify-content - выравнивает элементы по горизонтали",
              "wrap - указывает, как элементы должны переноситься на новую строку",
            ]}
          />
          <Text>
            Приведенный код создает страницу с основным контентом (main),
            разделенным на две колонки (.col1 и .col2). Между колонками есть
            промежуток в 10 пикселей. <br /> Весь контент расположен в
            контейнере с гибким потоком (flex-flow) и с промежутком между
            элементами в 10 пикселей (gap: 10px). <br /> Вверху и внизу страницы
            располагаются блоки header и footer с отступами по 25 пикселей и с
            центрированным содержимым (justify-content: center).
          </Text>
          <div className={style.section2}>
            <Text>
              <em>
                Flex отлично подходит для создания простых макетов и настройкой
                элементов внутри элемента-контейнера
              </em>
            </Text>
          </div>
          <Text>
            Больше о flex -{" "}
            <OuterLink
              to={"https://developer.mozilla.org/ru/docs/Web/CSS/flex"}
            >
              тут
            </OuterLink>{" "}
            <br />И увлекательная игра, которая позволяет немного понять flex -{" "}
            <OuterLink to={"https://flexboxfroggy.com/#ru"}>тут</OuterLink>
          </Text>
          <Text>
            Теперь попробуем создать сложный макет с помощью Grid. <br />{" "}
            Cделаем сложный макет сайта c элементами header,main,footer и двумя
            сайдбарами.
          </Text>
          <CodeBlock
            isInteractive={false}
            isEditable={false}
            lang={"CSS (styles.css)"}
            code={
              <pre>
                <code className="language-css">
                  {`header,main,footer,aside {
  background-color: grey;
  border: 1px solid black;
}

body {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3,1fr);
  grid-template-areas: "header header header"
  "leftAside main . "
  " . main rightAside"
  "footer footer footer";
}

header,footer {
  padding: 25px;
display: flex;
justify-content: center;
}

.leftAside {
  grid-area: leftAside;
}

.rightAside {
  grid-area: rightAside;
}

header {
  grid-area: header;
}

footer {
  grid-area: footer ;
}

main {
  grid-area: main;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding:10px;
}

.col1, .col2 {
  background-color: white;
  padding: 25px;
}`}
                </code>
              </pre>
            }
          />
          <br />
          <CodeBlock
            isInteractive={false}
            isEditable={true}
            linkToEdit={"https://onecompiler.com/html/428ajecgv"}
            lang={"HTML (index.html)"}
            code={
              <pre>
                <code className="language-html">
                  {`
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>Header</header>
    <aside class="leftAside">
      Content
    </aside>
    <main>
      <div class="col1">Column 1</div>
      <div class="col2">Column 2</div>
    </main>
        <aside class="rightAside">
      Content
    </aside>
    <footer>Footer</footer>
  </body>
</html>
`}
                </code>
              </pre>
            }
          />
          <br />
          <Text>
            Grid - это система организации контента на веб-странице, которая
            позволяет упорядочивать элементы с помощью сетки. Grid позволяет
            создавать сложные макеты с несколькими колонками, разной высотой
            элементов и т.д. <br />
            Grid имеет следующие свойства:
          </Text>
          <List
            elems={[
              "display: grid - указывает, что элемент является гридом.",
              "grid-template-rows / columns - задает количество строк и столбцов в сетке.",
              "gap - задает расстояние между элементами.",
              "repeat() / auto-fill() / auto-fit() - заполняют сетку элементами автоматически.",
              "grid-area - задает область элемента в гриде.",
            ]}
          />
          <Text>
            Больше о grid -{" "}
            <OuterLink
              to={"https://developer.mozilla.org/ru/docs/Web/CSS/grid"}
            >
              тут
            </OuterLink>{" "}
            <br />И увлекательная игра, которая позволяет немного понять grid -{" "}
            <OuterLink to={"https://cssgridgarden.com/#ru"}>тут</OuterLink>
          </Text>
          <CodeBlock
            isInteractive={false}
            isEditable={false}
            lang={"CSS (styles.css)"}
            code={
              <pre>
                <code className="language-css">
                  {`header,main,footer,aside {
  background-color: grey;
  border: 1px solid black;
}

body {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3,1fr);
  grid-template-areas: "header header header"
  "leftAside main rightAside "
  "footer footer footer";
}

header,footer {
display: flex;
justify-content: center;
}

.leftAside, .rightAside {
    padding: 10px;
}

.leftAside {
  grid-area: leftAside;
}


.rightAside {
  grid-area: rightAside;
}

header {
  grid-area: header;
  display: flex;
  flex-flow: column wrap;
  
  h1 {
    padding-left: 25px;
  }
  
  nav {

  border : 1px solid black;
  background-color: white;
  height: 50px;

  
  ul {
  
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    
    
    li {
    display: flex;
    
    justify-content: center;
    border-right: 1px solid black;
    
    &:first-child {
      font-weight: bold;
    }
    
    &:last-child {
      border: none;
    }
    }
  }
}
}

footer {
  grid-area: footer ;
  background-color: #242424;
  color: white;
  font-size: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

main {
  grid-area: main;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding:10px;
}

.col1, .col2 {
  background-color: white;
  padding: 25px;
}`}
                </code>
              </pre>
            }
          />
          <br />
          <CodeBlock
            isInteractive={false}
            isEditable={true}
            linkToEdit={"https://onecompiler.com/html/428amueev"}
            lang={"HTML (index.html)"}
            code={
              <pre>
                <code className="language-html">
                  {`
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>MySite.ru - Новостной сайт</h1>
      <nav>
        <ul class="naviation">
          <li>Главная</li>
          <li>Новостная лента</li>
          <li>О нас</li>
        </ul>
      </nav>  
    </header>
        
      <aside class="leftAside">
        <h2>
          Lorem
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent eget tortor vel lacus pretium condimentum. 
          Mauris euismod, tellus non sagittis posuere, 
          urna lectus dignissim ligula, nec convallis odio 
          nisi nec nunc. Maecenas imperdiet erat in urna blandit, 
          eget tincidunt tortor commodo. Sed et felis sed leo varius 
          euismod. Duis et hendrerit mauris.
        </p>
        
      </aside>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent eget tortor vel lacus pretium condimentum. 
            Mauris euismod, tellus non sagittis posuere, urna lectus 
            dignissim ligula, nec convallis odio nisi nec nunc. 
            Maecenas imperdiet erat in urna blandit, eget tincidunt 
            tortor commodo. Sed et felis sed leo varius euismod. 
            Duis et hendrerit mauris. Cras lobortis pulvinar urna eu 
            aliquam. Ut id nisl quis massa dignissim convallis. 
            Suspendisse potenti. Pellentesque a scelerisque nisi. 
            Phasellus ultrices, leo a venenatis vehicula, ex nisi 
            dictum nisl, at lacinia sem ligula eget sem. In hac 
            habitasse platea dictumst.
          </p>
        </main>
        <aside class="rightAside">
          <h2>
            Lorem
          </h2>
          <p>        
            Статья 1 : Lorem ipsum
            Cтатья 2 : Lorem
            Cтатья 3 : ipsum
          </p>
      </aside>
    <footer><p>Контакты : admin@admin.com</p><p>© Copyright MySite.ru, 2024</p></footer>
  </body>
</html>
`}
                </code>
              </pre>
            }
          />
          <br />
          <Title>
            Возможности по трансформации, переходам и анимации содержимого
            веб-страницы
          </Title>
          <SubTitle>Трансформации</SubTitle>
          <Text>
            <span className={style.markedText}>Transform</span> - это свойство
            CSS, которое позволяет изменять положение, размер и форму элемента
            на странице. <br />
            Оно включает в себя несколько свойств, таких как translate(),
            rotate(), scale() и skew(). <br /> Каждое из этих свойств может быть
            использовано для изменения соответствующего аспекта элемента.
            <br />
            Например, свойство translate() перемещает элемент по осям X и Y,
            rotate() вращает элемент, scale() изменяет его размер, а skew()
            искажает его форму. <br />
            Пример поворота блока на 30 градусов:
          </Text>
          <CodeBlock
            isInteractive={false}
            isEditable={false}
            lang={"CSS (styles.css)"}
            code={
              <pre>
                <code className="language-css">
                  {`div {
  height: 100px;
  width: 100px;
  background-color: grey;
  border: 1px solid black;
}

body {
  display: flex;
  gap: 15px;
}

.two {
  transform: rotate(45deg);
}`}
                </code>
              </pre>
            }
          />
          <br />
          <CodeBlock
            isInteractive={false}
            isEditable={true}
            linkToEdit={"https://onecompiler.com/html/428ar9m5u"}
            lang={"HTML (index.html)"}
            code={
              <pre>
                <code className="language-html">
                  {`
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <div class="first"></div>
      <div class="two"></div>
      <div class="three"></div>
  </body>
</html>
`}
                </code>
              </pre>
            }
          />
          <br />
          <Text>
            Больше о свойстве transform -{" "}
            <OuterLink
              to={"https://developer.mozilla.org/ru/docs/Web/CSS/transform"}
            >
              тут
            </OuterLink>{" "}
          </Text>
          <SubTitle>Переходы</SubTitle>
          <Text>
            <span className={style.markedText}>Transition</span> - это свойство
            CSS, которое определяет, как элемент будет переходить из одного
            состояния в другое. <br />
            Например, если вы хотите, чтобы кнопка меняла свой цвет при
            наведении курсора, вы можете использовать transition для определения
            скорости и плавности этого перехода.
          </Text>
          <CodeBlock
            isInteractive={false}
            isEditable={false}
            lang={"CSS (styles.css)"}
            code={
              <pre>
                <code className="language-css">
                  {`div {
  height: 100px;
  width: 100px;
  border: 1px solid black;
  background-color: red;
  transition-property: background-color;
  transition-duration: 3s ;
  &:hover {
    background-color: blue;
  }
}`}
                </code>
              </pre>
            }
          />
          <br />
          <CodeBlock
            isInteractive={false}
            isEditable={true}
            linkToEdit="https://onecompiler.com/html/428avxr73"
            lang={"HTML (index.html)"}
            code={
              <pre>
                <code className="language-html">
                  {`
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div>
      
    </div>
  </body>
</html>
`}
                </code>
              </pre>
            }
          />
          <br />
          <Text>
            Больше о свойстве transition -{" "}
            <OuterLink
              to={"https://developer.mozilla.org/en-US/docs/Web/CSS/transition"}
            >
              тут
            </OuterLink>{" "}
          </Text>
          <SubTitle>Анимация</SubTitle>
          <Text>
            <span>Анимация CSS</span> - это метод создания динамических и
            интерактивных эффектов на веб-страницах с использованием только CSS.
            Она позволяет анимировать различные свойства элементов, такие как
            изменение размера, цвета, прозрачности, перемещения и многое другое.
            <br />
            <br />
            CSS-анимация может быть применена к любому элементу HTML, который вы
            хотите анимировать, и позволяет создавать различные виды
            анимационных эффектов, включая линейные переходы, затухания,
            вращения, масштабирование и т. д.
            <br />
            <br />
            Анимации CSS могут быть определены с помощью ключевых кадров,
            которые определяют начальное и конечное состояние элемента, а также
            промежуточные шаги, через которые элемент должен пройти во время
            анимации. Более того, можно определить различные типы циклов
            анимации, такие как бесконечный цикл или определенное количество
            повторений.
            <br />
            <br />
            Анимация опирается на последовательно смену ключевых кадров
            (keyframes). Каждый ключевой кадр определяет один набор значений для
            анимируемых свойств. Последовательная смена таких ключевых кадров
            фактически будет представлять анимацию.
            <br />
            Пример объявления ключевого кадра в CSS 3:
          </Text>
          <CodeBlock
            isInteractive={false}
            isEditable={false}
            lang={"CSS"}
            code={
              <pre>
                <code className="language-css">
                  {`@keyframes название_анимации {
    from {
      /* начальное значение */
    }                
    to {
      /* конечное значение */
    }              
}`}
                </code>
              </pre>
            }
          />
          <br />
          <Text>
            После ключевого слова @keyframes идет имя анимации.
            <br /> Затем в фигурных скобках определяются как минимум два
            ключевых кадра.
            <br /> Блок после ключевого слова from объявляется начальный
            ключевой кадр, а после ключевого слова to в блоке определяется
            конечный ключевой кадр.
            <br />
            Внутри каждого ключевого кадра определяется одно или несколько
            свойств CSS, подобно тому, как создается обычный стиль.
            <br />
            Пример определения анимации для фонового цвета элемента:
          </Text>
          <CodeBlock
            isInteractive={false}
            isEditable={false}
            lang={"CSS (styles.css)"}
            code={
              <pre>
                <code className="language-css">
                  {`div {
  height: 100px;
  width: 100px;
  border: 1px solid black;
  background-color: red;
  &:hover {
    animation: BgAnimation 3s infinite;
  }
}

@keyframes BgAnimation {
  0% {
    background-color: red;
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: green;
  }
  75% {
    background-color: orange;
  }
  100% {
    background-color: blue;
  }
}`}
                </code>
              </pre>
            }
          />
          <br />
          <CodeBlock
            isInteractive={false}
            isEditable={true}
            linkToEdit="https://onecompiler.com/html/428awj8ee"
            lang={"HTML (index.html)"}
            code={
              <pre>
                <code className="language-html">
                  {`
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div>
      
    </div>
  </body>
</html>
`}
                </code>
              </pre>
            }
          />
          <br />
          <Text>
            Больше о свойстве animation -{" "}
            <OuterLink
              to={"https://developer.mozilla.org/en-US/docs/Web/CSS/animation"}
            >
              тут
            </OuterLink>{" "}
          </Text>
          <PaginationBlock to={"/Courses/Layout/2"} back={"/Courses/Layout"} />
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

export default LessonLayout1;
