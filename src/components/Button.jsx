import "./Button.css"
const Button = ({ text,cardClick }) => {
    return <button id="loginBtn" onClick={cardClick}>{text}</button>;
};

export default Button;
