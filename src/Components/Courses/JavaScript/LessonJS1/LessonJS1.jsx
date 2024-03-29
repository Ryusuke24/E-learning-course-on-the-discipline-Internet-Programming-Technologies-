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

function LessonJS1() {
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
          ]}
        />
        <div className={style.main}>
          <section className={style.section1}>
            <Title>Лекция 1 : Основы JavaScript</Title>
            <SubTitle>Введение в язык JavaScript.</SubTitle>
            <Text>
              Сегодняшний мир веб-сайтов трудно представить без языка
              JavaScript. JavaScript позволяет «оживить» веб-страницы, которые
              пользователи просматривают в своих веб-браузерах. <br />{" "}
              JavaScript был создан в 1995 году в компании Netscape в качестве
              языка сценариев в браузере Netscape Navigator 2. Первоначально
              язык назывался LiveScript, но на волне популярности в тот момент
              другого языка Java LiveScript был переименован в JavaScript.{" "}
              <br /> Однако данный момент до сих пор иногда приводит к некоторой
              путанице: некоторые начинающие разработчики считают, что Java и
              JavaScript чуть ли не один и тот же язык. Нет, это абсолютно два
              разных языка, и они связаны только по названию.
            </Text>
            <Text>
              {" "}
              Первоначально JavaScript обладал довольно небольшими
              возможностями. Его цель состояла лишь в том, чтобы добавить
              немного поведения на веб-страницу. Например, обработать нажатие
              кнопок на веб-странице, произвести какие-нибудь другие действия,
              связанные прежде всего с элементами управления. <br />
              Однако развитие веб-среды, появление HTML5 и технологии Node.js
              открыло перед JavaScript гораздо большие горизонты. Сейчас
              JavaScript продолжает использоваться для создания веб-сайтов,
              только теперь он предоставляет гораздо больше возможностей. <br />
              Также он применяется как язык серверной стороны. То есть если
              раньше JavaScript применялся только на веб-странице, а на стороне
              сервера нам надо было использовать такие технологии, как PHP,
              ASP.NET, Ruby, Java, то сейчас благодаря Node.js можно
              обрабатывать все запросы к серверу также с помощью JavaScript.{" "}
            </Text>
            <Text>
              С самого начала существовало несколько веб-браузеров (Netscape,
              Internet Explorer), которые предоставляли различные реализации
              языка. Чтобы стандартизировать язык под руководством организации
              ECMA был разработан стандарт ECMAScript. В принципе сами термины
              JavaScript и ECMAScript являются во многом взаимозаменяемыми и
              относятся к одному и тому же языку. <br />К настоящему времени
              ECMA было разработано несколько стандартов языка, которые отражают
              его развитие. Последним принятым на сегодняшний день стандартом
              является ECMAScript 2015 (ES 6). <br />
              JavaScript является интерпретируемым языком. Это значит, что код
              на языке JavaScript выполняется с помощью интерпретатора.
              Интерпретатор получает инструкции языка JavaScript, которые
              определены на веб-странице, выполняет их (или интерпретирует).{" "}
              <br />
              Пример простейшей программы:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={true}
              linkToEdit="https://onecompiler.com/html/428pgkeq3"
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`alert("Hello world!");`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Основы синтаксиса JavaScript</SubTitle>
            <Text>
              Код JavaScript состоит из инструкций, каждая из которых
              завершается точкой запятой:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`alert("Hello"); let a = 5 + 8; alert(a);`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Однако современные браузеры вполне могут различать отдельные
              инструкции, если они просто располагаются на отдельных строках без
              точки запятой (чтобы улучшить читабельность кода и снизить
              количество ошибок, желательно все равно писат ; в конце
              выражения):
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">
                    {`alert("Вычисление...");
let a = 100 + 50;
alert(a);`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Подключение внешнего файла JavaScript</SubTitle>
            <Text>
              Кроме как встраивание в код HTML тега {"<script></script>"},
              подавляющее большинство разрабочитков использует подключение файла
              .js через тег {"<script></script>"}
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
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <script src="script.js"></script>
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
                  Лучше всего встраивать скрипт после загрузки всего DOM-дерева
                  т.е. перед закрытием тега {"</body>"} или же использовать
                  атрибут defer, тогда скрипт не будет выполнятся до того как
                  страница загрузится полностью.
                </em>
              </Text>
            </div>
            <Text>
              В отличие от определения кода JavaScript вынесение его во внешние
              файлы имеет ряд преимуществ:
            </Text>
            <List
              elems={[
                "Можно повторно использовать один и тот же код на нескольких веб-страницах",
                "Внешние файлы javascript браузер может кэшировать, за счет этого при следующем обращении к странице браузер снижает нагрузка на сервер, а браузеру надо загрузить меньший объем информации",
                "Код веб-страницы становится 'чище'. Он содержиттолько html-разметку, а код поведения хранится во внешних файлах. В итоге можно отделить работу по созданию кода html-страницы от написания кода JavaScript",
              ]}
            />
            <Text>
              Во всех современных браузерах есть инструменты разработчика
              (Например в Chrome, при нажатии клавиши F12, открываются
              инструменты разработчика). <br /> В них есть вкладка console, в
              которую тоже можно выводить данные. <br /> Пример:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`console.log("JS is cool!");`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Нажмите F12, выберите консоль и запустите приведенный выше код.
            </Text>
            <Title>
              Основы JavaScript: переменные, типы данных, основные методы и
              функции.
            </Title>
            <SubTitle>Переменные</SubTitle>
            <Text>
              Для хранения данных в программе используются переменные;
              <br />
              Переменные предназначены для хранения каких-нибудь временных
              данных или таких данных, которые в процессе работы могут менять
              свое значение; <br /> Для создания переменных применяется ключевое
              слово let (можно изменять) или const (константа, нельзя изменить),
              а так же устаревшее var; <br /> Пример объявления переменной
              counter и переменной name:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let counter;
const name;
var fullname;`}</code>
                </pre>
              }
            />
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  let и const отличаются от var областью видимости. Более
                  подробнее можно узнать{" "}
                  <OuterLink
                    to={
                      "https://medium.com/nuances-of-programming/var-let-const-%D0%B2-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-dc6c3beb0b12#:~:text=var%20%2D%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%BE%D0%B3%D1%83%D1%82%20%D0%B1%D1%8B%D1%82%D1%8C%20%D0%BA%D0%B0%D0%BA,%D0%BE%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F%20%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%D0%BD%D0%B0%D0%B2%D0%B5%D1%80%D1%85%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8."
                    }
                  >
                    тут
                  </OuterLink>
                </em>
              </Text>
            </div>
            <Text>
              Каждая переменная имеет имя;
              <br /> Имя представляет собой произвольный набор
              алфавитно-цифровых символов, знака подчеркивания (_) или знака
              доллара ($), причем названия не должны начинаться с цифровых
              символов;
              <br /> В имени переменной можно использовать буквы, цифры,
              подчеркивание. Однако все остальные символы запрещены. <br />
              Примеры правильных названий переменных:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let counter;
const $color;
var fullnameOfEmployee;
let sorted_array;`}</code>
                </pre>
              }
            />
            <br />
            <Text>Примеры неправильных названий переменных:</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let counter;
const 123;
var @special;
let my%percent;`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Также нельзя давать переменным такие имена, которые совпадают с
              зарезервированными ключевыми словами. <br /> Например, следующее
              название будет некорректным, так как for - ключевое слово в
              JavaScript:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let for;
const in;
var function;`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Типы данных</SubTitle>
            <Text>
              В JavaScript типизация данных является динамической и слабо
              типированной. Это означает, что переменные не имеют типа данных,
              который строго им присваивается на этапе объявления. Вместо этого
              тип переменной определяется тем, какое значение хранится в ней.{" "}
              <br />В JavaScript существуют разные типы данных (8 типов):
            </Text>
            <List
              elems={[
                'Строки (String) - последовательности символов, заключенные в двойные кавычки (“строка”) или в обратные кавычки ("строка").',
                "Числа (Number) - могут быть целыми (например, 42), десятичными (например, 3.14) или с плавающей запятой (например, -1.23e-5).",
                "Логические значения (Boolean) - принимают значение true или false.",
                "BigInt в JavaScript предназначен для работы с очень большими числами, которые не помещаются в стандартные числовые типы Number. ",
                "Null - специальное значение, которое указывает на отсутствие какого-либо значения.",
                "Undefined - специальное значение, указывающее на то, что переменная не была определена или инициализирована.",
                "Символы (Symbol) - уникальные, не имеющие имени значения, используемые для создания свойств объектов, которые не могут конфликтовать с другими свойствами.",
                "Объекты (Object) - структуры данных, состоящие из пар ключ:значение, где ключ - строка, а значение может быть любого типа, так же в этот тип входят массивы и функции.",
              ]}
            />
            <SubTitle>Типы данных: Числа (Number)</SubTitle>
            <Text>Числа в JavaScript могут иметь две формы:</Text>
            <List
              elems={[
                "Целые числа, например, 35. Мы можем использовать как положительные, так и орицательные числа. Диапазон используемых чисел: от -2^53 до 2^53",
                "Дробные числа (числа с плавающей точкой), например, 3.5575. Опять же можно использовать как положительные, так и отрицательные числа. Для чисел с плавающей точкой используется тот же диапазон: от -2^53 до 2^53.",
              ]}
            />
            <Text>Например:</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let x = 45; 
const PI = 3.14;`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              В качестве разделителя между целой и дробной частями, как и в
              других языках программирования, используется точка.
            </Text>
            <Text>
              Больше о Number -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Типы данных: Строки (String)</SubTitle>
            <Text>
              Тип String в JavaScript представляет собой последовательность
              символов, которая может быть создана с помощью двойных кавычек или
              обратных кавычек. Строки могут содержать любые символы, включая
              буквы, цифры, специальные символы и пробелы. Они могут быть любой
              длины, хотя некоторые браузеры имеют ограничение на максимальную
              длину строки. <br /> Строки являются неизменяемыми, то есть после
              создания их нельзя изменить. Однако можно создать новую строку на
              основе существующей, добавив к ней новые символы, удалив некоторые
              или преобразовав регистр. <br /> Вот несколько примеров
              использования строк в JavaScript:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let name = "John Smith";
console.log(name); // Выведет "John Smith"
let address = "123 Main Street, Anytown, CA 12345";
console.log(address); // Выведет адрес в формате строки
let message = 'Hello, world!';
console.log(message); // Выведет 'Hello, world!'`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Также в JavaScript есть специальные строковые литералы, которые
              позволяют создавать многострочные строки, строки с обратными
              слешами и т.д.
            </Text>
            <Text>
              Больше о String -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Типы данных: Логические значения (Boolean)</SubTitle>
            <Text>
              Тип Boolean в JavaScript используется для хранения логических
              значений, которые могут принимать только два значения: true
              (истина) и false (ложь). Вот несколько примеров использования
              логических значений:
            </Text>
            <List
              elems={[
                "Проверка условия: if (condition) { … }",
                "Логические операторы: && (и), || (или), ! (не)",
                "Использование в циклах: while (condition) { … }, do { … } while (condition)",
              ]}
            />
            <Text>
              Важно отметить, что тип Boolean также используется для
              представления отсутствия значения, например, когда переменная не
              инициализирована или имеет значение null. В этом случае значение
              переменной будет false, даже если она не была явно присвоена
              значение false.
            </Text>
            <Text>
              Больше о Boolean -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Типы данных: null и undefined</SubTitle>
            <Text>
              В JavaScript тип null используется для обозначения отсутствия
              объекта или значения. Например, если вы попытаетесь получить
              свойство объекта, которого не существует, вы получите значение
              null. <br /> Тип undefined, с другой стороны, используется для
              обозначения переменной, которая не была инициализирована. Если вы
              попытаетесь использовать переменную, которой не было присвоено
              значение, вы получите значение undefined. <br /> Оба эти типа
              важны для обработки ошибок и обеспечения безопасности вашего кода.
              <br /> Например, если вы пытаетесь получить доступ к свойству
              объекта, которого не существует, ваш код может аварийно
              завершиться, если вы не проверите наличие null. Аналогично, если
              вы используете переменную без предварительного присвоения ей
              значения, ваш код также может аварийно завершиться.
            </Text>
            <Text>
              Больше о null -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null"
                }
              >
                тут
              </OuterLink>
              Больше о undefined -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Типы данных: BigInt</SubTitle>
            <Text>
              Тип BigInt в JavaScript - это числовое значение, которое может
              быть больше, чем может представить обычный числовой тип Number.{" "}
              <br /> Он используется для работы с большими числами, такими как
              очень большие степени или большие денежные суммы. <br /> Вы можете
              создать переменную типа BigInt, используя ключевое слово BigInt:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let x = 1n; // 'n' - это суффикс для типа BigInt`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Затем вы можете выполнять арифметические операции с этим числом,
              как обычно:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let x = 1n;
console.log(x + 1n); // выведет '2n'`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о BigInt -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Типы данных: Symbol</SubTitle>
            <Text>
              Тип Symbol в JavaScript используется для создания уникальных,
              неименованных значений, которые можно использовать для создания
              свойств объекта без риска конфликтов имен. <br />
              Символы создаются с помощью ключевого слова Symbol, которое
              принимает строку с именем символа в качестве аргумента. <br />{" "}
              Например:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`const symbol = Symbol('my-symbol');
let obj = {};
obj[symbol] = 'some value';

if (obj.hasOwnProperty(symbol)) {
  alert('The symbol exists on the object');
} else {
  alert('The symbol does not exist on the object');
}`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              После создания символа его можно использовать для создания новых
              свойств на объектах или для проверки, существует ли уже
              определенное свойство с таким именем. <br /> Обратите внимание,
              что символы не могут быть изменены после создания и их нельзя
              напрямую получить или установить через квадратные скобки ({" [] "}
              ).
            </Text>
            <Text>
              Больше о Symbol -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Типы данных: Object (Object,Array,Function)</SubTitle>
            <Text>
              Тип Object в JavaScript является основным типом данных. Это
              структура данных, которая содержит набор свойств и методов.
              Объекты используются для хранения данных и выполнения операций над
              ними. <br /> Объекты могут быть созданы с помощью литералов
              объектов, которые представляют собой пары ключ-значение,
              разделенные запятыми. <br /> Например:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let myObject = {
    name: 'Alice',
    age: 21,
    sayHello: function() {
        alert("Hello, my name is " + this.name);
    }
};

myObject.sayHello();
`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Здесь мы создали объект с тремя свойствами: name, age и sayHello.{" "}
              <br /> Свойство sayHello является функцией, которая выводит
              приветствие на консоль. <br />
              Каждый объект имеет набор методов, таких как toString(),
              valueOf(), hasOwnProperty(), isPrototypeOf() и другие. <br /> Эти
              методы могут быть использованы для выполнения различных операций
              над объектами, таких как преобразование объекта в строку, проверка
              наличия свойства на объекте и других. <br /> Кроме того, объекты
              могут иметь методы, определенные пользователем. <br /> В примере
              выше мы определили метод sayHello, который может быть вызван как в
              примере выше.
            </Text>
            <Text>
              Больше о Object -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object"
                }
              >
                тут
              </OuterLink>
            </Text>
            <br />
            <Text>
              Массивы в JavaScript представляют собой коллекции элементов,
              организованных по индексам. Каждый элемент массива имеет свой
              уникальный индекс, начиная с нуля. <br /> Массивы можно создать с
              помощью литерала массива, который представляет собой список
              значений, заключенных в квадратные скобки ({" [] "}). <br />{" "}
              Например:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`const fruits = ['яблоко', 'банан', 'груша'];
alert(fruits[1]); // выведет 'банан'
fruits.push('киви'); // Добавляет 'киви' в конец массива
fruits.shift(); // Удаляет первый элемент массива (т.е. 'яблоко')
alert(fruits);`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              В этом примере мы создали массив с тремя элементами: ‘яблоко’,
              ‘банан’ и ‘груша’. Доступ к элементам массива осуществляется через
              индекс. <br /> Например, чтобы получить второй элемент массива
              fruits, либо обращаться по индексу через квадратные скобки, либо с
              помощью метода .at(index). <br />
              Индексы начинаются с нуля, поэтому ‘банан’ имеет индекс 1, а не 2.{" "}
              <br />
              Можно также добавлять и удалять элементы массива с помощью методов
              push(), pop(), unshift() и shift().
            </Text>
            <Text>
              Больше о Array -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array"
                }
              >
                тут
              </OuterLink>
            </Text>
            <Text>
              Функции в JavaScript используются для определения блока кода,
              который можно вызывать с заданными аргументами и возвращаемым
              значением. <br />
              Функции могут быть определены с помощью ключевого слова function,
              за которым следует имя функции, список параметров в круглых
              скобках и тело функции в фигурных скобках. <br />
              Например:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`function add(a, b) {
  return a + b;
};
let result = add(2, 3);
alert(result);`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Параметры функции могут быть любого типа, включая числа, строки,
              массивы и другие функции. <br />
              Возвращаемое значение функции также может быть любого типа.
            </Text>
            <Text>
              Больше о Function -{" "}
              <OuterLink
                to={
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
                }
              >
                тут
              </OuterLink>
            </Text>
            <SubTitle>Оператор typeof</SubTitle>
            <Text>Возвращает тип переменной: </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`const a = 10;
alert(typeof a); //number`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Математические операции</SubTitle>
            <Text>
              В JavaScript присутствуют все виды математических операций, а так
              же операторы ++ и -- (инкремент и декремент)
            </Text>
            <SubTitle>Операции сравнения</SubTitle>
            <Text>
              В JavaScript для операций сравнения используются следующие знаки:
            </Text>
            <List
              elems={[
                "> (больше)",
                ">= (больше или равно)",
                "< (меньше)",
                "<= (меньше или равно)",
                "== (равно)",
                "=== (строго равно (проверка по значению и типу))",
                "!= (не равно)",
                "!== (строго не равно (проверка по значению и типу))",
              ]}
            />
            <SubTitle>Логические операции</SubTitle>
            <Text>
              В JavaScript логические операции представлены следующими
              операторами:
            </Text>
            <List
              elems={[
                "&& (И): результатом будет ложь, если первый операнд равен ложь; в противном случае результатом будет значение второго операнда.",
                "|| (ИЛИ): результатом будет истина, если первый операнд равен истина; в противном случае результатом будет значение второго операнда.",
                "!(НЕ): меняет логическое значение операнда на противоположное.",
                "и другие...",
              ]}
            />
            <SubTitle>Условные конструкции: if...else </SubTitle>
            <Text>
              В JavaScript условные конструкции представлены оператором if…else,
              а также его сокращенной формой if…else if…, который позволяет
              проверить несколько условий. <br /> Пример использования оператора
              if:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`if (условие1) {
   // код, который выполняется, если условие1 истинно
} 
else if (условие2) {
   // код, который выполняется, если условие1 ложно, а условие2 истинно
}
else {
   // код, который выполняется, если оба условия ложны
}`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Условные конструкции: switch...case </SubTitle>
            <Text>
              Оператор switch…case также может быть использован для выбора
              одного из нескольких путей выполнения кода в зависимости от
              значения некоторой переменной или выражения. <br /> Например:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`switch (выражение) {
   case значение1:
       // код, выполняемый, если выражение равно значение1
       break;
   case значение2:
       // код, выполняемый, если выражение равно значение2
       break;
   default:
// код, выполняемый, если ни одно из значений не совпало с выражением
}`}</code>
                </pre>
              }
            />
            <br />
            <SubTitle>Условные конструкции: тернарный оператор </SubTitle>
            <Text>
              Тернарный оператор в JavaScript - это условная конструкция,
              которая позволяет выполнить одно выражение в зависимости от
              условия. <br />
              Он имеет форму condition ? expr1 : expr2. Если условие
              выполняется, то результатом будет expr1, иначе - expr2. <br />{" "}
              Например, можно использовать тернарный оператор для выбора между
              двумя функциями:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`const func = (a > b) ? Math.max : Math.min;`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Здесь будет вызвана функция Math.max, если a больше b, или функция
              Math.min, если b больше или равно a.
            </Text>
            <SubTitle> Циклы: for </SubTitle>
            <Text>
              Цикл for в JavaScript используется для выполнения блока кода
              определенное количество раз или пока выполняется заданное условие.{" "}
              <br />
              Вот пример цикла for, который выводит числа от 1 до 10:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`for (let i = 1; i <= 10; i++) {
  alert(i);
}`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Этот цикл начинается с инициализации переменной i равной 1. Затем
              проверяется условие, если i меньше или равно 10, то выполняется
              тело цикла, в котором выводится текущее значение i. <br /> После
              выполнения тела цикла происходит увеличение переменной i на 1 и
              осуществляется переход к следующей итерации. <br /> Этот процесс
              повторяется до тех пор, пока условие {"i <= 10 "}не перестанет
              выполняться.
            </Text>
            <SubTitle> Циклы: while </SubTitle>
            <Text>
              Цикл while в JavaScript используется для повторения блока кода до
              тех пор, пока выполняется заданное условие. <br /> Вот пример
              использования цикла while:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`while (true) {
  let input = prompt('Введите число');
  if (isNaN(input)) {
    alert('Вы должны ввести число!');
  } else {
    break;
  }
}

alert('Работа цикла завершена');`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              В этом коде мы используем цикл while для запроса ввода числа
              пользователем. <br /> Мы проверяем, является ли введенное значение
              числом, с помощью функции isNaN. <br /> Если пользователь вводит
              не число, мы выводим сообщение об ошибке. <br /> Если же
              пользователь вводит число, мы выходим из цикла с помощью оператора
              break. <br /> После завершения работы цикла мы выводим уведомление
              об этом. <br /> Цикл do…while выполняется как минимум один раз,
              так как код внутри цикла выполняется до проверки условия.
            </Text>
            <Title>Работа с функциями на JavaScript</Title>
            <SubTitle>Область видимости переменных</SubTitle>
            <Text>
              Область видимости переменной определяет, где в коде можно
              использовать эту переменную. JavaScript поддерживает три уровня
              области видимости: <br /> Глобальная область видимости:
              переменные, определенные вне функций, доступны везде в коде.
              <br />
              Локальная область видимости: переменные, определенные внутри
              функций, доступны только внутри этой функции. <br /> Замыкание
              (closure): переменные, определенные во вложенных функциях, имеют
              доступ к переменным во внешних функциях, но внешние функции не
              имеют доступа к переменным во вложенных функциях. <br />
              Когда вы определяете переменную с тем же именем, что и уже
              существующая переменная в глобальной или локальной области
              видимости, вы создаете новую переменную с отдельным пространством
              в памяти, которое не связано с предыдущей переменной.
            </Text>
            <SubTitle>Глобальные переменные</SubTitle>
            <Text>
              Все переменные, которые объявлены вне функций, являются
              глобальными:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`let a = 3;
function getNumber() {
  let b = a * a;
  alert(b);
}

getNumber();`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Здесь переменная a является глобальной. Она доступна из любого
              места программы.
              <br /> Переменная b глобальной не является, так как она определена
              внутри функции.
            </Text>
            <SubTitle>Локальные переменные</SubTitle>
            <Text>
              Переменная, определенная внутри функции, является локальной <br />{" "}
              Переменная b является локальной, она существует только в пределах
              функции. Вне функции ее нельзя использовать.
              <br />
              Когда функция заканчивает свою работу, то все переменные,
              определенные в функции, уничтожаются.
            </Text>
            <SubTitle>Замыкания</SubTitle>
            <Text>
              Замыкание в JavaScript - это когда внешняя функция имеет доступ к
              переменным внутренней функции даже после того, как внутренняя
              функция была вызвана. <br /> Это возможно благодаря тому, что
              внутренняя функция сохраняет ссылку на переменную внешней функции,
              а не на ее текущее значение. <br /> Замыкания часто используются
              для создания анонимных функций, которые могут быть переданы как
              аргументы другим функциям или использованы для обработки событий.{" "}
              <br /> Например, можно создать анонимную функцию, которая
              увеличивает счетчик каждый раз, когда она вызывается:
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`function createCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  }
}

let counterFunc = createCounter();
let counterFuncAgain = createCounter();
alert("counter in counterFunc = " + counterFunc());
alert("counter in counterFunc = " +counterFunc());
alert("counter in counterFunc = " +counterFunc());
alert("counter in counterFunc = " +counterFunc());
//другое замыкание 
alert("counter in counterFuncAgain = " + counterFuncAgain());
`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              Здесь функция createCounter создает новую анонимную функцию каждый
              раз, когда она вызывается. <br /> Эта анонимная функция имеет
              доступ к переменной counter, даже после того, как функция
              createCounter завершилась.
            </Text>
            <SubTitle>Рекурсия</SubTitle>
            <Text>
              Рекурсивная функция - это функция, которая вызывает сама себя. Это
              может быть полезно для работы с иерархическими структурами данных,
              такими как деревья. <br />
              Одним из примеров рекурсивной функции является функция для
              вычисления факториала числа. Факториал числа - это произведение
              всех целых чисел от 1 до этого числа включительно. <br />{" "}
              Например, факториал числа 5 равен 120 (5! = 120). <br /> Вот как
              выглядит рекурсивная функция для вычисления факториала числа:{" "}
            </Text>
            <CodeBlock
              isInteractive={true}
              isEditable={false}
              lang={"JavaScript (index.js)"}
              code={
                <pre>
                  <code className="language-js">{`function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
alert(factorial(5)); // Выведет 120
`}</code>
                </pre>
              }
            />
            <br />
            <Text>
              В этой функции, если аргумент равен 0, то функция возвращает 1.
              <br />
              Если аргумент больше 0, функция вызывает себя с аргументом,
              уменьшенным на 1, и умножает результат на текущий аргумент. <br />{" "}
              Это продолжается до тех пор, пока аргумент не станет равен 0,
              после чего функция вернет 1.
            </Text>
            <PaginationBlock to={"/Courses/JS/2"} back={"/Courses/JS"} />
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

export default LessonJS1;
