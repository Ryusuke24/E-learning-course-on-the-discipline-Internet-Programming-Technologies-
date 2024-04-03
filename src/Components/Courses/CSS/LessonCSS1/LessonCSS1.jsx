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

function LessonCSS1() {
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
            {
              to: "/courses/CSS/test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме CSS
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
              Лекция 1 : Основы представления веб-страниц с помощью стилей CSS
            </Title>
            <SubTitle>Способы определения стилей CSS 3</SubTitle>
            <Text>
              <span className={style.markedText}>
                Стили или каскадные таблицы стилей (Cascading Style Sheets –
                CSS)
              </span>{" "}
              — определяют представление веб-документа, его внешний вид
            </Text>
            <Text>
              Стиль в CSS представляет правило, которое указывает веб-браузеру,
              как надо форматировать элемент. Форматирование может включать
              установку цвета фона элемента, установку цвета и типа шрифта и так
              далее...
            </Text>
            <Text>Определение стиля состоит из двух частей:</Text>
            <List
              elems={[
                "селектор, который указывает на элемент",
                "блок объявления стиля - набор команд, которые устанавливают правила форматирования",
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
    div {
         background-color: red;
         width : 100px;
         height : 100px;
    }`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Атрибут style</SubTitle>
            <Text>
              Первый способ заключается во встраивании стилей непосредственно в
              элемент с помощью атрибута style:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mhgxdr"
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
    <title>Document</title>
  </head>
  <body>
    <h2 style="color: blue;">Cтили</h2>
    <div style="width: 100px; height: 100px; background-color: red;"></div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Здесь определены два элемента – заголовок h2 и блок div. У
              заголовка определен синий цвет текста с помощью свойства color. У
              блока div определены свойства ширины (width), высоты (height), а
              также цвета фона (background-color)
            </Text>
            <Text>
              Второй способ состоит в использования элемента style в документе
              html. Этот элемент сообщает браузеру, что данные внутри являются
              кодом css, а не html:
            </Text>
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
    <title>Document</title>
    <style>
      h2 {
        color: blue;
      }
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <h2>Cтили</h2>
    <div></div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  Inline стили и опредление стилей в элементе style в
                  cовременной разработке считается моветоном, в дальнейшем мы не
                  будем рассматривать эти способы <br />
                  Важно четко понимать, что разметка HTML должна предоставлять
                  только структуру html-документа, а весь его внешний вид,
                  стилизацию должны определять стили CSS
                </em>
              </Text>
            </div>
            <Text>
              Третий способ заключается в вынесении стилей во внешний файл,
              например styles.css
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`
      h2 {
        color: blue;
      }
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mj9jrn"
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h2>Cтили</h2>
    <div></div>
  </body>
</html>

`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Определяя стили во внешнем файле, структура страницы отделяется от
              ее стилизации. При таком определении стили гораздо легче
              модифицировать, чем если бы они были определены внутри элементов
              или в элементе style, и такой способ является предпочтительным в
              HTML5.
            </Text>
            <Text>
              Использование стилей во внешних файлах позволяет уменьшить
              нагрузку на веб-сервер с помощью механизма кэширования. Поскольку
              веб-браузер может кэшировать css-файл и при последующем обращении
              к веб-странице извлекать нужный css-файл из кэша.
            </Text>
            <Text>
              <span className={style.markedText}>Важный момент.</span> Порядок
              определения приоритетов:{" "}
            </Text>
            <List
              elems={[
                "Если у элемента определены встроенные стили (inline-стили), то они имеют высший приоритет",
                "Далее в порядке приоритета идут стили, которые определены в элементе <style>",
                "Наименее приоритетными стилями являются те, которые определены во внешнем файле",
              ]}
            />
            <Title>Селекторы и классы CSS 3</Title>
            <SubTitle>Селекторы</SubTitle>
            <Text>
              Определение стиля начинается с селектора. <br />
              Ряд селекторов наследуют название форматируемых элементов: div, p,
              h2 и т. д. <br /> При определении такого селектора его стиль будет
              применяться ко всем элементам соответствующих данному селектору
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`
      div {
          width: 100px;
          height: 100px;
          background-color: red;
          margin: 10px;
      }
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Селекторы: селекторы классы</SubTitle>
            <Text>
              Иногда для одних и тех же элементов требуется различная
              стилизация. В этом случае можно использовать классы. <br />
              Для определения селектора класса в CSS перед названием класса
              ставится точка
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`
      div {
        width: 100px;
        height: 100px;
      }

      .redBlock {
          background-color: red;
          margin: 10px;
      }

      .blueBlock {
        background-color: blue;
        margin-left: 50px;
    }
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mk2kz6"
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
        <div class="redBlock"></div>
        <div class="blueBlock"></div>
        <div class="redBlock"></div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Название класса может быть произвольным. Например, в данном случае
              название класса - "redBlock". При этом в имени класса разрешается
              использовать буквы, числа, дефисы и знаки подчеркивания, причем
              начинать название класса должно обязательно с буквы.
            </Text>
            <Text>
              После определения класса его можно применить к элементу с помощью
              атрибута class. <br />
              Например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<div class="redBlock"></div>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Селекторы: идентификаторы</SubTitle>
            <Text>
              Для идентификации уникальных на веб-станице элементов используются
              идентификаторы, которые определяются с помощью атрибутов id.{" "}
            </Text>
            <Text>
              Например, на странице может быть головной блок или шапка:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<div id="header"></div>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Считается, что идентификаторы в большей степени относятся к
              структуре веб-страницы и в меньшей степени к стилизации.
            </Text>
            <Text>
              Для стилизации преимущественно используются классы, нежели
              идентификаторы
            </Text>
            <Text>
              Определение стилей для идентификаторов аналогично определению
              классов, только вместо точки ставится символ решетки #
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`
 div {
  width: 100px;
  height: 100px;
}

#header {
  background-color: red;
}

#main {
  background-color: blue;
}

#footer {
  background-color: green;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mkja9w"
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
    <div id="header"></div>
    <div id="main"></div>
    <div id="footer"></div>

  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Селекторы: универсальный селектор</SubTitle>
            <Text>
              Кроме селекторов тегов, классов и идентификаторов в css также есть
              так называемый универсальный селектор, который представляет знак
              звездочки (*).Он применяет стили ко всем элементам на
              html-странице
            </Text>
            <SubTitle>Селекторы: стилизация группы селекторов</SubTitle>
            <Text>
              Иногда определенные стили применяются к целому ряду селекторов.
              Пример перечисления селекторов всех элементов через запятую
            </Text>
            <Text>
              Группа селекторов может содержать как селекторы тегов, так и
              селекторы классов и идентификаторов, например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS "}
              code={
                <pre>
                  <code className="language-css">
                    {`
 div, #header, .redBlock {
  width: 100px;
  height: 100px;
  background-color: red;

}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Селекторы потомков</SubTitle>
            <Text>
              Веб-страница может иметь сложную организацию, одни элементы внутри
              себя могут определять другие элементы.
              <br />
              Вложенные элементы иначе можно назвать потомками. А контейнер этих
              элементов - родителем.
            </Text>
            <Text>
              Например, пусть элемент body на веб-странице имеет следующее
              содержимое:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`
<body>
    <h2>Header</h2>                
    <div>
        <p>Text</p>
    </div>
</body>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Внутри элемента body определено три вложенных элемента: h2, div,
              p. Все эти элементы являются потомками элемента body. <br />А
              внутри элемента div определен только один вложенный элемент - p,
              поэтому элемент div имеет только одного потомка. <br />
              Используя специальные селекторы, можно стилизовать вложенные
              элементы или потомков внутри строго определенных элементов
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS "}
              code={
                <pre>
                  <code className="language-css">
                    {`
 div p {
  color: red;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Код выше означает что стиль будет применяться ко всем элементам p
              которые вложены в элемент div
            </Text>
            <SubTitle>Селекторы дочерних элементов</SubTitle>
            <Text>
              Селекторы дочерних элементов отличаются от селекторов потомков
              тем, что позволяют выбрать элементы только первого уровня
              вложенности.
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML "}
              code={
                <pre>
                  <code className="language-html">
                    {`
<body>
    <h2>Header</h2>                
    <div>
        <p>Text</p>
    </div>
</body>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Хотя вложенными в элемент body элементами являются целых три - h2,
              div, p, но дочерними из них являются только два - div и h2, так
              как они находятся в первом уровне вложенности. <br />
              Элемент p находится на втором уровне вложенности, так как вложен
              внутрь элемента div, а не просто элемента body <br /> Для
              обращения к дочерним элементам используется знак угловой скобки.
              Например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS "}
              code={
                <pre>
                  <code className="language-css">
                    {`
 div > p {
  color: red;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Селекторы элементов одного уровня</SubTitle>
            <Text>
              Селекторы элементов одного уровня или смежных элементов позволяют
              выбрать элементы, которые находятся на одном уровне вложенности.
              Иногда такие элементы еще называют сиблинги (siblings) или
              сестринскими элементами. Например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML "}
              code={
                <pre>
                  <code className="language-html">
                    {`
<body>
    <h2>Header</h2>                
    <div>
        <p>Text</p>
    </div>
    <div>
        <p>Text 2</p>
    </div>
</body>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Здесь элементы h2 и оба блока div являются смежными, так как
              находятся на одном уровне. А элементы параграфов и заголовок h2 не
              являются смежными, так как параграфы вложены в блоки div. <br />{" "}
              Чтобы стилизовать первый смежный элемент по отношению к
              определенному элементу, используется знак плюса “+”:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS "}
              code={
                <pre>
                  <code className="language-css">
                    {`
 h2 + div {
  color: red;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Селектор h2+div позволяет определить стиль (в данном случае
              красный цвет текста) для блока div, который идет непосредственно
              после заголовка h2. <br /> Если же между заголовком и блоков div
              будет находиться еще какой-либо элемент, то к нему не будет
              применяться стиль.
            </Text>
            <SubTitle>Селекторы элементов одного уровня</SubTitle>
            <Text>
              Если необходимо стилизовать вообще все смежные элементы одного
              уровня, неважно непосредственно идут они после определенного
              элемента или нет, то в этом случае вместо знака плюса необходимо
              использовать знак тильды "~":
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML "}
              code={
                <pre>
                  <code className="language-html">
                    {`
<body>
    <h2>Header</h2>                
    <div>
        <p>Text</p>
    </div>
    <div>
        <p>Text 2</p>
    </div>
</body>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS "}
              code={
                <pre>
                  <code className="language-css">
                    {`
 h2 ~ div {
  color: red;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Title>Селекторы псевдоклассов CSS 3</Title>
            <SubTitle>Псевдоклассы</SubTitle>
            <Text>
              Селекторы псевдоклассов предоставляют дополнительные возможности
              по выбору нужных элементов. Список доступных псевдоклассов:
            </Text>
            <List
              elems={[
                ":root: позволяет выбрать корневой элемент веб-страницы, наверное наименее полезный селектор, так как на правильной веб-странице корневым элементом практически всегда является элемент <html>",
                ":link: применяется к ссылкам и представляет ссылку в обычном состоянии, по которой еще не совершен переход",
                ":visited: применяется к ссылкам и представляет ссылку, по которой пользователь уже переходил",
                ":active: применяется к ссылкам и представляет ссылку в тот момент, когда пользователь осуществляет по ней переход",
                ":hover: представляет элемент, на который пользователь навел указатель мыши. Применяется преимущественно к ссылкам, однако может также применяться и к другим элементам, например, к параграфам",
                "и другие...",
              ]}
            />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`a:hover {
        color : red; text-decoration: none;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mp5msg"
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
    <a href="https://www.google.ru/?hl=ru">HOVER ON ME</a>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Все псевдоклассы рассмотрены{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-classes"
                }
                children={"здесь"}
              />
            </Text>
            <Title>Селекторы псевдоэлементов и атрибутов</Title>
            <SubTitle>Псевдоэлементы</SubTitle>
            <Text>
              Псевдоэлементы обладают рядом дополнительных возможностей по
              выбору элементов веб-страницы и похожи на псевдоклассы. Список
              доступных псевдоэлементов:
            </Text>
            <List
              elems={[
                "::first-letter: позволяет выбрать первую букву из текста",
                "::before: добавляет сообщение до определенного элемента",
                "::after: добавляет сообщение после определенного элемента",
                "и другие...",
              ]}
            />
            <Text>
              Пример стилизации текста с использованием псевдоэлементов
              first-letter и first-line:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`::first-letter {
    color : red; 
    font-size: 25px;
}

::first-line {
    font-size: 20px;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mps2u2"
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
      <p>Text....</p>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Все псевдоэлементы рассмотрены{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements"
                }
                children={"здесь"}
              />
            </Text>
            <SubTitle>Селекторы атрибутов</SubTitle>
            <Text>
              Кроме селекторов элементов также можно использовать селекторы их
              атрибутов. <br />
              Предположим, что на веб-странице несколько полей input, и надо
              окрасить в красный цвет только текстовые поля. <br />
              В этом случае возможно проверять значение атрибута type: если оно
              имеет значение text, то это текстовое поле, и соответственно его
              надо окрасить в красный цвет. <br />
              Определение стиля в этом случае выглядело бы так:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS"}
              code={
                <pre>
                  <code className="language-css">
                    {`input[type="text"] {
    border : 2px solid red;
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              После элемента в квадратных скобках идет атрибут и его значение.
              То есть в данном случае для текстового поля надо установить
              границу красного цвета 2 пикселя толщиной сплошной линией.
            </Text>
            <Title>Наследование и каскадность стилей CSS 3</Title>
            <SubTitle>Наследование стилей</SubTitle>
            <Text>
              Для упрощения определения стилей в CSS применяется механизм
              наследования стилей. Этот механизм предполагает, что вложенные
              элементы могут наследовать стили своих элементов-контейнеров.
              Например, пусть на веб-странице есть заголовок и параграф, которые
              должны иметь текст красного цвета. Можно отдельно к параграфу и
              заголовку применить соответствующий стиль, который установит
              нужный цвет шрифта
              <br />
              Чтобы не дублировать определение стиля, можно было написать так
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`body {
    color : red; 
}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mqdk84"
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
      <h2>Наследования стилей</h2>
      <p>Text....</p>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Cвойства родителя наследуются для его дочерних элементов{" "}
            </Text>{" "}
            <div className={style.section2}>
              <Text>
                <em>
                  Кроме свойств margin, padding, border. Они не наследуются
                </em>
              </Text>
            </div>
            <SubTitle>Каскадность стилей</SubTitle>
            <Text>
              В CSS действует механизм каскадности, которую можно определить как
              набор правил, определяющих последовательность применения множества
              стилей к одному и тому же элементу. <br />
              Для определения стиля к элементу могут применяться различные
              селекторы, и важность каждого селектора оценивается в баллах. Чем
              больше у селектора пунктов, тем он важнее, и тем больший приоритет
              его стили имеют над стилями других селекторов:
            </Text>
            <List
              elems={[
                "Селекторы тегов имеют важность, оцениваемую в 1 балл",
                "Селекторы классов, атрибутов и псевдоклассов оцениваются в 10 баллов",
                "Селекторы идентификаторов оцениваются в 100 баллов",
                "Встроенные inline-стили (задаваемые через атрибут style) оцениваются в 1000 баллов.",
                "Так же есть свойсво для стилей !important оно важнее всех.",
              ]}
            />
            <Text>
              Если селектор является составным, то происходит сложение баллов
              всех входящих в селектор подселекторов. Пример:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`a {
    font-size: 18px;
}
#menu a { color : navy;}
.nav li a { color : red;}
.nav .menuItem { color : green; }
a.menuItem:not(.newsLink) { color : orange; }
div ul a { color : gray;}
`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/427mrcqyd"
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="menu">
      <ul class="nav">
        <li><a class="menuItem">Главная</a></li>
        <li><a class="menuItem">Форум</a></li>
        <li><a class="menuItem">Блог</a></li>
        <li><a class="menuItem">О сайте</a></li>
      </ul>
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
              В CSS определено пять различных селекторов, которые устанавливают
              цвет ссылок. В итоге браузер выберет селектор #menu a и окрасит
              ссылки в темно-синий цвет. Но почему, на каком основании браузер
              выберет этот селектор? <br /> Для селектора #menu a в колонке
              сумма оказалось больше всего баллов - 101. То есть в нем 1
              идентификатор (100 баллов) и один тег (1 балл), которые в сумме
              дают 101 балл: <br /> К примеру, в селекторе .nav .menuItem два
              селектора класса, каждый из которых дает 10 баллов, то есть в
              сумме 20 баллов; <br /> При этом псевдокласс :not в отличие от
              других псевдоклассов не учитывается, однако учитывается тот
              селектор, который передается в псевдокласс not.
            </Text>
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

export default LessonCSS1;
