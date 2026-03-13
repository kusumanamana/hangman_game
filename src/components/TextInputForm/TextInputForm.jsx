import TextInput from "../TextInput/TextInput";
import Button from '../Button/Button';
function TextInputForm({inputType='password',handleFormSubmit,handleTextInputChange,handleShowHideClick}){
 
    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                type={inputType}
               // label='enter a word or phrase'
                placeholder="here..."
                onChangeHandler={handleTextInputChange} />
            </div>
             <br></br>
            <div>
                <Button styleType='warning'
                type="button"
                text={inputType==="password" ? 'show':'Hide'}
                onClickHandler={handleShowHideClick}
                 />
            </div>
            <br></br>
            <div>
                <Button
                type='submit'
                styleType='primary'
                text='Submit'
                 />
            </div>
        </form>
    )
}
export default TextInputForm;