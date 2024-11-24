import React from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../button/Button";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <ButtonComp text='Give Feedback' />
    </nav>
  );
}

export default Navbar;
