import styles from './LoadingStyles.module.css'

const PageLoadingRotation = ()=> {
  return (
    <div className="inset-0 flex items-center justify-center bg-dark-accent/50 fixed">
      <div className={styles.container}>
        <span className={styles.dot}/>
        <span className={styles.dot}/>
        <span className={styles.dot}/>
        <span className={styles.dot}/>
      </div>
    </div>
  )
}

export default PageLoadingRotation
