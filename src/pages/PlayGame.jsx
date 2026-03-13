import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LETTERbuttons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";
function PlayGame(){
    const {state} = useLocation();    

    const[guessedLetters,setGuessedLetters]=useState([]);
    const[step,setStep]=useState(0);
    

    function handleLetterClick(letter){
        if(state.wordselected.toUpperCase().includes(letter)){
            console.log('correct')
        }else{
            console.log('wrong');
            setStep(step+1);
        }


        setGuessedLetters([...guessedLetters,letter]);
    }
    return(
        <>
        <h1>word selected is-{state?.wordselected}</h1>

        
        {state?.wordselected &&(
            <>
                <MaskedText text={state.wordselected}
                guessedLetters={guessedLetters}   />
                {/* in guessed letter passing state variable  */}
                <div>
                <LetterButtons text={state.wordselected} 
                    guessedLetters={guessedLetters}
                    onLetterClick={handleLetterClick}
                    />
                </div>
                <div>
                    <HangMan step={step}/>
                </div>
            </>
        )}
        <Link to='/' className="text-blue-500">Homepage</Link> <br />
        <Link to='/start' className="text-blue-400">start game link</Link>
        
        </>
    )
}
export default PlayGame;  