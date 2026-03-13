/**
 * 
 * @param {the word which is given as i/p and expected to be guessed} originalWord 
 * @param {letters which r guessed by the user already.} guessedLetter 
 *ex: originalword :Humble
 *guessedowrd:['H','M','E']
 
 *return ->"H _ M _ E" [fun will return this type in str format]
**/
export function getmaskedString(originalWord,guessedLetter){
    guessedLetter=guessedLetter.map(letter => letter.toUpperCase());
    const guessedLetterSet=new Set(guessedLetter);
    const result =originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        }else{
            return "_";
        }
    });//['H','_','M','_','_','E']
    return result;//return array. masked string

} 