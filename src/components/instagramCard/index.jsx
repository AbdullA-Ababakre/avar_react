import styles from './index.module.scss';
import likeImg from '../../images/ins/love.png';

const InsCard = ({
    profile, name, insImg, likeNum
}) => {
    return (
        <div className={styles.insCard}>
            <div className={styles.head}>
                <img className={styles.profile} width='40px' height='40px' src={profile} alt="profile"></img>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.content}>
                <img className={styles.profile} src={insImg} alt="profile"></img>
            </div>
            <div className={styles.footer}>
                <div className={styles.likeNum}>{likeNum}</div>
                <img className={styles.profile} src={likeImg} alt="likeImg"></img>
            </div>
        </div>
    )
}

export default InsCard;