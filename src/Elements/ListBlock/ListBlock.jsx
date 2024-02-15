import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../Title/Title";
import style from "./ListBlock.module.scss";

export const ListBlock = ({ elems, section, title }) => (
  <section className={section === 1 ? style.section1 : style.section2}>
    <Title>{title}</Title>
    <ul className={style.listBlocks}>
      {elems.map((elem, index) => (
        <li key={index}>
          {" "}
          <Link to={elem.to} className={style.outLinks}>
            {elem.text}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
