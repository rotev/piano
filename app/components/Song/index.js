import ChordSheetJS from 'chordsheetjs'
import classNames from 'classnames'
import Chord from 'components/Chord'
import SongHeader from 'components/SongHeader'
import styles from './Song.module.scss'
import Paper from '@mui/material/Paper'

export default function Song({title, chordSheet, rtl}) {

  const parser = new ChordSheetJS.ChordsOverWordsParser()
  const song = parser.parse(chordSheet)
  const chordsPrinted = []

  function renderSong(song) {
    return (
      <Paper elevation={3} className={classNames(styles.chordSheet, {[styles.rtl]: rtl} )}>
        { song.bodyParagraphs.map(renderParagraph) }
      </Paper>
    )
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function renderParagraph(p, i) {
    return (
      <div key={i} className={styles.paragraph}>
        { p.lines.map(renderLine) }
      </div>
    )
  }

  function renderLine(l,  i) {

    const chords = l.items
      .map(item => item.chords)
      .flat()
      .filter(chord => chord !== "")
      .filter(onlyUnique)
      .filter(chord => chordsPrinted.indexOf(chord) ===  -1)

    chordsPrinted.push(...chords)

    return (
      <div className={styles.line}>
        <table key={i} className={styles.table}>
          <tbody>
            <tr className={styles.chords}>
              {
                l.items.map((item, i) => {
                  return (
                    <td key={i} className={styles.chord}>{item.chords}</td>
                  )
                })
              }
            </tr>
            <tr className={styles.text}>
              {
                l.items.map((item, i) => {
                  return (
                    <td key={i} className={styles.lyrics}>{item.lyrics}</td>
                  )
                })
              }
            </tr>
            
          </tbody>
        </table>
        <div className={styles.visualChords}>
          { chords.map((chord, i) => <Chord key={i} name={chord} />) }
        </div>
      </div>
    )
  }

  return (
    <div className={styles.song}>
      <SongHeader title={title} />

      { renderSong(song) }
    </div>
  )
}

Song.defaultProps = {
  rtl: false
}
