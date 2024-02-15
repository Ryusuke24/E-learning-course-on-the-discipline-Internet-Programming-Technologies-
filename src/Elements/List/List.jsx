import style from "./List.module.scss";

export const List = ({ elems }) => (
  <ul className={style.list}>
    {elems.map((elem, index) => (
      <li key={index}>{elem}</li>
    ))}
  </ul>
);
