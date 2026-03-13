import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import { useEffect, useState } from 'react';
function Home(){
    const [word,setWord]=useState('')

    async function fetchWords(){
        const response=await fetch('http://localhost:3000/words');
        //response is a custom object,now u have 
        // to converst to json
        const data=await response.json();
        console.log(data);

         const randomIndex=Math.floor(Math.random()*data.length);
         console.log(data[randomIndex].wordValue);
         setWord(data[randomIndex].wordValue)
    }

    useEffect(()=>{
        fetchWords();
    },[]);
    return(
<div className="bg-green-100 min-h-screen flex flex-col justify-center items-center">     
    
       <>
        <p className='mt-4 text-lg font-medium underline'>Choose the type of play</p>
        <Link to='/play' state={{wordselected:word}}>
        <br></br>
        <div>
                
            <Button text='single player game'></Button>
        </div>
        </Link>
        <br />
        <Link to='/start'  >
        <div className='mt-4'>
            <Button text='multi player game'
            styleType='secondary'
            ></Button>
        </div>
        </Link>
        </>
        </div> 
    ) 
}
export default Home;