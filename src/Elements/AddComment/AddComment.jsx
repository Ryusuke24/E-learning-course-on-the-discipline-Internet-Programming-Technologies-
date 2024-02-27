import { Avatar } from "@mui/material";
import style from "./AddComment.module.scss";
import { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addComments, editComments } from "../../redux/comments";

export const AddComment = forwardRef(
  (
    {
      imageUrl,
      course,
      lesson,
      setEditMode,
      isEdit,
      editableId,
      text,
      setText,
    },
    ref
  ) => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(addComments({ course, lesson, text }));
    const handleEditClick = () => {
      dispatch(editComments({ course, lesson, text, id: editableId }));
      setEditMode(false);
    };
    return (
      <div className={style.addCommentBlock}>
        {imageUrl ? (
          <img className={style.avatar} src={imageUrl} alt="avatar" />
        ) : (
          <Avatar />
        )}
        <div className={style.addComment}>
          {" "}
          <textarea
            ref={ref}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Ваш комментарий"
          />
          {isEdit ? (
            <button onClick={handleEditClick}>Сохранить изменения</button>
          ) : (
            <button onClick={handleClick}>Оставить комментарий</button>
          )}
        </div>
      </div>
    );
  }
);
