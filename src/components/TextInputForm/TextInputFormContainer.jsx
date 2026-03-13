import { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){
    const[inputType , setInputType]=useState('password');
    const[value,setValue]=useState("");
    const navigate=useNavigate();
    //its a hook that return navigate fun
    function handleFormSubmit(event){
        event.preventDefault();
        console.log('form submitted.', value )
        if (value){ 
            setTimeout(()=>{
                navigate('/play', {state :{wordselected:value}} );
            },2000)//after 5 sec 
            //navigate('/play')
        }
    }
    function handleTextInputChange(event){
        setValue(event.target.value)
        console.log(value)
    }
    function handleShowHideClick(){
        if(inputType==='password'){
            setInputType('text')
        }else{
            setInputType('password')
        }
     }
     useEffect(()=>{
        console.log('show hide button clicked')
     },[inputType]);

    return (
        <>
    <TextInputForm
    inputType={inputType}
        handleFormSubmit={handleFormSubmit} 
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
    />

        </>
     );
}


export default TextInputFormContainer;  