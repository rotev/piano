import Song from 'components/Song'

export default () => {

  const title = "אני ואתה"

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
Em Em Em Em

המשך מעבר כמו הפתיחה x2
מעבר:
Em Em Em Em

סיום:
Em Em Em Em`.substring(1)

  return (
    <Song title={title} chordSheet={chordSheet} rtl={true} />
  )
}
