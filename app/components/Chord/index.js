import styles from './Chord.module.scss'
import chords from './chords.json'

export default function({name}) {
  
  name = name.split("/")[0]
  name = name.split(" ")[0]

  if (!chords[name]) {
    return (
      <div className={styles.missingChord}>
        missing chord<br/>{name}
      </div>
    )
  }

  const threeTwoThree = chords[name].threeTwoThree
  const selectedKeys = chords[name].selectedKeys
  const threeTwoThreeWhiteIndices = [0,2,4,6,7,9,11,12,14,16,18]
  const twoThreeTwoWhiteIndices = [0,2,4,5,7,9,11,12,14,16,17]

  function renderKey(threeTwoThree, index) {
    const white = (threeTwoThree ? threeTwoThreeWhiteIndices : twoThreeTwoWhiteIndices).includes(index)
    const selected = selectedKeys.includes(index)
    const colorClass = white ? styles.white : styles.black
    const selectedClass = selected ? styles.selected : ""

    return (
      <div key={index} className={`${styles.key} ${colorClass} ${selectedClass}`}></div>
    )
  }

  function renderThreeTwoThree() {
    const numberOfKeys = 11 + 8

    return (
      <div className={styles.chord}>
        {
          [...Array(numberOfKeys)].map((_, i) => renderKey(true, i))
        }
      </div>
    )
  }

  function renderTwoThreeTwo() {
    const numberOfKeys = 11 + 7

    return (
      <div className={styles.chord}>
        {
          [...Array(numberOfKeys)].map((_, i) => renderKey(false, i))
        }
      </div>
    )
  }

  return threeTwoThree ? renderThreeTwoThree() : renderTwoThreeTwo()
}
