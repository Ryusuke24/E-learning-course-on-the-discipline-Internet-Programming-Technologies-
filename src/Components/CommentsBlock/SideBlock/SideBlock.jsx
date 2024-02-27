import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import style from "./SideBlock.module.scss";

export const SideBlock = ({ title, children }) => {
  return (
    <Paper classes={{ root: style.root }}>
      <Typography variant="h4" classes={{ root: style.title }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};
