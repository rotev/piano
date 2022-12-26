import ChordSheetJS from 'chordsheetjs'
import classNames from 'classnames'
import Chord from 'components/Chord'
import styles from './Song.module.scss'

export default function Song({title, chordSheet, rtl}) {

  const parser = new ChordSheetJS.ChordsOverWordsParser()
  const song = parser.parse(chordSheet)

  const formatter = new ChordSheetJS.HtmlTableFormatter()
  const disp = formatter.format(song)

  function renderSong(song) {
    return (
      <div className={classNames(styles.chordSheet, {[styles.rtl]: rtl} )}>
        { song.bodyParagraphs.map(renderParagraph) }
      </div>
    )
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function renderParagraph(p, i) {
    const chords = p.lines
      .map(l => l.items.map(item => item.chords))
      .flat()
      .filter(chord => chord !== "")
      .filter(onlyUnique)

    return (
      <div key={i} className={styles.paragraph}>
        <div className={styles.lines}>
          { p.lines.map(renderLine) }
        </div>
        <div className={styles.visualChords}>
          { chords.map((chord, i) => <Chord key={i} name={chord} />) }
        </div>
      </div>
    )
  }

  function renderLine(l,  i) {
    return (
      <table key={i} className={styles.row}>
        <tbody>
          <tr>
            {
              l.items.map((item, i) => {
                return (
                  <td key={i} className={styles.chord}>{item.chords}</td>
                )
              })
            }
          </tr>
          <tr>
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
    )
  }

  return (
    <div className={styles.song}>
      <h1>{title}</h1>

      { renderSong(song) }
      <Chord name="E" />
    </div>
  )
}

Song.defaultProps = {
  rtl: false
}
