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
import creatingHTMLFile from "../../../../Pictures/lessonHTML_1.png";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../../../redux/comments";
import { useState } from "react";

import style from "../LessonStyle.module.scss";

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
            {
              to: "/courses/HTML/test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме HTML
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title> Лекция 1 : Основы веб-технологий</Title>
            <SubTitle>К понятию "Интернет"</SubTitle>
            <Text>
              <span className={style.markedText}>Интернет</span> — всемирная
              компьютерная сеть, объединяющая миллионы компьютеров в единую ИС
            </Text>
            <Text>
              Топ - 10 стран по числу пользователей интернета: <br />
            </Text>
            <List
              elems={[
                "Китай – 1,05 млрд",
                "Индия – 692 млн",
                "США – 311,3 млн",
                "Россия – 130 млн",
                "Бразилия - 126 млн",
                "Япония - 116 млн",
                "Мексика – 75,94 млн",
                "Германия – 73,43 млн",
                "Индонезия – 66,45 млн",
                "Великобритания – 62,35 млн",
              ]}
            />
            <SubTitle> Принципы работы Интернета</SubTitle>
            <Text>
              {" "}
              Различают <span className={style.markedText}>
                логическую
              </span> и <span className={style.markedText}>физическую</span>{" "}
              модели Интернета
              <br />
              Под логической, прежде всего, понимают Всемирную паутину (World
              Wide Web), а под физической – компьютеры, серверы и средства
              передачи данных между ними.
            </Text>
            <SubTitle>Эволюция концепции Web (Веб)</SubTitle>
            <Text>
              <span className={style.markedText}>
                Веб 1.0 (1990-2000) – Интернет как информационный портал
              </span>{" "}
              <br />
            </Text>
            <List
              elems={[
                "эксклюзивность информации, необходимо быть первым собственником контента",
                "разделение World Wide Web на пригодные для использования каталоги",
                "каждый человек имеет свой собственный личный уголок в киберпространстве",
                "недостатки: Контекст; Взаимодействие; Масштабируемость",
                "Примеры сайтов: Ofoto; Hotmail; Dmoz; GeoCities",
              ]}
            />
            <Text>
              <span className={style.markedText}>
                Веб 2.0 – Сеть как платформа (2000-2010) – направленность на
                сообщества
              </span>{" "}
              <br />
            </Text>
            <List
              elems={[
                "фокус на сообществах пользователей для создания и проверки контента",
                "свободная форма организации и классификации контента посредством тэгов",
                "создание «интерфейсов» для будущей интеграции (RSS, API);",
                "и AJAX (Asynchronous JavaScript and XML) — подход к построению пользовательских интерфейсов веб-приложений, при котором вебстраница, не перезагружаясь, асинхронно загружает нужные пользователю данные",
                "недостатки: Персонализация; Мобильность и портативность; Совместимость",
                "Примеры сайтов: YouTube; Flickr; Facebook; Google Maps.",
              ]}
            />
            <Text>
              <span className={style.markedText}>
                Веб 3.0 – «портируемый» (переносной) персональный веб
                (2010-2020)
              </span>{" "}
              <br />
            </Text>
            <List
              elems={[
                "Сфокусированность - на индивиде",
                "Структура данных – принцип «лайфстрим» (lifestream): «жизненный поток» - контент в форме дневника-календаря",
                "Концепция данных – динамическое объединение в структурной взаимосвязи",
                "Основной источник информации и знаний – Интернет",
                "Технологии – «drag and drop» (перетаскивание) и mashups (коллажи из данных любого формата)",
                "Классификация информации – поведенческая (полностью зависящая от предпочтений конкретного пользователя)",
                "Поисковый механизм - iGoogle, NetVibes;",
                "Стоимость рекламы – определяется активностью пользователей",
                "Продвижение – advertainment (ненавязчивая косвенная реклама, облеченная в форму представлений, развлекательных акций). ",
              ]}
            />
            <SubTitle>Классификация языков веб-программирования</SubTitle>
            <Text>
              <span className={style.markedText}>Веб-программирование </span> –
              раздел программирования, ориентированный на разработку
              динамических Internet-приложений
            </Text>
            <Text>
              <span className={style.markedText}>
                Языки веб-программирования:
              </span>
            </Text>
            <List elems={["Клиентские", "Серверные"]} />
            <Text>
              В данной дисциплине, мы будем рассматривать HTML, CSS, JS, PHP
            </Text>
            <Text>
              <span className={style.markedText}>HTML </span> (HyperText Markup
              Language – «язык разметки гипертекста») — стандартный язык
              разметки документов во Всемирной паутине. Большинство вебстраниц
              создаются при помощи языка HTML.
            </Text>
            <Text>
              <span className={style.markedText}>CSS </span> (Cascading Style
              Sheets – каскадные таблицы стилей) — технология описания внешнего
              вида документа, написанного языком разметки. Преимущественно
              используется как средство оформления вебстраниц в формате HTML и
              XHTML, но может применяться с любыми видами документов в формате
              XML, включая SVG и XUL.
            </Text>
            <Text>
              <span className={style.markedText}>JavaScript </span> -
              мультипарадигменный язык программирования. Поддерживает
              объектно-ориентированный, императивный и функциональный стили.
              Является реализацией спецификации ECMAScript. JavaScript обычно
              используется как встраиваемый язык для программного доступа к
              объектам приложений.
            </Text>
            <Text>
              <span className={style.markedText}>PHP </span> (PHP: Hypertext
              Preprocessor – «PHP: препроцессор гипертекста», Personal Home Page
              Tools – «Инструменты для создания персональных веб-страниц») -
              скриптовый язык программирования общего назначения, применяющийся
              для разработки веб-приложений.
            </Text>
            <SubTitle>Введение в HTML5</SubTitle>
            <Text>
              <span className={style.markedText}>Поддержка браузерами: </span>{" "}
              <br />К текущему моменту большинство последних версий браузеров
              поддерживают большинство функциональности HTML5 (Google Chrome,
              Mozilla Firefox, Opera, Internet Explorer 11, Microsoft Edge). В
              то же время многие старые браузеры, как например, Internet
              Explorer 8 и более младшие версии, не поддерживают стандарты, а IE
              9, 10 поддерживает лишь частично.
            </Text>
            <Text>
              <span className={style.markedText}>
                Инструменты для работы с HTML5{" "}
              </span>{" "}
            </Text>
            <List
              elems={[
                "Кроссплатформенный текстовый редактор Visual Studio Code. Данный редактор обладает несколько большими возможностями, чем Notepad++, и кроме того, может работать не только в ОС Windows, но и в MacOS и в операционных системах на основе Linux.",
                "Также потребуется веб-браузер для запуска и проверки написанных вебстраниц. В качестве веб-браузера можно взять последнюю версию любого из распространенных браузеров – Google Chrome, Mozilla Firefox, Microsoft Edge, Opera.",
              ]}
            />
            <SubTitle>Элементы и атрибуты HTML5</SubTitle>
            <Text>
              Документ HTML5, как и любой документ HTML, состоит из элементов, а
              элементы состоят из тегов. Как правило, элементы имеют открывающий
              и закрывающий тег, которые заключаются в угловые скобки. Например:{" "}
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<div> Текст элемента div </div>`}
                  </code>
                </pre>
              }
            />
            <Text>
              Элементы также могут состоять из одного тега, например, элемент
              {" <br/> "}, функция которого - перенос строки:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<div> Текст <br/> элемента div </div>`}
                  </code>
                </pre>
              }
            />{" "}
            <Text>
              Каждый элемент внутри открывающего тега может иметь атрибуты.{" "}
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<button style="background-color:red;">Кнопка</button>
<input type="text"/>`}
                  </code>
                </pre>
              }
            />
            <Text>
              Элемент button имеет атрибут style. После знака равно в кавычках
              пишется значение атрибута: style="background-color:red;". В данном
              случае значение "background-color:red;" указывает, что цвет
              заднего фона будет красным.
              <br />
              <br />
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/HTML/Attributes"}
              >
                Сайт-справочник со списком всех доступных атрибутов
                HTML-элементов
              </OuterLink>
            </Text>
            <SubTitle>Создание документа HTML5</SubTitle>
            <Text>
              Элементы являются кирпичиками, из которых складывается документ
              html5. Для создания документа нам надо создать простой текстовый
              файл, а в качестве расширения файла указать *.html
            </Text>
            <Text>
              Создадим текстовый файл, назовем его index и изменим его
              расширение на .html:
            </Text>
            <img
              className={style.image}
              src={creatingHTMLFile}
              alt="creating html file"
            />
            <Text>
              Затем откроем этот файл в любом текстовом редакторе, например, в
              VSCode. Добавим в файл следующий текст:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html>

</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Для создания документа HTML5 нам нужны в первую очередь два
              элемента: DOCTYPE и html.
            </Text>
            <Text>
              Элемент doctype или Document Type Declaration сообщает веббраузеру
              тип документа.
            </Text>
            <Text>
              {" <!DOCTYPE html>"} указывает, что данный документ является
              документом html и что используется html5, а не html4 или какая-то
              другая версия языка разметки
            </Text>
            <Text>
              Внутри элемента html мы можем разместить два других элемента: head
              и body
            </Text>
            <Text>
              Элемент head содержит метаданные веб-страницы, заголовок
              веб-страницы, тип кодировки и т.д., а также ссылки на внешние
              ресурсы - стили, скрипты, если они используются.{" "}
            </Text>
            <Text>
              {" "}
              Элемент body собственно определяет содержимое html-страницы
            </Text>
            <Text>
              Теперь изменим содержимое файла index.html следующим образом:
            </Text>
            <CodeBlock
              isInteractive={false}
              linkToEdit="https://onecompiler.com/html/425vs4sb4"
              lang={"HTML"}
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
              В элементе head определено два элемента: <br />
            </Text>
            <List
              elems={[
                "элемент title представляет заголовок страницы",
                "элемент meta определяет метаинформацию страницы",
              ]}
            />
            <Text>
              В пределах элемента body используется только один элемент - div,
              который оформляет блок. Содержимым этого блока является простая
              строка
            </Text>
            <Text>
              Сохраним и откроем файл index.html в браузере (кликнуть на иконку
              .html файла)
            </Text>
            <Text>Таким образом, мы создали первый документ HTML5.</Text>
            <Text>
              Так как мы указали в элементе title заголовок "Document", то
              именно такое название будет иметь вкладка браузера
            </Text>
            <SubTitle>Разновидности синтаксиса HTML5</SubTitle>
            <Text>
              При создании документа HTML5 можно использовать два различных
              стиля: HTML и XML. (чаще пользуются первым,{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/XML/XML_introduction"
                }
              >
                ознакомиться со вторым стилем можно тут{" "}
              </OuterLink>
              )
            </Text>
            <Text>
              Стиль HTML предполагает следующие моменты: <br />
            </Text>
            <List
              elems={[
                "Начальные открывающие теги могут отсутствовать у элементов",
                "Конечные закрывающие теги могут отсутствовать у элементов",
                "Только пустые элементы (void elements) (например, br, img, link) могут закрываться с помощью слеша />",
                "Регистр названий тегов и атрибутов не имеет значения",
                "Можно не заключать значения атрибутов в кавычки",
                "Некоторые атрибуты могут не иметь значений (checked и disabled)",
                "Специальные символы не экранируются",
                "Документ должен иметь элемент DOCTYPE",
                "Это так называемый 'разрешительный' стиль, основанный на послаблениях при создании документа",
              ]}
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

export default LessonHTML1;
