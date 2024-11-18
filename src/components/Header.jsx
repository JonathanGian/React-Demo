import { Link } from "react-router-dom";
const Header = () => {
    return (
    <div>
        <h1>React Demo App</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="list">List</Link></li>
                <li><Link to="about">About</Link></li>
                {/* <a href="/list">List</a> DONT USE THIS */}
            </ul>
        </nav>
    </div>
    );
};

export default Header;