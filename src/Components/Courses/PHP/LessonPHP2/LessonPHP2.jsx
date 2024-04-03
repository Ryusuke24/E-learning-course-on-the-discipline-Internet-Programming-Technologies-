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

function LessonPHP2() {
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
          title={"Учебный курс по PHP"}
          elems={[
            {
              to: "/courses/PHP/1",
              text: (
                <p>
                  1. Лекция <br />
                  <span className={style.markedText}>Основы PHP</span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/2",
              text: (
                <p>
                  2. Лекция <br />
                  <span className={style.markedText}>
                    Базовые и дополнительные возможности PHP
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/3",
              text: (
                <p>
                  3. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Разработка веб-сценариев на языке PHP
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/4",
              text: (
                <p>
                  4. Практическое занятие
                  <br />
                  <span className={style.markedText}>
                    Порядок применения средств разработки скриптов для
                    веб-страниц на языке PHP
                  </span>
                </p>
              ),
            },
            {
              to: "/courses/PHP/test",
              text: (
                <p>
                  <span className={style.markedText}>
                    Тестирование по теме PHP
                  </span>
                </p>
              ),
            },
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>Лекция 2 : Базовые и дополнительные возможности PHP</Title>
            <Title>Базовые возможности PHP</Title>
            <SubTitle>Работа со строками</SubTitle>

            <Text>
              Строки играют большую роль, задачи на парсинг (синтаксического
              анализа) строк довольно часто встречаются в PHP, поэтому следует
              рассмотреть некоторые базовые функции работы со строками.
              <br /> Но прежде чем начать работу со строками, откройте файл
              php.ini и найдите в нем следующую строку:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"php.ini"}
              code={
                <pre>
                  <code className="language-clike">
                    {`;extension=php_mbstring.dll`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Раскомментируйте ее, убрав точку с запятой. Сохраните файл
              php.ini, перезапустите веб-сервер Apache.
              <br />
              Подключение расширения php_mbstring.dll позволит задействовать
              некоторые дополнительные функции для работы со строками, которые в
              стандартном наборе PHP отсутствуют.
            </Text>
            <SubTitle>
              Работа со строками: функции strpos() и mb_strpos()
            </SubTitle>
            <Text>
              Функция strpos($str, $search) возвращает позицию подстроки или
              символа $search в строке $str или значение false, если строка $str
              не содержит подстроки $search:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
    $input = 'This is the end';
    $search = 'is';
    $position = strpos($input,$search); // 2
    if ( $position !== false ) {
      echo "Позиция подстроки '$search' в строке '$input' : $position"
    }                  
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              При использовании этой функции надо учитывать, что индексация
              символов в строке начинается с нуля, поэтому позиция символа 'T'
              будет равна 0. Поэтому сравнение $position!=false будет работать
              некорректно, ведь false и 0 при сравнении и приведении к общему
              типу будут представлять одно и то же значение. Поэтому в данном
              случае корректно использовать только операцию эквивалентности:
              $position!==false или $position===false.
              <br /> Изучить больше функций, вы можете{" "}
              <OuterLink to={"https://www.php.net/manual/ru/ref.strings.php"}>
                тут
              </OuterLink>
            </Text>
            <SubTitle>Работа с cookie</SubTitle>
            <Text>
              Cookie (куки) представляют небольшие наборы данных (не более 4
              кБайт), с помощью которых веб-сайт может сохранить на компьютере
              пользователя любую информацию. С помощью куки можно отслеживать
              активность пользователя на сайте: залогинен пользователь на сайте
              или нет, отслеживать историю его визитов и т.д. <br />
              Для сохранения куки на компьютере пользователя используется
              функция setcookie(). Она имеет следующее определение:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
   bool setcookie(string $name, string $value, int $expire, string $path, string $domain, bool $secure, bool $httponly);
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Функция setcookie() может принимать следующие параметры:
            </Text>
            <List
              elems={[
                "name: имя cookie, которое будет использоваться для доступа к его значению;",
                "value: значение или содержимое cookie - любой алфавитно-цифровой текст не более 4 кБайт;",
                "expire (необязательный параметр): срок действия, после которого cookie уничтожаются. Если данный параметр не установлен или равен 0, то уничтожение cookie происходит после закрытия браузера;",
                "path (необязательный параметр): путь к каталогу на сервере, для которого будут доступны cookie. Если задать '/', cookie будут доступны для всего сайта. Если задать, например, '/mydir/', cookie будут доступны только из каталога /mydir/' и всех его подкаталогов. По умолчанию значением является текущий каталог, в котором устанавливаются cookie;",
                "domain (необязательный параметр): задает домен, для которого будут доступны cookie. Если это домен второго уровня, например, localhost.com, то cookie доступны для всего сайта localhost.com, в том числе и для его поддоменов типа blog.localhost.com;",
                "Если задан поддомен blog.localhost.com, то cookie доступны только внутри этого поддомена;",
                "secure (необязательный параметр): указывает на то, что значение cookie должно передаваться по протоколу HTTPS. Если задано true, cookie от клиента будет передано на сервер, только если установлено защищенное соединение. По умолчанию равно false;",
                "httponly (необязательный параметр): если равно true, cookie будут доступны только через http протокол. То есть cookie в этом случае не будут доступны скриптовым языкам, например, JavaScript. По умолчанию параметр равен false.",
              ]}
            />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
// Example
// Setting a cookie
setcookie("usertoken", "noice", time()+20*24*60*60);
// 20 days = 20*24*60*60 seconds

setcookie("usertoken", "", time()-3600)
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о setcookie -{" "}
              <OuterLink
                to={"https://www.php.net/manual/ru/function.setcookie.php"}
              >
                тут
              </OuterLink>{" "}
            </Text>
            <SubTitle>Сессии</SubTitle>
            <Text>
              Сессии представляют набор переменных, которые хранятся на сервере
              (либо часть на сервере, а часть - в cookie браузера) и которые
              относятся только к текущему пользователю. В какой-то степени
              сессии являются альтернативой кукам в плане сохранения данных о
              пользователе.
              <br /> Для запуска сессии необходимо вызвать функцию
              session_start().
              <br /> Затем для сохранения или получения данных в сессии надо
              использовать глобальный ассоциативный массив $_SESSION. Пример
              сохранения переменной в сессии:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
    session_start();
    $_SESSION['имя_переменной'] = $переменная;

    //Пример получение сохраненного значения:
    $переменная =  $_SESSION['имя_переменной']

    //Вывод значений 
    if (isset($_SESSION['city']) && isset($_SESSION['lang']) {
      $city = $_SESSION['city'];
      $language = $_SESSION['lang'];
      echo "Город: $city <br/> Язык: $language";
    }
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              При запуске сессии, если пользователь первый раз заходит на сайт,
              PHP назначает ему уникальный идентификатор сессии. Этот
              идентификатор с помощью cookie сохраняется в браузере
              пользователя. <br /> Больше о сессиях -{" "}
              <OuterLink to={"https://www.php.net/manual/ru/book.session.php"}>
                тут
              </OuterLink>
            </Text>
            <Title>Порядок работы с файловой системой на PHP</Title>
            <SubTitle>Чтение и запись файлов</SubTitle>
            <Text>
              Для открытия файлов в PHP определена функция fopen(). Она имеет
              следующее определение: resource fopen(string $filename, string
              $mode). Первый параметр $filename представляет путь к файлу, а
              второй - режим открытия. В зависимости от цели открытия и типа
              файла данный параметр может принимать следующие значения:
            </Text>
            <List
              elems={[
                "'r': файл открывается только для чтения. Если файла не существует, возвращает false",
                "'r+': файл открывается только для чтения с возможностью записи. Если файла не существует, возвращает false;",
                "w': файл открывается для записи. Если такой файл уже существует, то он перезаписывается, если нет - то он создается;",
                "'w+': файл открывается для записи с возможностью чтения. Если такой файл уже существует, то он перезаписывается, если нет - то он создается;",
                "'a': файл открывается для записи. Если такой файл уже существует, то данные записываются в конец файла, а старые данные остаются. Если файл не существует, то он создается;",
                "'a+': файл открывается для чтения и записи. Если файл уже существует, то данные дозаписываются в конец файла. Если файла нет, то он создается.",
              ]}
            />
            <Text>
              Результатом функции fopen будет дескриптор файла. Этот дескриптор
              используется для операций с файлом и для его закрытия. <br />
              После окончания работы файл надо закрыть с помощью функции
              fclose(), которая принимает в качестве параметра дескриптор файла.{" "}
              <br /> Пример открытия и закрытия файла:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
    $fd = fopen("form.php","r") or die("Не удалось открыть файл");
    while(!feof($fd)) {
      $str - htmlentities(fgets($fg));
      echo $str;
    }
    fclose($fd);
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Конструкция or die ("текст ошибки") позволяет прекратить работу
              скрипта и вывести некоторое сообщение об ошибке, если функция
              fopen не смогла открыть файл. <br />
              Для чтения файла можно использовать несколько функций. Для
              построчного чтения используется функция fgets(), которая получает
              дескриптор файла и возвращает одну считанную строку. <br /> При
              каждом вызове fgets() PHP будет помещать указатель в конец
              считанной строки. Чтобы проследить окончание файла, используется
              функция feof(), которая возвращает true при завершении файла. И
              пока не будет достигнут конец файла, можно применять функцию
              fgets(). <br /> Если надо прочитать файл полностью, то можно
              облегчить себе жизнь, применив функцию file_get_contents():
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
      $str - htmlentities(file_get_contents("form.php"));
      echo $str;
?>`}
                  </code>
                </pre>
              }
            />
            <br />

            <Text>
              Для записи файла применяется функция fwrite(), которая записывает
              в файл строку:
            </Text>

            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
    $fd = fopen("form.php","r") or die("Не удалось открыть файл");
     
    $str - htmlentities(fgets($fg));
    echo $str;
    fwrite($fd,$str);
    
    fclose($fd);
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о работе с файлами -{" "}
              <OuterLink
                to={"https://www.php.net/manual/ru/features.remote-files.php"}
              >
                тут
              </OuterLink>
            </Text>
            <Title>
              Основы объектно-ориентированного программирования на PHP
            </Title>
            <SubTitle>Объекты и классы</SubTitle>
            <Text>
              Объектно-ориентированное программирование (ООП) - это стиль
              программирования, основанный на создании и использовании объектов.
              <br />
              Объекты представляют собой сущности с данными и методами,
              работающими с этими данными. В PHP ООП реализуется через создание
              классов и объектов. <br /> Класс - это шаблон для создания
              объектов, определяющий их структуру и поведение. Объект - это
              экземпляр класса, который содержит данные и методы, определенные в
              классе. Вот пример простого класса “Person” в PHP:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
    $class Person {
      public $name;
      public $age;
  
      function __construct($name, $age) {
          $this->name = $name;
          $this->age = $age;
      }
  
      function getInfo() {
          return "Имя: {$this->name}, возраст: {$this->age}";
      }
  }
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Здесь мы создали класс "Person" с двумя свойствами (имя и возраст)
              и методом "getInfo", который возвращает информацию о человеке.
              Теперь мы можем создать объекты этого класса и работать с ними:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
    $class Person {
      public $name;
      public $age;
  
      function __construct($name, $age) {
          $this->name = $name;
          $this->age = $age;
      }
  
      function getInfo() {
          return "Имя: {$this->name}, возраст: {$this->age}";
      }
  }

  $john = new Person("Джон", 30);
  echo $john->getInfo(); // Вывод: Имя: Джон, возраст: 30
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Это простой пример использования ООП в PHP. С помощью классов и
              объектов можно создавать более сложные структуры данных и
              алгоритмы.
              <br /> Больше о ООП в PHP -{" "}
              <OuterLink to={"https://www.php.net/manual/ru/language.oop5.php"}>
                тут
              </OuterLink>
            </Text>
            <Title>Основы работы с базами данных формата MySQL на PHP</Title>
            <Text>
              База данных (сокращенно БД) - это место, в котором хранятся данные
              сайта. Это могут быть тексты страниц, списки пользователей с их
              логинами и паролями, каталоги продукции и другое.
              <br />
              База данных состоит из таблиц. Что такое таблица вы знаете из
              жизни: это строки и столбцы. А на пересечении строк и столбцов
              располагаются ячейки.
              <br />
              В базах данных столбцы часто называют полями, а строки - записями.
              <br />
              Сама база данных представляет собой некоторую программу, хранящую
              в себе данные и позволяющую эти данные получать и изменять.
              <br />
              Получение и изменение данных происходит с помощью запросов.
              Запросы представляют собой команды, написанные на специальном
              языке - SQL.
              <br />
              Работа с базами данных через PHP не представляет особой сложности.
              Единственное, с чем могут возникнуть проблемы - это долгий
              начальный подготовительный этап, который растянется на несколько
              уроков.
              <br />
              Но, после того, как мы все подготовим, дальше все станет
              значительно проще.
              <br /> Для просмотра и редактирования содержимого баз данных часто
              пользуются программой PhpMyAdmin (часто пишут аббревиатуру PMA или
              ПМА).
              <br />
              С помощью PMA вы можете создавать новые базы данных, создавать
              новые таблицы, просматривать и редактировать содержимое таблиц и
              другие полезные вещи.
              <br />В следующем видео показаны основы работы с PMA:{" "}
              <OuterLink to={"https://www.youtube.com/watch?v=st9A8d4J6Js"}>
                Видео
              </OuterLink>{" "}
              <br /> В дальнейшем продолжайте работу по этому курсу -{" "}
              <OuterLink
                to={
                  "https://code.mu/ru/php/book/prime/database/test-table-users/"
                }
              >
                курс
              </OuterLink>{" "}
            </Text>
            <PaginationBlock to={"/Courses/PHP/3"} back={"/Courses/PHP/1"} />
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

export default LessonPHP2;
