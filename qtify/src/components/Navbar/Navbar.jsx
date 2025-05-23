import React from "react";

import styles from "./Navbar.module.css";
import Button  from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Logo/>
      <Search search={"Search a song of your choice"} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default NavBar;