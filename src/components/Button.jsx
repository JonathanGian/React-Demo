import "./Button.css"
const Button = ({ text, onClick, type = "button", variant = "primary" }) => {// Type lets React know that whenever this button is used, its type is "button"
    return (
    <button className={`btn ${variant}`} onClick={onClick} type={type}> 
        {text}
    </button>
    );
};

export default Button;
