// import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import user from '../../images/homePage/user.png';
import card from '../../images/homePage/card.png';
import logoSmall from '../../images/homePage/logosmall.png';
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => (
    <div className={styles.container}>
        <div>
            <img priority src={logoSmall} className="" height={54} width={169} alt="user" />
        </div>
        <div>

            <Link to="/" className={styles.item}>
                Home
            </Link>
            <Link to="/about" className={styles.item}>
                About US
            </Link>

            {/* <div>
                <a className={styles.item} href="#">Home</a>
            </div>
            <div>
                <a className={styles.item} href="#">About US</a>
            </div> */}
            {/* <Link href="/avatar" >
                <a className={styles.item}>Avatar</a>
            </Link>
            <Link href="/fashion">
                <a className={styles.item}>Digital Fashion</a>
            </Link>
            <Link href="/art">
                <a className={styles.item}>Digital Art Toy</a>
            </Link> */}

            <Link to="/auth">
                <img priority src={user} className="" height={42} width={42} alt="user" />
            </Link>

            {/* <img priority src={card} className="" height={42} width={42} alt="card" />  */}
        </div>
    </div>
);

export default NavBar;