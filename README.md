# piano

## Development

1. Start a Codespace.
2. `cd app`
3. `yarn dev`
4. Open http://localhost:3000.

Example Hebrew song: [אני ואתה](http://127.0.0.1:3000/songs/you-and-me).

Example English song: [My Favorite Things](http://127.0.0.1:3000/songs/my-favorite-things).

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