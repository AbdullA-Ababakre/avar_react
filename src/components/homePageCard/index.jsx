import styles from './index.module.scss';
import { Link } from "react-router-dom";


const HomePageCard = (props) => {
    const { item } = props;
    const isSold = item.sales >= item.count;

    return (
        <div className={styles.card}>
            {
                !isSold &&
                <Link to={`/avatar/${item.id}`}>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.img}
                            priority
                            src={item.cover}
                            width={244}
                            height={250}
                            alt="cardImg"
                        />
                    </div>
                </Link>
            }
            {
                isSold &&
                <div className={styles.imgWrapper}>
                    <img
                        className={styles.img}
                        priority
                        src={item.cover}
                        width={244}
                        height={250}
                        alt="cardImg"
                    />
                </div>
            }
            <div className={styles.title}>
                <div>{item.name}</div>
                <div>Avar</div>
            </div>
            <div className={styles.price}>
                <div>${item.price}</div>
                <div className={styles.progress}>
                    <div className={styles.resbar} style={{ width: isSold ? '100%' : '50%' }}>
                        <div className={`${styles.res} ${isSold} === true ? ${styles.resSold} : ${styles.resSelling}`}>
                            {isSold === true ? 'Sold Out' : (item.sales + '/' + item.count)}
                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default HomePageCard;