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

function LessonPHP1() {
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
            <Title>Лекция 1 : Основы PHP</Title>
            <SubTitle>Введение в язык программирования PHP.</SubTitle>
            <Text>
              Язык программирования PHP (Hypertext Preprocessor) является одним
              из самых популярных и широко используемых языков для создания
              динамических веб-приложений и веб-сайтов. Разработанный изначально
              для генерации HTML-кода и обработки форм, PHP со временем
              превратился в мощный инструмент для разработки веб-приложений с
              поддержкой различных баз данных, сессий, куки и других аспектов
              веб-разработки. <br /> PHP был создан в 1994 году Расмусом
              Лердорфом и первоначально назывался Personal Home Page Tools.
              Название было изменено на PHP/FI в 1997 году, а затем на просто
              PHP в 2001 году. С тех пор PHP активно развивается и
              поддерживается группой разработчиков под руководством The PHP
              Foundation. <br /> Основной целью создания PHP было предоставление
              простого способа создания динамических HTML-страниц на стороне
              сервера, обрабатывая пользовательские формы и отправляя
              электронные письма. Однако со временем PHP развился и стал
              использоваться для создания более сложных веб-приложений, таких
              как форумы, блоги и даже крупные социальные сети. <br /> Одним из
              основных преимуществ PHP является его простота и удобство для
              начинающих программистов. <br /> Он имеет простой и понятный
              синтаксис, который легко освоить даже тем, кто только начинает
              изучать программирование. Кроме того, PHP обладает обширной
              библиотекой функций, которые позволяют разработчикам быстро и
              эффективно решать различные задачи, связанные с веб-разработкой.{" "}
              <br /> В целом, язык программирования PHP является отличным
              выбором для создания веб-проектов различной сложности, благодаря
              своей гибкости, простоте и доступности. Он продолжает активно
              развиваться и улучшаться, что делает его актуальным и
              перспективным инструментом для веб-разработчиков по всему миру.
            </Text>
            <SubTitle>Установка окружения</SubTitle>
            <Text>
              Для запуска PHP локально на вашем компьютере необходима
              программа-сервер. <br /> Для windows лучший вариант -{" "}
              <OuterLink to={"https://ospanel.io/"}>OpenServer</OuterLink> . для
              linux -{" "}
              <OuterLink to={"https://help.ubuntu.ru/wiki/lamp"}>
                LAMP
              </OuterLink>
              , для macos -{" "}
              <OuterLink to={"https://www.mamp.info/en/mamp-pro/mac/"}>
                MAMP
              </OuterLink>{" "}
              . <br /> Установка такого сервера займет некоторое время. Чтобы не
              останавливаться в обучении, выполняйте пока PHP код в онлайн
              редакторе, например, в{" "}
              <OuterLink to={"https://www.writephponline.com/"}>этом</OuterLink>
              .
            </Text>
            <Text>
              Пусть у вас уже есть установленный PHP сервер. В нем ваши
              программы будут располагаться в файлах с расширением php. Эти
              файлы на самом деле представляют собой обычные HTML файлы, в
              которых мы можем писать HTML код наших страниц, вот так:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Моя первая программа</title>
	</head>
	<body>
		<?php
			echo 'моя первая программа';
		?>
	</body>
</html>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Если запустить этот файл через PHP сервер, то сервер выполнит
              команды PHP и результат отправит в браузер. <br /> Команда echo,
              которую вы там можете увидеть, просто выполняет вывод заданной
              строки. В результате в браузер улетит только HTML код, а вместо
              PHP кода будет стоять результат его выполнения. <br />
              Для простоты на этапе обучения лишние теги можно не писать:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
    echo 'моя первая программа';
?>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Чтобы русский текст выводился корректно, необходимо выполнение
              нескольких условий.
            </Text>
            <List
              elems={[
                "Во-первых, кодировка самого файла должна быть utf-8.",
                "Во-вторых, нужно указать кодировку в HTML коде",
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
    echo 'моя первая программа';
?>
`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Иногда описанные процедуры не помогают и тогда может помочь
              команда mb_internal_encoding:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<meta charset="utf-8">
<?php
	mb_internal_encoding('UTF-8');
	echo 'моя первая программа';
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Вывод ошибок PHP</SubTitle>
            <Text>
              Если вы допустите в вашем PHP коде ошибку, то сервер выведет
              описание этой ошибки прямо в браузер. Ошибки бывают трех типов:
              notice, warning и fatal.
              <br />
              Нотисы представляют собой замечания о том, что у вас в коде может
              что-то быть не так. Хотя код по-прежнему будет работать. Лучше,
              однако, эти ошибки не оставлять без внимания, а исправлять их.
              <br />
              Ворнинги представляют собой предупреждения о том, что что-то пошло
              не так. Как правило при этом ваш код запустится, но будет работать
              не так, как вы хотите.
              <br />
              Фаталы возникают в том случае, когда PHP код не может быть
              выполнен. Как правило это будет связано с допущенной вами
              синтаксической ошибкой.
              <br />
              Есть, однако, проблема. По умолчанию нотисы и ворнинги выключены,
              а вместо фаталов вы будете видеть просто белый экран. Это, конечно
              же, малоинформативно. Давайте включим вывод всех ошибок:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<meta charset="utf-8">
<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 'on');
	mb_internal_encoding('UTF-8');
	
	echo 'моя первая программа';
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Title>Основы синтаксиса PHP</Title>
            <Text>
              Команда echo командует вывести что-нибудь на экран. Давайте
              выведем какую-нибудь строку:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<meta charset="utf-8">
<?php
echo 'hello';
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Переменные</SubTitle>
            <Text>
              Для того, чтобы записать что-либо в переменную используется знак
              =, который называется знаком присваивания. Давайте, например,
              запишем в переменную $a число 3:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$a = 3;
	echo $a; // выведет на экран число 3
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Математические операции</SubTitle>
            <Text>Пример сложения двух переменных:</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$a = 1;
	$b = 2;
	$c = $a + $b; // запишем сумму в переменную $c
	echo $c;      // выведет 3
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Строки в PHP</SubTitle>
            <Text>
              Как уже упоминалось ранее, данные могут иметь различный тип. Один
              из типов - числа, мы с вами уже немного изучили. Давайте теперь
              перейдем к строкам. Строки создаются с помощью кавычек:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$str = "abc";
	echo $str; // выведет 'abc'
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Для сложения (конкатенации) строк используется оператор точка:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$str1 = 'abc';
	$str2 = 'def';
	echo $str1 . '!!!' . '  ' . $str2; // выведет 'abc!!!def'
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Атрибуты тегов в PHP</SubTitle>
            <Text>Давайте с помощью тега {"<a>"} выведем на экран ссылку:</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$href = 'index.php';
	$text = 'ссылка';
	
	echo '<a href="' . $href . '">' . $text . '</a>';
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <div className={style.section2}>
              <Text>
                <em>
                  В компиляторе вывод тегов не работает. Делайте через локальный
                  сервер
                </em>
              </Text>
            </div>
            <SubTitle>Автоматическое преобразование типов в PHP</SubTitle>
            <Text>
              Как вы уже знаете, строки в PHP следует брать в кавычки. Может
              быть такое, что всеми символами строки будут являться цифры. В
              этом случае, если над строкой с цифрами выполнить какую-либо
              математическую операцию - эта операция будет выполнена так, будто
              у нас действительно числа, а не строки:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	echo '1' + '2'; // выведет 3
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              В данном случае PHP видит, что мы пытаемся выполнить недопустимую
              для строк, но допустимую для чисел операцию. Он также видит, что
              фактически наши строки - это числа в кавычках. Поэтому PHP
              автоматически выполняет преобразование этих строк к чисел и
              выполняет соответствующую математическую операцию над ними.
            </Text>
            <SubTitle>Массивы в PHP</SubTitle>
            <Text>
              В данном уроке мы начнем изучать специальный тип данных, который
              называется массив. Массив представляет собой переменную, в которой
              в упорядоченном виде можно хранить целый набор каких-то значений.
              Для создания массива используются квадратные скобки:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$arr = []; // создаем массив $arr
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Посмотреть содержимое всего массива с помощью echo нельзя. При
              попытке сделать это на экран просто выведется слово Array
            </Text>
            <SubTitle>Ассоциативные массивы в PHP</SubTitle>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Чтобы обратиться к нужному элементу этого массива, мы должны
              написать в квадратных скобках ключ этого элемента. Как вы знаете,
              в массивах PHP сам определяет ключи для элементов - это их
              порядковые номера. Но иногда это может оказаться неудобным:
              например, мы хотим вывести на экран название первого дня недели, а
              должны писать в квадратных скобках цифру 0. Логичнее и удобнее
              было бы все-таки для первого дня недели писать ключ 1, как
              привыкли мы в жизни. Для этого используются ассоциативные массивы.
              Они имеют следующий синтаксис: имя ключа, затем идет стрелка{" "}
              {"=>"}, а потом значение. Давайте укажем явные ключи для нашего
              массива дней:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$arr = array(1 => 'пн', 2 => 'вт', 3 => 'ср', 4 => 'чт', 5 => 'пт', 6 => 'сб', 7 => 'вс');
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Ключи не обязательно должны быть числами, они могут быть и
              строками. Сделаем, к примеру, массив, в котором ключами будут
              имена работников, а элементами - их зарплаты:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	$arr = array('user1' => 200, 'user2' => 300, 'user3' => 400);
	echo $arr['user1']; // выведет 200
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше о массивах -{" "}
              <OuterLink
                to={"https://www.php.net/manual/ru/language.types.array.php"}
              >
                тут
              </OuterLink>
            </Text>
            <Title>Основы работы с пользовательскими функциями в PHP</Title>
            <Text>
              Сейчас мы научимся создавать свои функции, которые затем можно
              будет использовать подобно стандартным функциям PHP. <br />{" "}
              Давайте рассмотрим синтаксис для создания своей функции. <br />
              Функция создается с помощью команды function. Далее через пробел
              следует имя функции и круглые скобки, в которых пишется какой-то
              код:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	function func() {
		// какой-то код
	}
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              На самом деле скобки не обязательно должны быть пустыми - в них мы
              можем передавать параметры.
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (index.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	function func($num1, $num2) {
		echo $num1 + $num2;
	}
	
	func(1, 2); // выведет 3
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Title>Основы работы с формами в PHP</Title>
            <Text>
              Мы можем получать данные от пользователя сайта с помощью форм.
              Формы создаются с помощью тега form, тегов input и кнопок submit:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.php)"}
              code={
                <pre>
                  <code className="language-html">
                    {`<form action="/result.php" method="GET">
	<input name="test1">
	<input name="test2">
	<input type="submit">
</form>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              С помощью атрибута method мы указываем метод отправки формы.{" "}
              <br /> Он может быть GET или POST. Пусть наша форма отправляется
              методом GET на страницу result.php. <br />В этом случае на этой
              странице в адресной строке появятся данные формы в следующем
              формате: после адреса страницы будет стоять знак ?, а после него
              имена инпутов и введенные пользователем значения:
              result.php?test1=value1&test2=value2. <br /> Пусть наша форма
              отправляется методом POST на страницу result.php. В этом случае
              данные также будут отправлены, но в адресной строке отражены не
              будут:
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.php)"}
              code={
                <pre>
                  <code className="language-html">
                    {`<form action="/result.php" method="POST">
	<input name="test1">
	<input name="test2">
	<input type="submit">
</form>`}
                  </code>
                </pre>
              }
            />
            <br />
            <SubTitle>Получение данных форм в PHP</SubTitle>
            <Text>
              Пусть у нас есть файл form.php, а в нем HTML форма, отправляющаяся
              на страницу result.php. На этой странице мы можем получить данные
              формы с помощью специальных переменных $_GET, $_POST и $_REQUEST.
              <br />
              Эти переменные содержат в себе массив данных отправленной формы.
              При этом ключами этого массива будут имена инпутов, а значениями -
              те данные, которые были введены в эти инпуты.
              <br />
              При этом, если форма была отправлена методом GET, то данные будут
              в массиве $_GET, а если методом POST, то данные будут
              соответственно в массиве $_POST. А в переменной $_REQUEST будут
              лежать данные формы, отправленные любым из методов.
            </Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (result.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	var_dump($_GET);     // массив с ключами test1 и test2
	var_dump($_POST);    // пустой массив
	var_dump($_REQUEST); // массив с ключами test1 и test2
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>Пусть теперь наша форма отправляется методом POST:</Text>
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"HTML (index.php)"}
              code={
                <pre>
                  <code className="language-HTML">
                    {`<form action="/result.php" method="POST">
	<input name="test1">
	<input name="test2">
	<input type="submit">
</form>`}
                  </code>
                </pre>
              }
            />
            <br />
            <CodeBlock
              isInteractive={false}
              isEditable={false}
              lang={"PHP (result.php)"}
              code={
                <pre>
                  <code className="language-clike">
                    {`<?php
	var_dump($_GET);     // пустой массив
	var_dump($_POST);    // массив с ключами test1 и test2
	var_dump($_REQUEST); // массив с ключами test1 и test2
?>`}
                  </code>
                </pre>
              }
            />
            <br />
            <Text>
              Больше узнать про работу с формами можно{" "}
              <OuterLink to={"https://code.mu/ru/php/book/prime/"}>
                тут в разделе Формы
              </OuterLink>
            </Text>
            <PaginationBlock to={"/Courses/PHP/2"} back={"/Courses/PHP"} />
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

export default LessonPHP1;
