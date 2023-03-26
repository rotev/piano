import React, { useState } from 'react';
import Keyboard from 'components/Keyboard'
import { MidiNumbers } from 'react-piano';

const NOTES = [
  ['c3', 'e3', 'g3', 'c4', 'e4'],
  ['c3', 'd3', 'a3', 'd4', 'f4'],
  ['b2', 'd3', 'g3', 'd4', 'f4'],
  ['c3', 'e3', 'g3', 'c4', 'e4'],
  ['c3', 'e3', 'a3', 'e4', 'a4'],
  ['c3', 'd3', 'f#3', 'a3', 'd4'],
  ['b2', 'd3', 'g3', 'd4', 'g4'],
  ['b2', 'c3', 'e3', 'g3', 'c4'],
  ['a2', 'c3', 'e3', 'g3', 'c4'],
  ['d2', 'a2', 'd3', 'f#3', 'c4'],
  ['g2', 'b2', 'd3', 'g3', 'b3'],
  ['g2', 'bb2', 'e3', 'g3', 'db4'],
  ['f2', 'a2', 'd3', 'a3', 'd4'],
  ['f2', 'ab2', 'd3', 'f3', 'b3'],
  ['e2', 'g2', 'c3', 'g3', 'c4'],
  ['e2', 'f2', 'a2', 'c3', 'f3'],
  ['d2', 'f2', 'a2', 'c3', 'f3'],
  ['g1', 'd2', 'g2', 'b2', 'f3'],
  ['c2', 'e2', 'g3', 'c4', 'e4'],
  ['c2', 'g2', 'bb2', 'c3', 'e3'],
  ['f1', 'f2', 'a2', 'c3', 'e3'],
  ['f#1', 'c2', 'a2', 'c3', 'eb3'],
  ['ab1', 'f2', 'b2', 'c3', 'd3'],
  ['g1', 'f2', 'g2', 'b2', 'd3'],
  ['g1', 'e2', 'g2', 'c3', 'e3'],
  ['g1', 'd2', 'g2', 'c3', 'f3'],
  ['g1', 'd2', 'g2', 'b2', 'f3'],
  ['g1', 'eb2', 'a2', 'c3', 'f#3'],
  ['g1', 'e2', 'g2', 'c3', 'g3'],
  ['g1', 'd2', 'g2', 'c3', 'f3'],
  ['g1', 'd2', 'g2', 'b2', 'f3'],
  ['c1', 'c2', 'g2', 'bb2', 'e3'],
  ['c1', 'c2', 'f2', 'a2', 'c3', 'f3']
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
        firstNote={MidiNumbers.fromNote('c1')}
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