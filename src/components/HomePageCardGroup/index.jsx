/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-10 20:23:30
 * @LastEditTime: 2022-06-17 15:18:50
 */
import styles from "./index.module.scss";
import HomePageCard from "../homePageCard";
import React, { useEffect, useState } from "react";
import { getList } from "../../utils/api/product";

const HomePageCardGroup = ({ sortCon }) => {
  const [avars, setAvars] = useState([]);
  const [curPage, setCurpage] = useState(1);

  useEffect(() => {
    console.log("curPage", curPage);
    fetchData(curPage);
  }, [curPage]);

  async function fetchData(page) {
    getList({ ...sortCon, page }).then((res) => {
      setAvars([...res.data.data, ...avars]);
    });
  }

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
  }, []);

  const trackScrolling = () => {
    const wrappedElement = document.getElementById("box");
    if (isBottom(wrappedElement)) {
      setCurpage((prev) => prev + 1);
      // fetchData(curPage + 1);
      document.removeEventListener("scroll", trackScrolling);
    }
  };

  return (
    <div id="box" className={styles.cardGroup}>
      {avars.map((item, index) => (
        <HomePageCard style={{ width: "25%" }} key={index} item={item} />
      ))}
    </div>
  );
};

export default HomePageCardGroup;
