/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-10 20:23:30
 * @LastEditTime: 2022-07-14 02:21:02
 */
import styles from "./index.module.scss";
import HomePageCard from "../homePageCard";
import React, { useEffect, useRef, useState } from "react";
import { getList } from "../../utils/api/product";
import { throttle } from "lodash";

const HomePageCardGroup = ({ sortCon }) => {
  const localAvars = JSON.parse(localStorage.getItem("avars")) || [];
  const [avars, setAvars] = useState(localAvars);
  const [page, setPage] = useState(1);
  const loading = useRef(false);
  const hasMore = useRef(true);
  useEffect(() => {
    loading.current = true;
    getList({ ...sortCon, page }).then((res) => {
      loading.current = false;
      setAvars([...res.data.data]);
      localStorage.setItem("avars", JSON.stringify(res.data.data));
    });
    // eslint-disable-next-line
  }, [sortCon]);

  //懒加载
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if (
      scrollTop + clientHeight >= scrollHeight - 100 &&
      !loading.current &&
      hasMore.current
    ) {
      loading.current = true;
      getList({ ...sortCon, page: page + 1 }).then((res) => {
        loading.current = false;
        setAvars((pre) => [...pre, ...res.data.data]);
        hasMore.current = res.data.next_page_url != null ? true : false;
        setPage(page + 1);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 100));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      id="box"
      className={
        avars.length > 0 || !loading
          ? styles.cardGroup
          : styles.cardGroupLoading
      }
    >
      {avars.length > 0 &&
        avars.map((item, index) => (
          <HomePageCard style={{ width: "20%" }} key={index} item={item} />
        ))}
      {avars.length === 0 && <div className={styles.loader}></div>}
    </div>
  );
};

export default HomePageCardGroup;
