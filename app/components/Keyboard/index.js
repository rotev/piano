import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano'
import 'react-piano/dist/styles.css'
import styles from './Keyboard.module.scss'

export default function Keyboard({firstNote, lastNote, activeNotes}) {

  return (
    <div className={styles.keyboard}>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber) => {
          // Play a given note - see notes below
        }}
        stopNote={(midiNumber) => {
          // Stop playing a given note - see notes below
        }}
        width={800}
        keyWidthToHeight={0.3}
        activeNotes={activeNotes}
      />
    </div>
  )
}

Keyboard.defaultProps = {
  firstNote: MidiNumbers.fromNote('c2'),
  lastNote: MidiNumbers.fromNote('f5'),
  activeNotes: [55,60]
}
