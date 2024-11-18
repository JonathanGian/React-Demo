import "./Button.css"
const Button = ({ text, cardClick, type = "button" }) => {// Type lets React know that whenever this button is used, its type is "button"
    return (
    <button  onClick={cardClick} type={type}> 
        {text}
    </button>
    );
};

export default Button;
