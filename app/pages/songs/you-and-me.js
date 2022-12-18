import ChordSheetJS from 'chordsheetjs'
import Chord from 'components/Chord'

const Song = () => {

  const chordSheet = `
  Em     B7    A    Em
אני ואתה ננסה מהתחלה
G D Em         B7        A         
יהיה לנו רע  אין דבר זה לא נורא    
Em B7          G      D          G
אמרו את זה קודם לפני זה לא משנה   
 E       B7     A    Em
אני ואתה  נשנה את העולם
מעבר:
E A Abm F#m E E A Abm F#m Em
המשך מעבר כמו הפתיחה
Em       B7     A    Em
אני ואתה  נשנה את העולם
G D Em         B7      A    Em
אני ואתה אז יבואו כבר כולם    
B7          G       D          G
אמרו את זה קודם  לפני זה לא משנה
Em       B7     A    Em
אני ואתה  נשנה את העולם
מעבר:
E A Abm F#m E E A Abm F#m Em
מעבר:
Em Em Em Em x2

המשך מעבר כמו הפתיחה x2
מעבר:
Em Em Em Em x2

סיום:
Em Em Em Em x2`.substring(1)

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
                  <td key={i} class="lyrics">{item.lyrics}</td>
                )
              })
            }
          </tr>
          
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>My Favorite Things</h1>

      { renderSong(song) }
      <Chord name="E" />
    </div>
  )
}

export default Song