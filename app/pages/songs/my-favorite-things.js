import ChordSheetJS from 'chordsheetjs'
import Chord from 'components/Chord'

const Song = () => {

  const chordSheet = `
Em  
Raindrops on roses and whiskers on kittens
Cmaj7
Bright copper kettles and warm woolen mittens
Am          D7       G            C
Brown paper packages tied up with strings
G           C         F#m7     B7
These are a few of my favorite things
 

Em
Cream colored ponies and crisp apple streudels
Cmaj7
Doorbells and sleigh bells and schnitzel with noodles
Am          D7       G            C
Wild geese that fly with the moon on their wings
G           C         F#m7     B7
These are a few of my favorite things
 

E
Girls in white dresses with blue satin sashes
A
Snowflakes that stay on my nose and eyelashes
Am          D7       G            C
Silver white winters that melt into springs
G           C         F#m7     B7
These are a few of my favorite things
 

Em
When the dog bites
Am       B/Eb
When the bee stings
Em               C
When I'm feeling sad
  C      Am          G        C
I simply remember my favorite things
    Am           D7      G
And then I don't feel so bad`.substring(1)

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