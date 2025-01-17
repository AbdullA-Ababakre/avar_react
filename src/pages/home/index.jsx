/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-10 20:23:32
 * @LastEditTime: 2022-06-21 04:21:37
 */
import React, { useState } from "react";
import Footer from "../../components/footer/index";
import HomePageCardGroup from "../../components/HomePageCardGroup/index";

import styles from "./index.module.scss";
import asc from "../../images/homePage/asc.png";
import desc from "../../images/homePage/desc.png";
import bannerImg from "../../images/homePage/banner.jpeg";
const Home = () => {
  const sortArr = ["Time", "Count", "Price"];
  const [sortCon, setSortCon] = useState({
    created_at: "desc",
    count: "desc",
    price: "desc",
  });

  const handleSort = (item, index, con) => {
    item = item.toLowerCase();
    if (item === "time") item = "created_at";
    const newSortCon = { ...sortCon, [item]: con };
    setSortCon(newSortCon);
  };

  return (
    <div className="bg">
      <img className={styles.navImg} src={bannerImg} alt="banner" />
      <div className={styles.sortContainer}>
        <div className={styles.tags}>
          <div className={styles.tag}>#Fashion</div>
          <div className={styles.tag}>#Avatar</div>
          <div className={styles.tag}>#ArtToy</div>
          <div className={styles.tag}>#3D</div>
        </div>
        <div className={styles.verticalLine}></div>
        {sortArr.map((item, index) => {
          return (
            <div key={index} className={styles.sortItem}>
              <div className={styles.sort}>
                <div className={styles.sortName}>{item}</div>
                <div
                  className={styles.asc}
                  onClick={() => handleSort(item, index, "asc")}
                >
                  <img src={asc} alt="asc" />
                </div>
                <div
                  className={styles.desc}
                  onClick={() => handleSort(item, index, "desc")}
                >
                  <img src={desc} alt="desc" />
                </div>
              </div>
              {index !== sortArr.length - 1 && (
                <div
                  className={styles.verticalLine}
                  style={{ marginLeft: "24px" }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      <HomePageCardGroup sortCon={sortCon} />
      <Footer />
    </div>
  );
};

export default Home;
