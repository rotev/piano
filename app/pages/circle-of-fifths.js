import styles from '../styles/CircleOfFifths.module.scss';

export default function CircleOfFifths() {
  return (
    <div className={styles.circleOfFifths}>
      <header>
        <h1>Circle of Fifths</h1>
      </header>
      <section className={styles.main}>
        <svg viewBox="0 0 100 100" className={styles.circle}>
          <circle cx="50" cy="50" r="50" />
        </svg>
      </section>
    </div>
  )
}
