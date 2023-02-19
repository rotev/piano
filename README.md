# piano

## Development

1. `cd app`
2. `yarn`
3. `yarn dev`

## Song data structure

A future version might support a comprehensive system to synchronize lyrics, chord progression and audio, using a data structure similar to this:

```js
const data = {
  lyrics: {
    offset: 0,
    parts: [

    ]
  },
  chords: {
    offset: 0,
    chords: [
      { time: 0, chord: '' }
    ]
  },
  youtube: {
    url: "",
    offset: "",
  },
}
```

But for now, I'll start with something as simple as parsing a chord/lyrics format found in abundance on the internet, using the awesome [ChordSheetJS](https://github.com/martijnversluis/ChordSheetJS) library.

```
       Am         C/G        F          C
Let it be, let it be, let it be, let it be
C                G              F  C/E Dm C
Whisper words of wisdom, let it be
```