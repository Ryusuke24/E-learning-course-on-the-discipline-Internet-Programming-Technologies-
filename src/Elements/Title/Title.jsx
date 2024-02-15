import style from "./Title.module.scss";

export const Title = ({ children }) => (
  <h1 className={style.title}>{children}</h1>
);
