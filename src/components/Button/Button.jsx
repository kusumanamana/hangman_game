import { getButtonStyling } from "./getButtonStyling";
function Button({text, onClickHandler,styleType='primary',type='button'}) {
    return (
        // inline style example
        <button 
            onClick={onClickHandler}
            type={type}
            className={`px-4 py-2 ${getButtonStyling(styleType)} text-black`}>
            {text}
        </button>
    );


}
export default Button;
