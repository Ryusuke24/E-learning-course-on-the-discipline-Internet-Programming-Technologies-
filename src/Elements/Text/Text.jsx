import style from "./Text.module.scss";

export const Text = ({ children }) => <p className={style.text}>{children}</p>;
