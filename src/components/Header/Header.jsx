import React from "react";
import classes from "./Header.module.scss";

export const Header = ({ children }) => (
  <header className={classes.Header}>{children}</header>
);
