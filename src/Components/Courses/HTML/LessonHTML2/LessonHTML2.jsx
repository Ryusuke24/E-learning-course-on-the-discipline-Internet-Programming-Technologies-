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

function LessonHTML2() {
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
                  1. Лекция <br />
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
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Порядок применения основных элементов HTML
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/HTML/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Использование основных элементов HTML
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/HTML/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Применение современных средств разработки содержимого
                    веб-страниц
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>Лекция 2 : Порядок применения основных элементов HTML</Title>
            <Title>
              Назначение и порядок использования основных элементов HTML5
            </Title>
            <SubTitle>Элемент head и метаданные веб-страницы</SubTitle>
            <Text>
              <em>
                Вообще существует очень много тегов и их попросту невозможно
                выучить все и рассматривать их все тоже нет смысла, поэтому в
                данной лекции будут рассматриваться только базовые теги.
              </em>
            </Text>
            <Text>
              <span className={style.markedText}>Элемент head</span> - его
              задача состоит в установке метаданных страницы и ряда
              сопроводительной информации. <br />
              Метаданные содержат информацию о html-документе
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>Content</div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <Text>
              Для установки заголовка документа, который отображается на вкладке
              браузера, используется элемент
              <span className={style.markedText}> title</span>
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<title>Название заголовка</title>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>Элемент meta</span> определяет
              метаданные документа. Чтобы документ корректно отображал текст,
              необходимо задать кодировку с помощью атрибута charset.
              <span className={style.markedText}>
                {" "}
                Рекомендуемой кодировкой является utf-8
              </span>
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<meta charset="utf-8">`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Элемент meta также имеет два атрибута:{" "}
              <span className={style.markedText}>name и content</span>. <br />{" "}
              Атрибут name содержит имя метаданных, а content - их значение.{" "}
              <br /> <br />
              По умолчанию в HTML определены пять типов метаданных:
            </Text>
            <List
              elems={[
                "application name: название веб-приложения,частью которого является данный документ",
                "author: автор документа",
                "description: краткое описание документа",
                "generator: название программы, которая сгенерировала данный документ",
                "keywords: ключевые слова документа",
              ]}
            />
            <Text>
              Наиболее актуальным является тип
              <span className={style.markedText}> description</span>. Его
              значение поисковики часто используют в качестве аннотации к
              документу в поисковой выдаче.
            </Text>
            <Text>
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/HTML/Element/meta"
                }
              >
                Подробнее о теге meta
              </OuterLink>
            </Text>
            <Text>
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/HTML/Element/head"
                }
              >
                Подробнее о теге head
              </OuterLink>
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>Div 1</div>
    <div>Div 2</div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Элементы группировки</SubTitle>
            <Text>
              <span className={style.markedText}>div</span> - Элемент div служит
              для структуризации контента на веб-странице, для заключения
              содержимого в отдельные блоки
            </Text>
            <Text>
              Div создает блок, который по умолчанию растягивается по всей
              ширине браузера, а следующий после div элемент переносится на
              новую строку.
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>Div 1</div>
    <div>Div 2</div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>p</span> - Параграфы создаются
              с помощью тегов {"<p>"} и {"</p>"}, которые заключают некоторое
              содержимое. <br />
              Каждый новый параграф располагается на новой строке. <br />
              Если в рамках одного параграфа нам надо перенести текст на другую
              строку, то мы можем воспользоваться элементом {"<br/>"}
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
       <p>para 1 : lesson 1. lesson 2.</p>
       <p>para 2 : <br/> lesson 1. lesson 2.</p>
    </div>
    <div>        
    </div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>pre</span> - Элемент pre
              выводит предварительно отформатированный текст так, как он
              определен.
            </Text>
            <Text>
              <span className={style.markedText}>span</span> - Элемент span
              обтекает некоторый текст по всей его длине и служит
              преимущественно для стилизации заключенного в него текстового
              содержимого. <br /> Элемент span – строчный, а div и p – блочные.
              В отличие от блоков div или параграфов p span не переносит
              содержимое на следующую строку.
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
       <p><span style="color:red;">para 1</span> : lesson 1. lesson 2.</p>
       <p><span style="color:red;">para 2</span> : <br/> lesson 1. lesson 2.</p>
    </div>
    <div>
       <pre>
                текст 
       </pre>         
    </div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>Заголовки</span> - Элементы{" "}
              {"<h1>, <h2>, <h3>, <h4>, <h5> и <h6>"} служат для создания
              заголовков различного уровня (от самого крупного {"<h1>"} до
              самого мелкого {"<h6>"})
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
       <p><span style="color:red;">para 1</span> : lesson 1. lesson 2.</p>
       <p><span style="color:red;">para 2</span> : <br/> lesson 1. lesson 2.</p>
    </div>
    <div>
       <h1>Заголовок 1</h1>
       <h2>Заголовок 2</h2>
       <h3>Заголовок 3</h3>
       <h4>Заголовок 4</h4>
       <h5>Заголовок 5</h5>
       <h6>Заголовок 6</h6>
       <pre>
                текст 
       </pre>         
    </div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>Форматирование текста</span> -
              к элементам форматирования текстового содержимого относятся:
            </Text>
            <List
              elems={[
                "<strong>: выделяет текст жирным. Аналог (<b> </b>, но этот тег не семантический)",
                "<em>: выделяет текст курсивом. Аналог (<i> </i>, но этот тег не семантический)",
                "и другие...",
              ]}
            />
            <Text>
              {" "}
              Ознакомиться со всеми тегами форматирования можно :
              <OuterLink
                to={"https://www.w3schools.com/html/html_formatting.asp"}
              >
                {" "}
                тут{" "}
              </OuterLink>
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
       <p><span style="color:red;">para 1</span> : lesson 1. lesson 2. </p>
       <p><span style="color:red;">para 2</span> : <br/> lesson 1. lesson 2.</p>
       <p> para 3 : <strong> lesson 1</strong>. <em> lesson 2</em>.</p>
    </div>
    <div>
       <h1>Заголовок 1</h1>
       <h2>Заголовок 2</h2>
       <h3>Заголовок 3</h3>
       <h4>Заголовок 4</h4>
       <h5>Заголовок 5</h5>
       <h6>Заголовок 6</h6>
       <pre>
                текст 
       </pre>         
    </div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>Работа с изображениями</span> -
              Для вывода изображений в HTML используется элемент img. <br />{" "}
              Этот элемент представляет два важных атрибута:
            </Text>
            <List
              elems={[
                "src: путь к изображению. Это может быть относительный или абсолютный путь в файловой системе или адрес в интернете",
                "alt: текстовое описание изображения. Если браузер по каким-то причинам не может отобразить изображение (например, если у атрибута src некорректно задан путь), то браузер показывает вместо самой картинки данное текстовое описание.",
                "и другие...",
              ]}
            />
            <Text>
              Атрибут alt еще важен тем, что поисковые системы по текстовому
              описанию могут индексировать изображение
            </Text>
            <Text>
              {" "}
              Ознакомиться со всеми атрибутами тега img можно :
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img"
                }
              >
                {" "}
                тут{" "}
              </OuterLink>
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
       <p><span style="color:red;">para 1</span> : lesson 1. lesson 2. </p>
       <p><span style="color:red;">para 2</span> : <br/> lesson 1. lesson 2.</p>
       <p> para 3 : <strong> lesson 1</strong>. <em> lesson 2</em>.</p>
       <img src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1" alt="cat"/>
    </div>
    <div>
       <h1>Заголовок 1</h1>
       <h2>Заголовок 2</h2>
       <h3>Заголовок 3</h3>
       <h4>Заголовок 4</h4>
       <h5>Заголовок 5</h5>
       <h6>Заголовок 6</h6>
       <pre>
                текст 
       </pre>         
    </div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>Списки</span> - Для создания
              списков в HTML5 применяются элементы
              {" <ol> "} (нумерованный список) и {" <ul> "} (ненумерованный
              список) <br />В нумерованном списке для нумерации элементов по
              умолчанию используется стандартные цифры от 1. <br /> В
              ненумерованном списке каждый элемент предваряется черной точкой.
            </Text>
            <Text>
              {" "}
              Ознакомиться со всеми атрибутами тегов ul и ol можно :
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/HTML/Element/ol"}
              >
                {" "}
                тут ({"<ol>"})
              </OuterLink>
              {"    "}
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/HTML/Element/ul"}
              >
                и тут ({"<ul>"})
              </OuterLink>
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
       <p><span style="color:red;">para 1</span> : lesson 1. lesson 2. </p>
       <p><span style="color:red;">para 2</span> : <br/> lesson 1. lesson 2.</p>
       <p> para 3 : <strong> lesson 1</strong>. <em> lesson 2</em>.</p>
       <img src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1" alt="cat"/>
    </div>
    <div>
       <h1>Заголовок 1</h1>
       <h2>Заголовок 2</h2>
       <h3>Заголовок 3</h3>
       <h4>Заголовок 4</h4>
       <h5>Заголовок 5</h5>
       <h6>Заголовок 6</h6>
       <pre>
                текст 
       </pre>         
    </div>
    <div>
    <ul>
       <li>one</li>
       <li>two</li>
       <li>three</li>
       <li>four</li>
    </ul>        
    </div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              <span className={style.markedText}>Ссылки</span> - Ссылки, которые
              представлены элементом {"<a></a>"}, играют важную роль - они
              обеспечивают навигацию между отдельными документами. <br />
              Этот элемент имеет следующие атрибуты:
            </Text>
            <List
              elems={[
                "href: определяет адрес ссылки",
                "target: определяет, как документ по ссылке должен открываться",
                "и другие...",
              ]}
            />
            <Text>
              Ознакомиться с тегом {"<a></a>"} можно :
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/HTML/Element/a"}
              >
                тут
              </OuterLink>
            </Text>
            <CodeBlock
              lang={"HTML"}
              linkToEdit="https://onecompiler.com/html/4269ukqgm"
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
       <a href="https://google.com">google here</a>
       <p><span style="color:red;">para 1</span> : lesson 1. lesson 2. </p>
       <p><span style="color:red;">para 2</span> : <br/> lesson 1. lesson 2.</p>
       <p> para 3 : <strong> lesson 1</strong>. <em> lesson 2</em>.</p>
       <img src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1" alt="cat"/>
    </div>
    <div>
       <h1>Заголовок 1</h1>
       <h2>Заголовок 2</h2>
       <h3>Заголовок 3</h3>
       <h4>Заголовок 4</h4>
       <h5>Заголовок 5</h5>
       <h6>Заголовок 6</h6>
       <pre>
                текст 
       </pre>         
    </div>
    <div>
    <ul>
       <li>one</li>
       <li>two</li>
       <li>three</li>
       <li>four</li>
    </ul>        
    </div>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Выше были приведены современные и наиболее популярные теги <br />
              Ознакомиться со всеми тегами отдельно можно :{" "}
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/HTML/Element"}
              >
                тут
              </OuterLink>
            </Text>
            <Title>Работа с формами в HTML5</Title>
            <SubTitle>Формы и элементы ввода и взаимодействия</SubTitle>
            <Text>
              <span className={style.markedText}>form</span> - Формы в html
              представляют один из способов для ввода и отправки данных. Все
              поля формы помещаются между тегами {"<form> и </form>"}. <br />
              Пример создания простейшей формы:
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <form method="post" action="ссылка на ресурс">
        <input name="login">
        <input type="submit" value="Войти">
    </form>
</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Для настройки форм у элемента form определены следующие атрибуты:
            </Text>
            <List
              elems={[
                "method: устанавливает метод отправки данных на сервер. Допустимы два значения: post и get",
                "action: устанавливает адрес, на который передаются данные формы",
                "и другие...",
              ]}
            />
            <Text>
              Ознакомиться со всеми атрибутами тега form отдельно можно :{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form"
                }
              >
                тут
              </OuterLink>
              <br />
              Здесь у формы установлен метод "post", то есть все значения формы
              отправляются в теле запроса, а адресом служит строка "ссылка на
              ресурс". Адрес указан случайным образом.
            </Text>
            <Text>
              Наиболее распространенным элементом ввода является элемент{" "}
              <span className={style.markedText}>input</span> - реальное
              действие этого элемента зависит от того, какое значение
              установлено у его атрибута type:
            </Text>
            <List
              elems={[
                "text: обычное текстовое поле",
                "password: тоже текстовое поле, только вместо вводимых символов отображаются звездочки, поэтому в основном используется для ввода пароля",
                "radio: радиокнопка или переключатель.",
                "checkbox: элемент флажок",
                "color: поле для ввода цвета",
                "date: поле для ввода даты",
              ]}
            />
            <Text>
              Ознакомиться со всеми атрибутами тега input отдельно можно :{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input"
                }
              >
                тут
              </OuterLink>
            </Text>
            <Text>
              Кроме элемента input в различных модификациях есть еще небольшой
              набор элементов, которые также можно использовать на форме:
            </Text>
            <List
              elems={[
                "button: создает кнопку",
                "select: выпадающий список",
                "label: создает метку, которая отображается рядом с полем ввода",
                "textarea: многострочное текстовое поле",
              ]}
            />
            <Title>
              Назначение и порядок использования элементов определения
              семантической структуры веб-страницы
            </Title>
            <Text>
              Семантическая верстка - это метод создания веб-страниц, который
              использует структурные и значимые HTML-элементы и атрибуты для
              организации и описания контента на странице. Этот метод верстки
              отличается от традиционной “физической” верстки, которая
              фокусируется на внешнем виде и расположении элементов на странице.
            </Text>
            <Text>
              Семантическая верстка имеет ряд преимуществ, включая улучшенную
              доступность, лучшую SEO-оптимизацию, более легкое создание
              адаптивных дизайнов и улучшенное взаимодействие с JavaScript. В
              частности, семантическая верстка помогает улучшить доступность
              веб-страницы для людей с ограниченными возможностями, так как она
              использует HTML-элементы, которые имеют конкретное значение и
              могут быть легко интерпретированы программами чтения с экрана.
            </Text>
            <Text>
              Улучшенная SEO-оптимизация достигается за счет использования
              значимых HTML-элементов, которые помогают поисковым системам лучше
              понять структуру и содержание веб-страницы. Это делает
              семантическую верстку особенно важной для оптимизации веб-сайтов
              на основе поисковых систем.
            </Text>
            <Text>
              Создание адаптивных дизайнов также упрощается благодаря
              семантической верстке, поскольку она позволяет легко
              манипулировать и изменять расположение элементов на разных
              устройствах и разрешениях экрана. Это позволяет веб-страницам
              автоматически адаптироваться к различным устройствам и размерам
              экранов.
            </Text>
            <Text>Плюсы семантической верстки:</Text>
            <List
              elems={["Улучшенная доступность", "Лучшая SEO-оптимизация"]}
            />
            <Text>Минусы семантической верстки:</Text>
            <List
              elems={[
                "Замедление загрузки страницы",
                "Сложность восприятия для новичков",
              ]}
            />
            <Text>Примеры семантических тегов:</Text>
            <List
              elems={[
                "<header> - Этот тег используется для обозначения заголовка документа или раздела",
                "<nav> - Этот тег обозначает навигационное меню или панель навигации",
                "<section> - Обозначает отдельный раздел или секцию на веб-странице",
                "<main> - Обозначает главное содержимое страницы",
                "и другие...",
              ]}
            />
            <Text>
              Ознакомиться со всеми семантическими тегами отдельно можно :{" "}
              <OuterLink
                to={
                  "https://www.w3schools.com/html/html5_semantic_elements.asp"
                }
              >
                тут
              </OuterLink>
            </Text>
            <CodeBlock
              lang={"HTML"}
              isEditable={false}
              isInteractive={false}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="“en”">
  <head>
    <meta charset="“UTF-8”" />
    <meta
      name="“viewport”"
      content="“width"
      ="device-width,"
      initial-scale="1.0”"
    />
    <title>Document</title>
  </head>
  <body>
    <header><!-- Заголовок сайта --></header>
    <main><!-- Основная часть страницы --></main>
    <footer><!-- Подвал сайта --></footer>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <PaginationBlock to={"/Courses/HTML/3"} back={"/Courses/HTML/1"} />
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

export default LessonHTML2;
