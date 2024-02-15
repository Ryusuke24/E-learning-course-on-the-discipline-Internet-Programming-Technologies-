import { useState } from "react";
import { OpenMenuButton } from "../OpenMenuButton/OpenMenuButton";
import { MenuBar } from "../MenuBar/MenuBar";

import style from "./Menu.module.scss";

export const Menu = ({ title, elems }) => {
  const [isClicked, setClick] = useState();

  return (
    <>
      {isClicked ? (
        <MenuBar
          title={title}
          elems={elems}
          isClicked={isClicked}
          setClick={setClick}
        />
      ) : (
        <OpenMenuButton isClicked={isClicked} setClick={setClick} />
      )}
    </>
  );
};
