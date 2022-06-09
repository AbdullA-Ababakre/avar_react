import React from 'react';
import styles from './index.module.scss'
// import Link from 'next/link';
import facebook from '../../images/homePage/share/Facebook.png';
// import Github from '../../images/homePage/share/Github.png';
import Instagram from '../../images/homePage/share/Instagram.png';
import LinkedIn from '../../images/homePage/share/Linkedin.png';
import Pinterest from '../../images/homePage/share/Pinterest.png';
import Twitter from '../../images/homePage/share/Twitter.png';
import { Link } from "react-router-dom";


const Footer = () => {

    const imageArr = [facebook, LinkedIn, Twitter, Pinterest, Instagram];
    const linkArr = [
        {
            href: '/',
            title: 'Home'
        },
        // {
        //     href: '/avatar',
        //     title: 'Avatar'
        // },
        // {
        //     href: '/fashion',
        //     title: 'Digital Fashion'
        // },

        // {
        //     href: '/art',
        //     title: 'Digital Art Toy'
        // },
        {
            href: '/about',
            title: 'About US'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.horizontal}></div>
            <div className={styles.navBar}>
                {
                    linkArr.map((item, index) => {
                        return (
                            <Link to={item.href} key={index}>
                                {/* <a className={styles.item} href="#"> */}
                                {item.title}
                                {/* </a> */}
                            </Link>
                        )
                    })
                }
            </div>
            <div className={styles.horizontal}></div>
            <div className={styles.share}>
                {
                    imageArr.map((item, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <img className={styles.icon} src={item} alt={item}></img>
                                {
                                    index !== imageArr.length - 1 && <div className={styles.vertical}></div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.horizontal}></div>
        </div>
    )
}

export default Footer;