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

import BoxModel from "./box-model-prop.png";

function LessonCSS2() {
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
          title={"Учебный курс CSS"}
          elems={[
            {
              to: "/courses/CSS/1",
              text: (
                <p>
                  1. Лекция <br />
                  <span className={style.markedText}>
                    Основы представления веб-страниц с помощью стилей CSS
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/CSS/2",
              text: (
                <p>
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Порядок настройки свойств стилей CSS
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/CSS/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок представления веб-страниц с помощью CSS
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/CSS/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок применения современных средств разработки
                    представления веб-страниц с CSS
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title> Лекция 2 : Порядок настройки свойств стилей CSS 3</Title>
            <SubTitle>Цвет в CSS</SubTitle>
            <Text>
              В CSS есть несколько различных свойств, которые в качестве
              значения требует определенный цвет. <br /> Например, за установку
              цвета текста отвечает свойство color, за установку цвета фона
              элемента - свойство background-color, а за установку цвета границы
              - border-color. <br />
              <span className={style.markedText}>
                Способы определения цвета текста:
              </span>
            </Text>
            <List
              elems={[
                "Шестнадцатеричное значение. Например : #1C4463",
                `Значение RGB и RGBA. Обычно применяется диапазон от 0 до 126. Значение А (alpha) - компонент прозрачности, допустимые значения от 0 до 1, где 0 - полностью прозрачный, 1 - не прозрачный (этот параметр не обязателен). Например : rgb(28,68,99, 0.6).
                 `,
                "Значение HSL и HSLA. HSL представляет аббревиатуру: Hue — тон, Saturation — насыщенность и Lightness — осветленность. Значение А (alpha) - компонент прозрачности, допустимые значения от 0 до 1, где 0 - полностью прозрачный, 1 - не прозрачный (этот параметр не обязателен). Например : hsl(206,56%,25%)",
              ]}
            />
            <SubTitle> Цвет в CSS: прозрачность </SubTitle>
            <Text>
              Ряд настроек цвета позволяют установить значение для
              альфа-компоненты, которая отвечает за прозрачность. <br /> Но
              также в CSS есть специальное свойство, которое позволяет
              установить прозрачность элементов - свойство opacity. <br /> В
              качестве значения оно принимает число от 0 (полностью прозрачный)
              до 1 (не прозрачный):
            </Text>
            <SubTitle> Стилизация шрифтов: семейство шрифтов </SubTitle>
            <Text>
              Свойство font-family устанавливает семейство шрифтов, которое
              будет использоваться. Пример установки шрифта Arial:
            </Text>
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
            <Text>
              Шрифт свойства font-family будет работать, только если у
              пользователя на локальном компьютере имеется такой же шрифт. По
              этой причине нередко выбираются стандартные шрифты, которые широко
              распространены, как Arial, Verdana и т.д. Также нередко
              применяется практика нескольких шрифтов:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`
    body {
         font-family : Arial, Verdana, sans-serif;
    }`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Стилизация шрифтов: стиль шрифта</SubTitle>
            <Text>
              Свойство font-weight задает толщину шрифта. Оно может принимать 9
              числовых значений: 100, 200, 300, 400,...900. 100 - очень тонкий
              шрифт, 900 - очень плотный шрифт. <br /> В реальности чаще для
              этого свойства используют два значения: normal (нежирный обычный
              текст) и bold (полужирный шрифт):
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`p {
         font-weight : 900;
         font-style: italic;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Внешние шрифты</SubTitle>
            <Text>
              Не всегда стандартные встроенные шрифты, как Arial или Verdana,
              могут быть удобны.
              <br /> Нередко встречается ситуация, когда веб-дизайнер хочет
              воспользоваться возможностями какого-то другого шрифта, которого
              нет среди встроенных, но который доступен из внешнего файла. Такой
              шрифт можно подключить либо с помощью директивы font-face:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`@font-face {
    font-family : 'Roboto';
    src:url("fonts/roboto.ttf");
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              В качестве альтернативы можно загрузить файл шрифта на локальный
              компьютер и уже оттуда подгружать его на веб-страницу. Как
              правило, для хранения своих шрифтов рядом с веб-страницей
              создается папка fonts <br />
              Каждый шрифт должен определять отдельный стиль для обычного
              текста, для текста, выделенного курсивом, для текста, выделенного
              жирным, для текста, сочетающего выделение жирным и курсивом и т.д.
              <br /> Чтобы браузер мог автоматически распознавать разные
              варианты шрифта, к директиве @font-face добавляются свойства
              font-weight и font-style, которые соответственно устанавливают
              выделение жирным и выделение курсивом:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`@font-face {
    font-family : 'Roboto';
    src:url("fonts/roboto.ttf");
    font-weight : normal;
    font-style: normal;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>
              Альтернативные варианты использования сторонних шрифтов
            </SubTitle>
            <Text>Загрузка через .html файл. Пример: </Text>
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
              Свойство text-transform изменяет регистр текста. Оно может
              принимать следующие значения:
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
            <Title>Порядок настройки групп свойств стилей CSS</Title>
            <SubTitle>Стилизация абзацев: line-height</SubTitle>
            <Text>
              Свойство line-height определяет межстрочный интервал. Для его
              установки можно использовать пиксели, проценты или единицы em. Как
              правило, применяются либо проценты, либо em.
            </Text>
            <SubTitle>. Стилизация абзацев: text-align (устаревшее)</SubTitle>
            <Text>
              Свойство text-align выравнивает текст относительно одной из сторон
              веб-страницы. Оно принимает следующие значения:
            </Text>
            <List
              elems={[
                "left: текст выравнивается по левой стороне;",
                "right: текст выравнивается по правой стороне",
                "justify: выравнивание по ширине, слова равномерно распределяются по строке;",
                "center: выравнивание по центру",
              ]}
            />
            <SubTitle>Стилизация списков: list-style-type</SubTitle>
            <Text>
              CSS предоставляет специальные свойства по стилизации списков.
              Одним из таких свойств является list-style-type. Оно может
              принимать следующие значения для нумерованных списков:
            </Text>
            <List
              elems={[
                "decimal: десятичные числа, отсчет идет от 1",
                "decimal-leading-zero: десятичные числа, которые предваряются нулем, например, 01, 02, 03, … 98, 99;",
                "lower-roman: строчные латинские цифры, например, i, ii, iii, iv, v;",
                "upper-roman: заглавные латинские цифры, например, I, II, III, IV, V…;",
                "lower-alpha: строчные латинские буквы, например, a, b, c..., z;",
                "upper-alpha: заглавные латинские буквы, например, A, B, C, … Z.",
                "none: отключает нумерацию",
              ]}
            />
            <Text>Для ненумерованных списков</Text>
            <List
              elems={[
                "disk: черный диск",
                "circle: пустой кружочек;",
                "square: черный квадратик.",
              ]}
            />
            <SubTitle>Стилизация списков: list-style-image</SubTitle>
            <Text>
              Свойство list-style-image позволяет задать в качестве маркера
              изображение. <br />
              Свойство list-style-image в качестве значения принимает путь к
              изображению url(phone_touch.png), где "phone_touch.png" - это
              название файла изображения. То есть в данном случае
              предполагается, что в одной папке с веб-страницей находится файл
              изображения phone_touch.png.
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`ul {
  line-height: 50px;
  text-align: center;
  list-style-type: square;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427qgm35t"
              lang={"HTML"}
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
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Title>
              Порядок настройки свойств стилей CSS 3 для блочной модели
              содержимого
            </Title>
            <SubTitle>Блочная модель</SubTitle>
            <Text>
              Для веб-браузера элементы страницы представляют небольшие
              контейнеры или блоки. Такие блоки могут иметь различное содержимое
              - текст, изображения, списки, таблицы и другие элементы.
              Внутренние элементы блоков сами выступают в качестве блоков.{" "}
              <br /> Схема блочной модели:
            </Text>
            <div className={style.imageContainer}>
              <img className={style.image} src={BoxModel} alt="box-model" />
            </div>
            <Text>
              Пусть элемент расположен в каком-нибудь внешнем контейнере: body,
              div и так далее. От других элементов он отделяется некоторым
              расстоянием - внешним отступом, которое описывается свойством CSS
              <span className={style.markedText}> margin</span>. Внешний отступ
              определяет расстояние от границы текущего элемента до других
              соседних элементов или до границ внешнего контейнера.
              <br />
              Далее начинается сам элемент. И в начале идет его граница, которая
              в CSS описывается свойством{" "}
              <span className={style.markedText}>border</span>.
              <br />
              После границы идет внутренний отступ, который в CSS описывается
              свойством <span className={style.markedText}>padding</span>.
              Внутренний отступ определяет расстояние от границы элемента до
              внутреннего содержимого.
              <br /> Далее идет внутреннее содержимое, которое также реализует
              ту же блочную модель и также может состоять из других элементов;
              имеют внешние и внутренние отступы и границу. Больше о блочной
              модели{" "}
              <OuterLink to={"https://doka.guide/css/box-model/"}>
                тут
              </OuterLink>
            </Text>
            <SubTitle>Внешние отступы</SubTitle>
            <Text>
              Свойство margin определяет отступ элемента от других элементов или
              границы внешнего контейнера. Существуют специальные свойства CSS
              для задания отступов для каждой стороны:
            </Text>
            <List
              elems={[
                "margin-top: отступ сверху;",
                "margin-bottom: отступ сниз",
                "margin-left: отступ слева;",
                "margin-right: отступ справа.",
              ]}
            />
            <Text>
              Можно вместо четырех свойств задать одно{" "}
              <span className={style.markedText}>margin</span>
              <br /> Пример:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`.block {
  margin-left: 15px;
  margin-top: 15px;
}

.block2 {
  margin: 15px 0 0 15px;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Эти записи аналогичны
              <br />
              Для установки отступов можно использовать точные значения в
              пикселях (px) или em, либо процентные отношения, либо значение
              auto (автоматическая установка отступов)
            </Text>
            <SubTitle>Внутренние отступы</SubTitle>
            <Text>
              Свойство padding задает внутренние отступы от границы элемента до
              его внутреннего содержимого. В CSS имеются четыре свойства,
              которые устанавливают отступы для каждой из сторон:
            </Text>
            <List
              elems={[
                "padding-top: отступ сверху;",
                "padding-bottom: отступ сниз",
                "padding-left: отступ слева;",
                "padding-right: отступ справа.",
              ]}
            />
            <Text>
              Можно вместо четырех свойств задать одно{" "}
              <span className={style.markedText}>margin</span>
              <br /> Пример:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`.block {
  padding: 15px 30px;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Запись означает внутренние отступы сверху/снизу, слева/справа
            </Text>
            <SubTitle>Границы</SubTitle>
            <Text>
              Граница отделяется элемент от внешнего по отношению к нему
              содержимого. При этом граница является частью элемента. <br />
              Для настройки границы могут использоваться сразу несколько свойств
              (например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`p { border : 1px solid black; }`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше узнать о свойстве border можно{"  "}
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/CSS/border"}
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Границы: радиус границы</SubTitle>
            <Text>
              Свойство border-radius позволяет округлить границу. Это свойство
              принимает значение радиуса в пикселях или единицах em. <br />
              Можно указать четыре значения для установки радиуса у каждого
              углов:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`div {
  width: 100px;
  height: 100px;
  text-align: center;
}

.one {
  margin: 20px 10px 20px 10px;
  background-color: blue ;
  border-radius: 15px;
  
}

.two {
  padding: 10px;
  background-color: yellow ;
}

.three {
  background-color: green ;
  border: 2px solid red;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427qm5twg"
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
      <div class="one">text</div>
      <div class="two">text</div>
      <div class="three">text</div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Title>
              Порядок настройки свойств стилей CSS 3 элементов содержимого
            </Title>
            <SubTitle>Размеры элементов</SubTitle>
            <Text>
              Размеры элементов задаются с помощью свойств width (ширина) и
              height (высота). <br />
              Значение по умолчанию для этих свойств - auto, то есть браузер сам
              определяет ширину и высоту элемента. Можно также явно задать
              размеры с помощью единиц измерения (пикселей, em) или с помощью
              процентов:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`p { 
    width : 150px; 
    height: 300px;
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Пиксели определяют точные ширину и высоту. Единица измерения em
              зависит от высоты шрифта в элементе. Если размер шрифта элемента,
              к примеру, равен 16 пикселей, то 1 em для этого элемента будет
              равен 16 пикселям. То есть если у элемента установить ширину в
              15em, то фактически она составит 15 * 16 = 230 пикселей. Если же у
              элемента не определен размер шрифта, то он будет взят из
              унаследованных параметров или значений по умолчанию.
            </Text>
            <div className={style.section2}>
              <Text>
                Все реже используется данное свойство т.к Grid и Flex, позволяют
                делать элементы более гибкими
              </Text>
            </div>
            <Text>
              Процентные значения для свойства width вычисляются на основании
              ширины элемента-контейнера. <br /> Если, к примеру, ширина
              элемента body на веб-странице составляет 1000 пикселей, а
              вложенный в него элемент {"<div>"} имеет ширину 75%, то
              фактическая ширина этого блока
              {"<div>"} составляет 1000 * 0.75 = 750 пикселей. <br /> Если
              пользователь изменит размер окна браузера, то ширина элемента body
              и соответственно ширина вложенного в него блока div тоже
              изменится. <br /> Процентные значения для свойства height работают
              аналогично свойству width, только теперь высота вычисляется по
              высоте элемента-контейнера. <br />
              Свойство box-sizing позволяет переопределить установленные размеры
              элементов. Оно может принимать одно из следующих значений:
            </Text>
            <List
              elems={[
                "content-box: значение свойства по умолчанию, при котором браузер для определения реальных ширины и высоты элементов добавляет к значениям свойств width и height ширину границы и внутренние отступы",
                "padding-box: указывает веб-браузеру, что ширина и высота элемента должны включать внутренние отступы как часть своего значения.",
                "border-box: указывает веб-браузеру, что ширина и высота элемента должны включать внутренние отступы и границы как часть своего значения.",
              ]}
            />
            <SubTitle>Фон элемента</SubTitle>
            <Text>
              Фон элемента описывается в CSS свойством background. Фактически
              это свойство представляет сокращение набора следующих свойств CSS:
            </Text>
            <List
              elems={[
                "background-color: устанавливает цвет фона;",
                "background-image: в качестве фона устанавливается изображение;",
              ]}
            />
            <Text>
              Больше о свойство background :{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/CSS/background"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Прокрутка элементов</SubTitle>
            <Text>
              Нередко при создании веб-страниц можно столкнуться с ситуацией,
              когда содержимое блока занимает гораздо больше места, чем сам
              определено шириной и высотой блока. В этой ситуации по умолчанию
              браузер все равно отображает содержимое, даже если оно выходит за
              границы блока. <br /> Однако свойство overflow позволяет настроить
              поведение блока в подобной ситуации и добавить возможность
              прокрутки. Это свойство может принимать следующие значения:
            </Text>
            <List
              elems={[
                "auto: если контент выходит за границы блока, то создается прокрутка. В остальных случаях полосы прокрутки не отображаются",
                "hidden: отображается только видимая часть контента. Контент, который выходит за границы блока, не отображается, а полосы прокрутки не создаются;",
                "scroll: в блоке отображаются полосы прокрутки, даже если контент весь помещается в границах блока, и таких полос прокрутки не требуется;",
                "visible: значение по умолчанию, контент отображается, даже если он выходит за границы блока.",
              ]}
            />
            <Text>
              Свойство overflow управляет полосами прокрутки как по вертикали,
              так и по горизонтали. С помощью дополнительных свойств overflow-x
              и overflow-y можно определить прокрутку соответственно по
              горизонтали и по вертикали.
            </Text>
            <SubTitle>Линейный градиент</SubTitle>
            <Text>
              Градиенты представляют плавный переход от одного цвета к другому.
              В CSS3 имеется ряд встроенных градиентов, которые можно
              использовать для создания фона элемента. <br /> Градиенты в CSS не
              представляют какого-то специального свойства. Они лишь создают
              значение, которое присваивается свойству background-image. <br />
              Линейный градиент распространяется по прямой от одного конца
              элемента к другому, осуществляя плавный переход от одного цвета к
              другому. <br />
              Для создания градиента нужно указать его начало и несколько
              цветов, например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`background-image: linear-gradient(left,black,white);`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              В данном случае началом градиента будет левый край элемента,
              который обозначается значением left. Цвета градиента: черный
              (black) и белый (white). То есть начиная с левого края элемента до
              правого будет плавно идти переход из черного цвета в белый. <br />
              Для установки начала градиента можно использовать следующие
              значения: left (слева направо), right (справа налево), top (сверху
              вниз) или bottom (снизу вверх) <br /> Больше о свойстве gradient :{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_images/Using_CSS_gradients"
                }
              >
                тут
              </OuterLink>
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`div {
  width: 100px;
  height: 100px;
  padding: 15px;
}

.one {
  box-sizing: border-box;
  background-color: red;
}

.two {
  box-sizing: padding-box;
  text-align: center;
  border-radius: 100px;
  background-color:  #eee;
  background-image: radial-gradient(white,black);
}`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427qngfqs"
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
    <div class="one">TEXT</div>
    <div class="two">TEXT</div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <PaginationBlock to={"/Courses/CSS/2"} back={"/Courses/CSS/"} />
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

export default LessonCSS2;
