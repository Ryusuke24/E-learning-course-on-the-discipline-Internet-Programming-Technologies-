import { Avatar } from "@mui/material";
import style from "./AddComment.module.scss";

export const AddComment = ({ imageUrl }) => {
  return (
    <div className={style.addCommentBlock}>
      {imageUrl ? (
        <img className={style.avatar} src={imageUrl} alt="avatar" />
      ) : (
        <Avatar />
      )}
      <div className={style.addComment}>
        {" "}
        <textarea placeholder="Ваш комментарий" />
        <button>Оставить комментарий</button>
      </div>
    </div>
  );
};
