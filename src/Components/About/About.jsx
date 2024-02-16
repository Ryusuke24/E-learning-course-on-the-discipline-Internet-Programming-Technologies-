import { Title } from "../../Elements/Title/Title";
import { SubTitle } from "../../Elements/SubTitle/SubTitle";
import { Text } from "../../Elements/Text/Text";
import { List } from "../../Elements/List/List";
import ReactLogoSVG from "./ReactLogo.svg";
import ExpressLogoSVG from "./ExpressLogo.svg";
import style from "./About.module.scss";

function About() {
  return (
    <>
      <main className={style.main}>
        <section className={style.section1}>
          <Title> О нас </Title>
          <SubTitle> Создатель : </SubTitle>
          <Text>
            <span className={style.markedText}>Михеев Даниил </span> - Студент 4
            курса{" "}
          </Text>
          <SubTitle> Научный руководитель : </SubTitle>
          <Text>
            <span className={style.markedText}>Чискидов Сергей Васильевич</span>{" "}
            - Кандидат технических наук, доцент
          </Text>
          <SubTitle> Стек технологий : </SubTitle>
          <img src={ReactLogoSVG} alt="ReactLogo" />
          <List
            elems={[
              `JS : React, Redux, Prismjs, React Router, React Hook Form, Material UI`,
              "CSS : SCSS",
            ]}
          />
          <Text />
          <img src={ExpressLogoSVG} alt="ExpressLogo" />
          <List elems={["Backend : Express, MongoDB"]} />
        </section>
      </main>
    </>
  );
}

export default About;
