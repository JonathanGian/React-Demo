import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    
    return (
    <div>
        <h1>React Demo App</h1>
        <nav>
            <ul>
                {/* <li><NavLink to="/">Home</NavLink></li> */}
                <li><NavLink to="/">List</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                {/* <a href="/list">List</a> DONT USE THIS */}
            </ul>
        </nav>
    </div>
    );
};

export default Header;