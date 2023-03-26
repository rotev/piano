import React, { useState } from 'react';
import Keyboard from 'components/Keyboard'
import { MidiNumbers } from 'react-piano';

const NOTES = [
  ['c4', 'e4', 'g4', 'c5', 'e5'],
  ['c4', 'd4', 'a4', 'd5', 'f5'],
  ['b3', 'd4', 'g4', 'd5', 'f5'],
  ['c4', 'e4', 'g4', 'c5', 'e5'],
  ['c4', 'e4', 'a4', 'e5', 'a5'],
  ['c4', 'd4', 'f#4', 'a4', 'd5'],
  ['b3', 'd4', 'g4', 'd5', 'g5'],
  ['b3', 'c4', 'e4', 'g4', 'c5'],
  ['a3', 'c4', 'e4', 'g4', 'c5'],
  ['d3', 'a3', 'd4', 'f#4', 'c5'],
  ['g3', 'b3', 'd4', 'g4', 'b4'],
  ['g3', 'bb3', 'e4', 'g4', 'db5'],
  ['f3', 'a3', 'd4', 'a4', 'd5'],
  ['f3', 'ab3', 'd4', 'f4', 'b4'],
  ['e3', 'g3', 'c4', 'g4', 'c5'],
  ['e3', 'f3', 'a3', 'c4', 'f4'],
  ['d3', 'f3', 'a3', 'c4', 'f4'],
  ['g2', 'd3', 'g3', 'b3', 'f4'],
  ['c3', 'e3', 'g4', 'c5', 'e5'],
  ['c3', 'g3', 'bb3', 'c4', 'e4'],
  ['f2', 'f3', 'a3', 'c4', 'e4'],
  ['f#2', 'c3', 'a3', 'c4', 'eb4'],
  ['ab2', 'f3', 'b3', 'c4', 'd4'],
  ['g2', 'f3', 'g3', 'b3', 'd4'],
  ['g2', 'e3', 'g3', 'c4', 'e4'],
  ['g2', 'd3', 'g3', 'c4', 'f4'],
  ['g2', 'd3', 'g3', 'b3', 'f4'],
  ['g2', 'eb3', 'a3', 'c4', 'f#4'],
  ['g2', 'e3', 'g3', 'c4', 'g4'],
  ['g2', 'd3', 'g3', 'c4', 'f4'],
  ['g2', 'd3', 'g3', 'b3', 'f4'],
  ['c2', 'c3', 'g3', 'bb3', 'e4'],
  ['c2', 'c3', 'f3', 'a3', 'c4', 'f4']
]

const styles = {
  prelude: {
    width: '800px',
    margin: 'auto'
  },
  group: {
    borderBottom: '2px solid red',
    marginBottom: '10px'
  }
}

export default function Prelude() {

  function renderGroup(group) {
    return group.map((line, i) => {
      const activeNotes = line.map(note => MidiNumbers.fromNote(note))
      return <Keyboard
        key={i}
        firstNote={MidiNumbers.fromNote('b1')}
        lastNote={MidiNumbers.fromNote('c6')}
        activeNotes={activeNotes} />
    })
  }

  function render() {
    const groupSize = 4
    const renderedGroups = []

    for (let i = 0; i < NOTES.length; i += groupSize) {
        const group = NOTES.slice(i, i + groupSize);

        renderedGroups.push(
          <div style={styles.group}>{ renderGroup(group) }</div>
        )
    }

    return renderedGroups
  }
  
  return (
    <div style={styles.prelude}>{ render() }</div>
  )
}