import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Links.module.scss";

const links = [
  { to: "/", label: "Today", exact: true },
  { to: "/hourly", label: "Hourly", exact: false },
  { to: "/weekly", label: "Weekly", exact: false },
];

const Links = () => {
  const renderLinks = () =>
    links.map(({ to, exact, label }, index) => (
      <li key={index}>
        <NavLink to={to} exact={exact} activeClassName={classes.active}>
          {label}
        </NavLink>
      </li>
    ));

  return (
    <nav className={classes.Links}>
      <ul>{renderLinks()}</ul>
    </nav>
  );
};

export default Links;
