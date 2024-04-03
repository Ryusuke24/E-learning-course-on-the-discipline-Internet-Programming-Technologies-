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

function LessonJS2() {
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
          title={"Учебный курс по JavaScript"}
          elems={[
            {
              to: "/courses/JS/1",
              text: (
                <p>
                  1. Лекция <br />
                  <span className={style.markedText}>Основы JavaScript</span>
                </p>
              ),
            },
            {
              to: "/courses/JS/2",
              text: (
                <p>
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Работа с Document и Browser Object Model (Dom и Bom)
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/JS/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Разработка скриптов на языке JavaScript
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/JS/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок применения средств разработки скриптов для
                    веб-страниц на языке JavaScript
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/JS/test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме JavaScript
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>
              Лекция 2 : Работа с Document и Browser Object Model (Dom и Bom)
            </Title>
            <Title>
              Работа со встроенными объектами на языке JavaScript : Объект
              window
            </Title>
            <Text>
              Объект Window - это основной объект, который предоставляет доступ
              к окну браузера. Он включает методы, свойства и события, связанные
              с окном браузера. <br /> Например, можно получить доступ к текущей
              вкладке браузера с помощью свойства window.location:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              linkToEdit="https://onecompiler.com/html/428pgkeq3"
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`let myWindow = window; // Создаем переменную myWindow, которая ссылается на объект window
myWindow.alert("Привет, мир!"); // Выводим сообщение "Привет, мир!"`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте window -{" "}
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/API/Window"}
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript :
              Object.prototype
            </SubTitle>
            <Text>
              Каждый объект в JavaScript наследует свойства и методы из
              Object.prototype. Этот объект содержит базовые методы, такие как:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`const obj = {};
Object.defineProperty(obj, "property", {
  value: "Привет",
  writable: false,
  enumerable: true,
  configurable: false
});

// obj.property = "Пока" - Вызов исключения, так как свойство является немодифицируемым
alert(obj.property); // "Привет"`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте object -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript :
              Array.prototype
            </SubTitle>
            <Text>
              Array.prototype является прототипом для всех массивов в
              JavaScript. Он содержит различные методы, такие как:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`// Создание массива:
var arr = [3, 5, 10];

// Добавление элемента в массив:
arr.push(4);

// Удаление элемента из массива:
arr.pop();

// Сортировка массива:
arr.sort((a,b) => a - b);

alert(arr);`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте array -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript :
              Date.prototype
            </SubTitle>
            <Text>
              Date.prototype предназначен для работы с датами и временем:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`const date = new Date(); // Создание новой даты
alert(date.getFullYear()); // Возвращает год
alert(date.toDateString()); // Преобразует дату в строку
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте Date -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript :
              Math.prototype
            </SubTitle>
            <Text>
              Math.prototype предлагает набор функций для выполнения
              математических вычислений:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`let res = Math.sin(90); // Вычисляет синус угла 
alert(res);

res = Math.sqrt(25); // Возвращает квадратный корень числа 
alert(res);

res = Math.pow(2, 10); // Возводит число в степень
alert(res);
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте Math -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript :
              String.prototype
            </SubTitle>
            <Text>String.prototype используется для операций со строками:</Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`alert("Hello, world!".toUpperCase()); // Приводит строку к верхнему регистру
alert("HELLO".toLowerCase()); // Приводит строку к нижнему регистру
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте String -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript : Number
            </SubTitle>
            <Text>
              Number.prototype обеспечивает базовые арифметические операции:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`let res = 1 + 2; // 3  
res = 1 - 2; // -1
res = 1 * 2; // 2
res = 1 / 2; // 0.5
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте Number -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript :
              Boolean.prototype
            </SubTitle>
            <Text>Boolean.prototype конвертирует значения в логические:</Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`alert(Boolean(42)); // Конвертирует число в логическое значение true
alert(Boolean("0")); // Конвертирует строку в логическое значение true
alert(Boolean("")); // Конвертирует строку в логическое значение false
`}
                  </code>
                </pre>
              }
            />
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  Значения, которые Boolean конвертирует в false:
                  null,undefined,false,0,"",NaN. <br /> "0" - не является пустой
                  строкой, поэтому будет давать true, а не false как можно было
                  подумать сначала.
                </em>
              </Text>
            </div>
            <Text>
              Больше о объекте Boolean -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>
              Работа со встроенными объектами на языке JavaScript : JSON
            </SubTitle>
            <Text>
              JSON (JavaScript Object Notation) представляет собой текстовый
              формат для обмена данными. Он может быть использован для
              сериализации и десериализации объектов JavaScript:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`let json = JSON.stringify({name: "John", age: 25}); // Сериализация объекта
console.log(json);

let obj = JSON.parse(json); // Десериализация строки JSON в объект JavaScript
console.log(obj);

`}
                  </code>
                </pre>
              }
            />
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  Объекты не отображаются через alert, вывод будет [Object
                  object]. Откройте консоль разработка и посмотрите результаты
                  выполнения кода. (F12 {"->"} Console)
                </em>
              </Text>
            </div>
            <Text>
              Больше о объекте JSON -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON"
                }
              >
                тут
              </OuterLink>
            </Text>{" "}
            <Title>
              Работа с объектной моделью браузера (BOM) на JavaScript.
            </Title>
            <Text>
              Объектная Модель Браузера (Browser Object Model или BOM)
              представляет собой набор объектов и интерфейсов, которые
              используются для взаимодействия с браузером и управления им.{" "}
              <br />
              BOM предоставляет доступ к таким функциям, как работа с окнами,
              управление историей, доступ к информации о пользователе и многое
              другое. В этой лекции мы рассмотрим основные объекты BOM и их
              использование в JavaScript.
            </Text>
            <SubTitle>Window</SubTitle>
            <Text>
              Объект Window представляет окно браузера и позволяет получить
              доступ к его свойствам и методам. Например, можно получить URL
              текущей страницы, изменить заголовок окна, получить доступ к
              вкладке и т.д.:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`// Получаем URL текущей страницы
let url = window.location.href;
alert(url);

// Изменяем заголовок окна
window.document.title = "New Title";
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте window -{" "}
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/API/Window"}
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Document</SubTitle>
            <Text>
              Объект Document представляет HTML-документ, открытый в текущем
              окне. Можно получить доступ к элементам документа, управлять его
              стилями, добавлять и удалять элементы:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/428ym6sth"
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`const addDivBtn = document.querySelector('.addDivBtn');
const body = document.querySelector('body');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const handleClick = () => {
  const div = document.createElement('div');
  div.style.backgroundColor = \`#$\{getRandomInt(999)}\`;
  body.appendChild(div);
}

addDivBtn.addEventListener('click',handleClick);
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте document -{" "}
              <OuterLink
                to={"https://developer.mozilla.org/en-US/docs/Web/API/Document"}
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Location</SubTitle>
            <Text>
              Объект Location предоставляет информацию об URL текущей страницы и
              позволяет изменять его. <br /> Например, можно узнать протокол,
              путь, фрагмент и т.д., а также выполнить переход на другую
              страницу:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`// Узнаем протокол текущего URL
alert(window.location.protocol);`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте location -{" "}
              <OuterLink
                to={"https://developer.mozilla.org/en-US/docs/Web/API/Location"}
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>History</SubTitle>
            <Text>
              Объект History предоставляет доступ к списку посещенных страниц в
              браузере и позволяет выполнять переходы между ними. Можно
              добавлять новые страницы в историю, удалять их, а также переходить
              на определенную страницу:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`// Переходим на предыдущую страницу
history.back();

// Добавим новую страницу в историю
history.pushState({}, 'Title', '?param=value');`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о объекте history -{" "}
              <OuterLink
                to={"https://developer.mozilla.org/en-US/docs/Web/API/History"}
              >
                тут
              </OuterLink>
            </Text>
            <Title>Типы событий в JavaScript и порядок их обработки</Title>
            <Text>
              События в JavaScript - это уведомления о различных действиях
              пользователя, браузера или операционной системы. Они позволяют нам
              реагировать на эти действия и выполнять определенный код. <br />{" "}
              Типы событий: В JavaScript существуют различные типы событий,
              которые могут быть обработаны. Вот некоторые из них:
            </Text>
            <List
              elems={[
                "Mouse events: Эти события связаны с действиями мыши, такими как нажатие кнопки мыши, перемещение мыши или отпускание кнопки мыши. Примеры: onClick, onMouseMove, onMouseDown и т. д.",
                "Keyboard events: Эти события вызываются при нажатии или отпускании клавиш на клавиатуре. Примеры: onKeyPress, onKeyDown, onKeyUp и т. д.",
                "Form events: Эти события используются для обработки ввода в формах, таких как поля ввода, переключатели и кнопки отправки. Примеры: onChange, onSubmit и т. д.",
                "Timer events: Эти события срабатывают через определенные промежутки времени. Пример: setInterval() и clearInterval().",
                "Window events: Эти события происходят, когда пользователь выполняет определенные действия с окном браузера, например, изменяет размер окна или закрывает его. Примеры: onResize, onClose и т. д.",
              ]}
            />
            <Text>
              Порядок обработки событий: События обрабатываются в определенном
              порядке, который называется “event loop”. Вот основные шаги
              обработки событий в JavaScript:
            </Text>
            <List
              elems={[
                "1. Установка обработчиков событий для различных элементов.",
                "2. Ожидание возникновения события.",
                "3. Выполнение кода обработчика события.",
                "4. Возвращение к шагу 2.",
              ]}
            />
            <Text>
              Пример обработки событий: Рассмотрим простой пример обработки
              события click на кнопке:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/428ynyvqv"
              lang={"html (index.html)"}
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
      <button onclick="alert('Hello, World!');">Click me</button>
  </body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              В этом примере обработчик события onclick выводит сообщение
              “Hello, World!” при нажатии на кнопку.
            </Text>
            <Text>
              События играют важную роль в веб-разработке, позволяя нам
              реагировать на действия пользователя и выполнять определенный код
              в ответ на эти действия. Знание различных типов событий и порядка
              их обработки является неотъемлемой частью работы с JavaScript.
            </Text>
            <Text>
              Больше о объекте событиях -{" "}
              <OuterLink
                to={"https://developer.mozilla.org/ru/docs/Web/Events"}
              >
                тут
              </OuterLink>
            </Text>
            <Title>Основы работы с системой библиотек jQuery</Title>
            <Text>
              jQuery - это популярная библиотека JavaScript, которая упрощает
              работу с DOM, обработку событий и AJAX. Она была создана Джоном
              Резигом в 2006 году и с тех пор стала одной из самых популярных
              библиотек JavaScript в мире. <br />
              Откройте любой файл .html, наполните его, далее F12 {"->"}{" "}
              Console. Чтобы подключить библиотеку jQuery нужно написать
              следующий код:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>DOM Manipulation</SubTitle>
            <Text></Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`$(document).ready(function(){
    $('p').css('color', 'red');
});`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              jQuery также упрощает обработку событий. Например, чтобы
              обработать событие click на элементе {"<button>"} (предварительно
              надо его создать), вы можете использовать следующий код:
            </Text>
            <SubTitle>Обработка событий</SubTitle>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`$('button').click(function(){
    alert('Вы нажали на кнопку!');
});`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>AJAX</SubTitle>
            <Text>
              jQuery поддерживает AJAX, что позволяет вам отправлять запросы на
              сервер и получать ответы без перезагрузки страницы. Например,
              следующий код отправляет GET-запрос на сервер и выводит ответ в
              консоль:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`$.get('https://api.github.com/users/jquery', function(data){
    console.log(data);
});`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              jQuery предоставляет множество функций для работы с DOM,
              обработкой событий и AJAX, делая веб-разработку проще и удобнее.
            </Text>
            <Text>
              Больше о jQuery -{" "}
              <OuterLink to={"https://api.jquery.com/"}>тут</OuterLink>
            </Text>
            <PaginationBlock to={"/Courses/JS/3"} back={"/Courses/JS/1"} />
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

export default LessonJS2;
