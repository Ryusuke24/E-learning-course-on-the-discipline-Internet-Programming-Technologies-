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

function LessonLayout2() {
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
            <Title>
              Лекция 2 : Основы применения адаптивного дизайна и мультимедиа при
              верстке веб-страниц.
            </Title>
            <SubTitle>
              Введение в адаптивный дизайн макета веб-страницы
            </SubTitle>
            <Text>
              Сейчас все большее распространение находят различные гаджеты –
              смартфоны, планшеты, "умные часы" и другие устройства, которые
              позволяют выходить в интернет, просматривать содержимое сайтов.{" "}
              <br /> По некоторым оценкам уже чуть ли не половина
              интернет-траффика генерируется подобными гаджетами, разрешение
              экрана которых отличается от разрешения экранов стандартных
              компьютеров.
              <br />
              <br />
              Подобное распространение гаджетов несет новые возможности по
              развитию веб-сайтов, привлечения новых посетителей, продвижению
              информационных услуг и т.д. <br /> Но вместе с тем появляются и
              новые проблемы.
              <br />
              <br />
              Главная проблема заключается в том, что стандартная веб-страница
              будет по-разному выглядеть для разных устройств с разным
              разрешением экрана.
              <br />
              <br />И для решения проблемы совместимости веб-страниц с самыми
              различными разрешениями самых различных устройств возникла
              концепция адаптивного дизайна. <br /> Ее суть заключается в том,
              чтобы должным образом масштабировать элементы вебстраницы в
              зависимости от ширины экрана.
            </Text>
            <SubTitle>Тестирование адаптивного дизайна</SubTitle>
            <Text>
              При разработке адаптивных веб-страниц можно столкнуться с
              трудностями тестирования, так как, как правило, разработка идет на
              обычных компьютерах. <br /> Но к счастью многие современные
              браузеры позволяют нам эмулировать запуск вебстраницы на том или
              ином устройстве с различной шириной экрана. <br /> Например, в
              Google Chrome надо перейти в меню Дополнительные инструменты{" "}
              {"-> "}
              Инструменты разработчика. <br />
              После открытия панели разработчика в начале меню самой панели
              можно нажать на иконку мобильного телефона, и после этого можно
              будет эмулировать отображение страницы на различных устройствах -
              от небольших телефонов до широкоформатных телевизоров
            </Text>
            <SubTitle>Метатег Viewport</SubTitle>
            <Text>
              Метатег viewport является ключевым моментом применения адаптивного
              дизайна.{" "}
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Параметр width=device-width устанавливает начальную ширину равную
              ширине экрана устройства. Поэтому веб-браузер не будет проводить
              никакого масштабирования.
            </Text>
            <SubTitle>Media Query</SubTitle>
            <Text>
              Механизм CSS 3 Media Query позволяет определить стиль в
              зависимости от размеров браузера пользователя. <br />
              Обычно медиа-запросы опреляются в css файле, например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`@media (max-width: 300px) {
    body {
      background-color: red;
    }
}

@media (min-width: 301px) {
  body {
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
              linkToEdit={"https://onecompiler.com/html/428ea9tyy"}
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
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Попробуйте изменить размер окна браузера. Сначала у вас будет
              синий фон, но есть ли вы уменьшите окно браузера, то он изменится
              на красный.
            </Text>
            <Text>
              Больше о медиа-запросах -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries"
                }
              >
                тут
              </OuterLink>
              <br />
              Как правило, при определении стилей предпочтение отдается стилям
              для самых малых экранов - так называемый подход Mobile First.
            </Text>
            <Title>
              Порядок настройки и воспроизведения видео- и аудиофайлов в HTML5
            </Title>
            <SubTitle>Видео</SubTitle>
            <Text>
              Для воспроизведения видео в HTML5 используется элемент video.
              Перечень атрибутов для настройки элемента video:
            </Text>
            <List
              elems={[
                "src: источник видео, это может быть какой-либо видеофайл;",
                "width: ширина элемента;",
                "height: высота элемента;",
                "controls: добавляет элементы управления воспроизведением;",
                "loop: задает повторение видео;",
                "и другие...",
              ]}
            />
            <Text>Пример тега video:</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {`<video
  width="480"
  controls
  poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4" />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg" />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm" />
  Your browser doesn't support HTML5 video tag.
</video>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Главная проблема при использовании элемента video – это поддержка
              различными веб-браузерами определенных форматов. С помощью
              вложенных элементов source можно задать несколько источников
              видео, один из которых будет использоваться. <br /> Элемент source
              использует два атрибута для установки источника видео:
            </Text>
            <List
              elems={["src: путь к видеофайлу;", "type: тип видео (MIME-тип)."]}
            />
            <Text>
              Если браузер не поддерживает первый тип видео, то он пытается
              загрузить второй видеофайл. <br />
              Если же и тип второго видеофайла не поддерживается, то браузер
              обращается к третьему видеофайлу.
            </Text>
            <SubTitle>Аудио</SubTitle>
            <Text>
              Для воспроизведения звука без видео в HTML5 применяется элемент
              audio. Он во многом похож на элемент video. <br /> Пример тега
              audio:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML"}
              code={
                <pre>
                  <code className="language-html">
                    {` <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Ключевым моментом для работы с аудио является поддержка браузером
              тех или иных форматов. <br /> На данный момент подавляющее
              большинство браузеров поддерживают mp3.
              <br /> Если есть неуверенность, что аудио в определенном формате
              будет поддерживаться браузером пользователя, то можно использовать
              вложенный элемент source и указать аудио в иных форматах. <br />{" "}
              Больше о video -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video"
                }
              >
                тут
              </OuterLink>{" "}
              <br />
              Больше о audio -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/HTML/Element/audio"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Media API. Управление видео из JavaScript</SubTitle>
            <Text>
              Вместе с элементами audio и video в HTML5 есть API в JavaScript
              для управления этими элементами. С помощью кода JavaScript можно
              получить элементы video и audio (как и любой другой элемент) и
              использовать их свойства. В JavaScript эти элементы представлены
              объектом HTMLMediaElement, который с помощью свойств, методов и
              событий позволяет управлять воспроизведением аудио и видео. <br />
              Свойства интерфейса HTMLMediaElement -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/API/HTMLMediaElement"
                }
              >
                тут
              </OuterLink>
              <br />
              Пример работы с объектом HTMLMediaElement:
            </Text>
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
    <video id="videoPlayer" controls>
      <source src="movie.mp4" type="video/mp4" />
      <source src="movie.ogg" type="video/ogg" />
      Your browser does not support HTML5 video.
    </video>
    <script>
      async function getVideoStream() {
        // Получить ссылку на элемент <video>
        const video = document.getElementById("videoPlayer");

        // Создать объект MediaStream, используя видео с веб-камеры
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        // Установить видеопоток в видеоэлемент
        video.srcObject = stream;

        // Убрать кнопки управления воспроизведением, так как они уже есть на странице
        video.controls = false;

        // Запустить воспроизведение видео
        video.play();
      }
      getVideoStream();
    </script>
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
                  В онлайн-компиляторе у вас возможно не будет работать данный
                  код из-за соображений безопасности, попробуйте создать .html
                  на вашем компьютере, тогда код будет работать.
                </em>
              </Text>
            </div>
            <Title>Основы работы с графикой в HTML5</Title>
            <SubTitle>Основы canvas</SubTitle>
            <Text>
              Canvas это элемент HTML5 который позволяет пользователю рисовать
              2D графику на веб странице. <br /> Вот пример кода для создания
              холста размером 300x300 пикселей и рисования квадрата в центре:
            </Text>
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
    <canvas id="myCanvas" width="300" height="300"></canvas>
  </body>
</html>
`}
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
                    {`var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(100, 100, 50, 50);`}
                  </code>
                </pre>
              }
            />
            <Text>
              Это создаст красный квадрат размером 50x50 пикселей по центру
              холста. <br /> Больше о canvas -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes"
                }
              >
                тут
              </OuterLink>
            </Text>
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  Так же существует возможность работы с 3D, но ввиде отдельных
                  библиотек (Three.js).{" "}
                  <OuterLink to={"http://letsplay.ouigo.com/"}>
                    Пример работы с 3D графикой
                  </OuterLink>
                </em>
              </Text>
            </div>
            <SubTitle>Рисование в canvas</SubTitle>
            <Text>
              Простой пример рисования на canvas с использованием указателя
              мыши:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/428ef7z8s"
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
  </head>
  <body>
    <canvas id="myCanvas" width="300" height="300"></canvas>
    <button id="clsBtn" type="submit">Очистить холст</button>
    <script src="script.js" type="text/javascript" charset="utf-8"></script>
  </body>
</html>
`}
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
                    {`const canvas = document.querySelector('canvas');
const clsButton = document.getElementById('clsBtn');
console.log(clsButton)
const ctx = canvas.getContext('2d');
let isDrawing = false;
let startX;
let startY;

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  startX = e.clientX - canvas.getBoundingClientRect().left;
  startY = e.clientY - canvas.getBoundingClientRect().top;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

clsButton.addEventListener('click', () => {
   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   console.log('qwe');
})`}
                  </code>
                </pre>
              }
            />
            <br />
            <PaginationBlock
              to={"/Courses/Layout/3"}
              back={"/Courses/Layout/1"}
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

export default LessonLayout2;
