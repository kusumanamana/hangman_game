import { useState } from "react";

function Form(){
    const [name,setName]=useState({
        fname:'',
        age:0
    })
    function handlename(e){
        setName({
            ...name,
            fname:e.target.value
        })
        console.log(name.fname)
    }
    return(
        <div>
            FORMS
            <form>
                <input type='text' placeholder="here"  onChange={handlename}/>
            </form>
            name:{name.fname}
        </div>
    )
}
export default Form;