import style from "./SubTitle.module.scss";

export const SubTitle = ({ children }) => (
  <h2 className={style.subTitle}>{children}</h2>
);
