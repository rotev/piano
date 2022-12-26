import Song from 'components/Song'

export default () => {

  const title = "My Favorite Things"

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

  return (
    <Song title={title} chordSheet={chordSheet} />
  )
}
