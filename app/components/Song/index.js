import ChordSheetJS from 'chordsheetjs'
import Chord from 'components/Chord'
import styles from './Song.module.scss'

export default function({chordSheet}) {

  const parser = new ChordSheetJS.ChordsOverWordsParser()
  const song = parser.parse(chordSheet)

  const formatter = new ChordSheetJS.HtmlTableFormatter()
  const disp = formatter.format(song)

  function renderSong(song) {
    return (
      <div className="chord-sheet">
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
      <div key={i} className="paragraph">
        <div className="lines">
          { p.lines.map(renderLine) }
        </div>
        <div className="visualChords">
          { chords.map((chord, i) => <Chord key={i} name={chord} />) }
        </div>
      </div>
    )
  }

  function renderLine(l,  i) {
    return (
      <table key={i} className="row">
        <tbody>
          <tr>
            {
              l.items.map((item, i) => {
                return (
                  <td key={i} className="chord">{item.chords}</td>
                )
              })
            }
          </tr>
          <tr>
            {
              l.items.map((item, i) => {
                return (
                  <td key={i} className="lyrics">{item.lyrics}</td>
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
      <h1>My Favorite Things</h1>

      { renderSong(song) }
      <Chord name="E" />
    </div>
  )
}
