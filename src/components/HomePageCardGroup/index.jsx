import styles from "./index.module.scss";
import HomePageCard from "../homePageCard";

const HomePageCardGroup = ({ avars }) => {
  return (
    <div className={styles.cardGroup}>
      {avars.map((item, index) => (
        <HomePageCard style={{ width: "25%" }} key={index} item={item} />
      ))}
    </div>
  );
};

export default HomePageCardGroup;
