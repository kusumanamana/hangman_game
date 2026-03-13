function TextInput({type="text",label,placeholder='enter your text here',onChangeHandler}){
    return(
        <label>
            <span className='text-gray-500'>{label}</span>
            <input type={type}
            className="px-2 py-2 border border-gray-500 rounded-md w-full font-small"
            placeholder={placeholder}
            onChange={onChangeHandler}
            />
            
        </label>
    );
}
export default TextInput;