import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComments } from "../../redux/comments";

import { SideBlock } from "./SideBlock/SideBlock";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";

import style from "./CommentsBlock.module.scss";

export const CommentsBlock = forwardRef(
  (
    { items, children, isLoading = true, setEditMode, setEditableId, setText },
    ref
  ) => {
    const dispatch = useDispatch();
    const onClickRemove = id => {
      dispatch(deleteComments(id));
    };

    const user = useSelector(state => state.auth.data);

    return (
      <SideBlock title="Комментарии">
        <List className={style.commentsList}>
          {(isLoading ? [...Array(5)] : items).map((obj, index) => (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                classes={{ root: style.listElement }}
              >
                <ListItemAvatar>
                  {isLoading ? (
                    <Skeleton variant="circular" width={40} height={40} />
                  ) : (
                    <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
                  )}
                </ListItemAvatar>
                {isLoading ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Skeleton variant="text" height={25} width={120} />
                    <Skeleton variant="text" height={18} width={230} />
                  </div>
                ) : (
                  <ListItemText
                    classes={{ root: style.text }}
                    primary={obj.user.fullName}
                    secondary={obj.text}
                  />
                )}
                {isLoading ? (
                  ""
                ) : obj.user.id === user?._id || user?.isAdmin ? (
                  <>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        setEditableId(obj.id);
                        setEditMode(true);
                        setText(obj.text);
                        ref.current.focus();
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => onClickRemove(obj.id)}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ) : (
                  ""
                )}
              </ListItem>

              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        {children}
      </SideBlock>
    );
  }
);
