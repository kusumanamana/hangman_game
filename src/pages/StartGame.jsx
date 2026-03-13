import {Link} from 'react-router-dom';
import TextInputFormContainer from '../components/TextInputForm/TextInputFormContainer';
function StartGame(){
    return(
        <>
        <h1 className='text-lg'>Start Game</h1>
        <br></br>
        <TextInputFormContainer />
        <br></br>
        <Link to ='/play' className="text-blue-500">

        play game link </Link>

        </>
        
    )
}
export default StartGame; 