import styles from "./index.module.scss";
import HomePageCard from "../homePageCard";
import React, { useEffect, useState } from "react";
import { getList } from "../../utils/api/product";

const HomePageCardGroup = ({ sortCon }) => {
  const [avars, setAvars] = useState([]);
  const [curPage, setCurpage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);


  useEffect(() => {
    fetchData(sortCon, curPage);
  }, [curPage, sortCon]);

  async function fetchData(sortConParam, page) {
    getList({ ...sortConParam, page }).then((res) => {
      setAvars([...res.data.data, ...avars]);
      console.log("res.data.data", res.data.next_page_url);
      setNextPageUrl(res.data.next_page_url);
    });
  }

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);

    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, []);

  const trackScrolling = () => {
    const wrappedElement = document.getElementById("box");
    // console.log("nextPageUrl", nextPageUrl);
    // console.log("isBottom(wrappedElement)", isBottom(wrappedElement));
    if (isBottom(wrappedElement) && nextPageUrl) {
      setCurpage((prev) => prev + 1);
      document.removeEventListener("scroll", trackScrolling);
    }
  };

  return (
    <div id="box" className={avars.length > 0 ? styles.cardGroup : styles.cardGroupLoading}>
      {avars.length > 0 && avars.map((item, index) => (
        <HomePageCard style={{ width: "25%" }} key={index} item={item} />
      ))}
      {
        avars.length === 0 && <div className={styles.loader}></div>
      }
    </div>
  );
};

export default HomePageCardGroup;
