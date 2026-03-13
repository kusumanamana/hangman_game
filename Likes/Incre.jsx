import React,{useState} from "react";
import './likes.css'
function Incre(){
        const [value,setValue]=useState(0);
        function handleadd(){
            setValue(value+1);
        }
        function handlesub(){
            setValue(value-1);
        }
    return(
        <div className="page">
            <label>Likes counter</label><br/>
        
            <button className='add' onClick={handleadd}>add</button>&nbsp;
            <span className="answer">{value} </span>
            <button className='sub' onClick={handlesub}>sub</button>
        </div>
    )
}
export  default Incre;