import styles from './Chord.module.scss'

export default function() {

  const threeTwoThree = true

  function renderThreeTwoThree() {
    return (
      <div className={styles.chord}>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
      </div>
    )
  }

  function renderTwoThreeTwo() {
    return (
      <div className={styles.chord}>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.black}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
        <div className={`${styles.key} ${styles.white}`}></div>
      </div>
    )
  }

  return threeTwoThree ? renderThreeTwoThree() : renderTwoThreeTwo()
}
