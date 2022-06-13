import styles from './index.module.scss'

const Button = ()=>{
  return (
    <button
      type="button"
      className={styles.error}
    >
      Destroy
    </button>
  )
}

export default Button;