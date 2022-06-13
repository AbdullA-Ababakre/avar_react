import styles from './index.module.scss'
import star from '../../images/homePage/star.png'
import slogan from '../../images/homePage/slogan.png'

const Logo = () => {
    return (
        <div className={styles.container}>
            <img
                priority
                src={slogan}
                className={styles.star}
                height={123}
                width={223}
                alt="slogan"
            />
            <img
                priority
                src={star}
                className={styles.slogan}
                height={99}
                width={414.5}
                alt="star"
            />
        </div>
    )
}

export default Logo;