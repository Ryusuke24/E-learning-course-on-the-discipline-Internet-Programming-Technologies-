import { Tooltip } from "@mui/material";

import { useEffect } from "react";
import Prism from "prismjs";
import "../../prism.css";
import style from "./CodeBlock.module.scss";
import runButtonSVG from "./RunButton.svg";
import editButtonSVG from "./EditButton.svg";

export const CodeBlock = ({ code, lang, linkToEdit = "#" }) => {
  function handleClick(e) {
    e.preventDefault();
    let func = new Function(code.props.children.props.children);
    func();
  }

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <div className={style.codeBlock}>
        <p>{lang}</p>
        <div className={style.codeBlockButtons}>
          <Tooltip title="Выполнить код">
            {" "}
            <a href="#" onClick={e => handleClick(e)}>
              <img src={runButtonSVG} alt="Run" />
            </a>
          </Tooltip>
          <Tooltip title="Отредактировать код">
            <a target="_blank" rel="noreferrer" href={linkToEdit}>
              <img src={editButtonSVG} alt="Edit" />
            </a>
          </Tooltip>
        </div>
      </div>
      {code}
    </>
  );
};
