import { useEffect } from "react";
import Prism from "prismjs";
import "../../prism.css";
import style from "./CodeBlock.module.scss";
import runButtonSVG from "./RunButton.svg";
import editButtonSVG from "./EditButton.svg";

export const CodeBlock = ({ code, lang, linkToEdit = "#" }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
      <div className={style.codeBlock}>
        <p>{lang}</p>
        <div className={style.codeBlockButtons}>
          <a href="#">
            <img src={runButtonSVG} alt="Run" />
          </a>
          <a href={linkToEdit}>
            <img src={editButtonSVG} alt="Edit" />
          </a>
        </div>
      </div>
      {code}
    </>
  );
};
