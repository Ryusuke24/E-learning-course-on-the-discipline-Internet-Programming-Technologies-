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
            <List
              elems={[
                "Шестнадцатеричное значение. Например : #1C4463",
                `Значение RGB и RGBA. Обычно применяется диапазон от 0 до 126. Значение А (alpha) - компонент прозрачности, допустимые значения от 0 до 1, где 0 - полностью прозрачный, 1 - не прозрачный (этот параметр не обязателен). Например : rgb(28,68,99, 0.6).
                 `,
                "Значение HSL и HSLA. HSL представляет аббревиатуру: Hue — тон, Saturation — насыщенность и Lightness — осветленность. Значение А (alpha) - компонент прозрачности, допустимые значения от 0 до 1, где 0 - полностью прозрачный, 1 - не прозрачный (этот параметр не обязателен). Например : hsl(206,56%,25%)",
              ]}
            />

            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`
    body {
         font-family : Arial;
    }`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
    rel="stylesheet">
    <title>Document</title>
  </head>
  <body>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
          </section>
          <SubTitle>Высота шрифта</SubTitle>
          <Text>
            Для установки шрифта испольется свойсво font-size <br />
            Размер шрифта устанавливается :
          </Text>
          <List
            elems={[
              "Пикселями. Пример p { font-size: 24px; }",
              "Процентами. Пример p { font-size: 50%; }",
              "Единицами em. Пример p { font-size: 1.5em; }",
            ]}
          />
          <SubTitle>Форматирование текста: text-decoration</SubTitle>
          <Text>
            Свойство text-decoration позволяет добавить к тексту некоторые
            дополнительные эффекты. Это свойство может принимать следующие
            значения:
          </Text>
          <List
            elems={[
              "underline: подчеркивает текст;",
              "overline: надчеркивает текст, проводит верхнюю линию;",
              "line-through: зачеркивает текст;",
              "none: к тексту не применяется декорирование",
            ]}
          />
          <SubTitle>Форматирование текста: text-transform</SubTitle>
          <Text>
            Свойство text-transform изменяет регистр текста. Оно может принимать
            следующие значения:
          </Text>
          <List
            elems={[
              "capitalize: делает первую букву слова заглавной;",
              "uppercase: все слово переводится в верхний регистр;",
              "lowercase: все слово переводится в нижний регистр;",
              "none: регистр символов слова никак не изменяется.",
            ]}
          />
          <SubTitle>Форматирование текста: межсимвольный интервал</SubTitle>
          <Text>
            Два свойства CSS позволяют управлять интервалом между символами и
            словами текста. Для межсимвольного интервала применяется атрибут
            <span className={style.markedText}>letter-spacing</span>, а для
            интервала между словами -{" "}
            <span className={style.markedText}>word-spacing</span> :
          </Text>
          <SubTitle>Форматирование текста: text-shadow</SubTitle>
          <Text>
            С помощью свойства text-shadow можно создать тени для текста. Для
            этого свойства необходимо задать четыре значения: горизонтальное
            смещение тени относительно текста, вертикальное смещение тени
            относительно текста, степень размытости тени и цвет отбрасываемой
            тени.
          </Text>
          <CodeBlock
            isInteractive={false}
            isEditable={false}
            lang={"CSS (styles.css)"}
            code={
              <pre>
                <code className="language-css">
                  {`.one {
  font-size: 20px;
  text-decoration: underline;
  text-transform: capitalize;
  letter-spacing: 10px;
  
}

.two {
  font-size: 75%;
  text-decoration: overline;
  text-transform: uppercase;
  text-shadow: 5px 4px 3px black;
}

.three {
  font-size: 2em;
  text-decoration: line-through;
  text-transform: lowercase;
  word-spacing: 30px;
}`}
                </code>
              </pre>
            }
          />
          <br />
          <CodeBlock
            isInteractive={false}
            isEditable={true}
            linkToEdit="https://onecompiler.com/html/427qef6ty"
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
    <p class="one">Lorem ipsum</p>
    <p class="two">Lorem ipsum</p>
    <p class="three">Lorem ipsum</p>
  </body>
</html>
`}
                </code>
              </pre>
            }
          />
          <br />

          <PaginationBlock to={"/Courses/CSS/2"} back={"/Courses/CSS/"} />
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
