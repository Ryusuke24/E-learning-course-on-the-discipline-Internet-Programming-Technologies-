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

function LessonLayout4() {
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
              Практическое занятие 3 : Порядок применения современных средств
              макетирования и верстка веб-страниц с применением адаптивного
              дизайна и мультимедиа
            </Title>
            <SubTitle>
              Задание 1: : Создайте веб-страницу с адаптивным дизайном
            </SubTitle>
            <Text>
              Создайте веб-страницу с адаптивным дизайном для описания вакансии
              в IT-компании. Страница должна содержать следующую информацию:
            </Text>
            <List
              elems={[
                "Заголовок",
                "Краткое описание компании",
                "Требования к кандидату (образование, опыт работы, навыки)",
                "Обязанности на позиции",
                "Предлагаемые условия работы и контакты для связи",
              ]}
            />
            <Text>В десктопной версии дизайн будет сеткой 2х4, где :</Text>
            <List
              elems={[
                "Заголовок распологается на первой строке и занимает два столбца",
                "Блок описания компании и требования к кандидату занимают вторую строку",
                "Блок обязанностей занимает третью строку",
                "Блок условий и контактов четвертую строку",
              ]}
            />
            <Text>
              В мобильной версии дизайн будет последовательным порядком блоков,
              где :
            </Text>
            <List
              elems={[
                "Заголовок - первый блок и имеет высоту 100px",
                "Остальные блоки по вашему усмотрению",
              ]}
            />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"CSS (styles.css)"}
              code={
                <pre>
                  <code className="language-css">
                    {`@media (max-width: 990px) {
        body {
          font-family: Sans-Serif;
          background-color: #323232;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .companyDescription,
        .conditionAndContacts,
        .requirements,
        .responsibilities {
          padding: 15px;
          border: 1px solid black;
          border-radius: 5px;
        }

        .title {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          font-size: 3em;
        }
      }

      @media (min-width: 991px) {
        body {
          font-family: Sans-Serif;
          background-color: #323232;
          color: white;
          display: grid;
          gap: 15px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 100px 1fr 1fr 1fr;
          grid-template-areas:
            "title title"
            "companyDescription requirements"
            "responsibilities responsibilities"
            "conditionAndContacts conditionAndContacts";
        }

        .title {
          display: inline-flex;
          justify-content: center;
          font-size: 3em;
          grid-area: title;
        }

        .companyDescription,
        .conditionAndContacts,
        .requirements,
        .responsibilities {
          padding: 15px;
          border: 1px solid black;
          border-radius: 5px;
        }

        .companyDescription {
          grid-area: companyDescription;
        }

        .requirements {
          grid-area: requirements;
        }

        .responsibilities {
          grid-area: responsibilities;
        }

        .conditionAndContacts {
          display: flex;

          grid-area: conditionAndContacts;
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
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="title">Требования к кандидату в IT-компанию Y</h1>
    <div class="companyDescription">
      <h2>Y</h2>
      <p>
        IT-компания Y - это инновационный и быстрорастущий лидер в области
        разработки программного обеспечения и предоставления IT-услуг. Мы
        специализируемся на создании комплексных решений для управления
        бизнесом, разработки мобильных приложений и веб-разработки. Наша команда
        состоит из талантливых программистов, дизайнеров, менеджеров проектов и
        специалистов в области искусственного интеллекта. Мы стремимся
        использовать самые передовые технологии и методы разработки, чтобы
        создавать продукты, которые улучшают качество жизни наших клиентов и
        делают их бизнес более эффективным. С компанией Y, вы можете быть
        уверены, что ваши IT-потребности будут удовлетворены на самом высоком
        уровне.
      </p>
    </div>
    <div class="requirements">
      <h2>Требования к кандидату</h2>
      <ul>
        <li>
          Мы ищем талантливых специалистов с опытом работы в IT-индустрии не
          менее 3 лет.
        </li>
        <li>
          Предпочтение отдается кандидатам с образованием в области компьютерных
          наук или инженерии.
        </li>
        <li>
          Также мы хотим видеть в нашей команде людей, обладающих навыками
          работы с современными инструментами разработки и имеющих опыт создания
          крупных программных продуктов.
        </li>
        <li>
          Знание английского языка является обязательным условием для работы в
          нашей компании.
        </li>
      </ul>
    </div>
    <div class="responsibilities">
      <h2>Обязанности</h2>
      <ul>
        <li>Разработка новых продуктов и услуг.</li>
        <li>Поддержка и развитие уже существующих.</li>
      </ul>
    </div>
    <div class="conditionAndContacts">
      <div class="condition">
        <h2>Условия работы</h2>
        <p>
          Мы предлагаем конкурентную заработную плату, бонусы за достижение KPI,
          социальный пакет ( ДМС, фитнес, обучение ), возможность
          профессионального роста и работы над интересными проектами.
        </p>
      </div>
      <div class="contacts">
        <h2>Наши контакты</h2>
        <p>
          Наши контакты: Телефон: +7 (800) 555-34-22 E-mail: info@it-company.com
          Сайт: www.it-company.com
        </p>
      </div>
    </div>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />

            <SubTitle>
              Задание 2: Разработайте сайт-резюме с использованием адаптивного
              дизайна.
            </SubTitle>
            <Text>
              Разработайте сайт-резюме с использованием адаптивного дизайна, в
              котором присутствуют следующие элементы:
            </Text>
            <List
              elems={[
                "Фотография",
                "Блок со списком навыков",
                "Блок с должностью и желаемой зарплатой",
                "Блок с практическим опытом",
                "Блок с информацией о себе",
              ]}
            />
            <Text>
              Дизайн произвольный. <br /> Особенности:{" "}
            </Text>
            <List
              elems={[
                "Для мобильной версии, блоки идут друг за другом",
                "Для десктопной версии, блоки располагаются в виде сетки 2x2",
              ]}
            />

            <SubTitle>
              Задание 3: Создать страницу с видео, которое воспроизводится при
              загрузке страницы.{" "}
            </SubTitle>
            <Text>
              Создать страницу с видео, которое воспроизводится при загрузке
              страницы. Использовать тег {"<video>"} и задать его свойства width
              и height, а также источник видео через атрибут src. <br />
              Пример выполнения:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.html)"}
              code={
                <pre>
                  <code className="language-html">
                    {`
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <video width="640" height="480" controls>
      <source src="movie.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </body>
</html>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>
              Задание 4: Создать страницу с аудио, которое воспроизводится по
              клику на кнопку.
            </SubTitle>
            <Text>
              Создать страницу с аудио, которое воспроизводится по клику на
              кнопку. Использовать тег {"<audio>"} и задать его источник через
              атрибут src, а также добавить элемент {"<button>"} с событием
              onclick, которое запускает воспроизведение аудио.
              <br />
            </Text>

            <PaginationBlock
              to={"/Courses/Layout/test"}
              back={"/Courses/Layout/3"}
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

export default LessonLayout4;
