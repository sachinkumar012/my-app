import App from "../App"; 
import Footer from "./Footer"; 
import { Link } from "react-router-dom";
function Header() {
    return (
    <>
    <div className="container-fluid text
center">
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    </div>
    </>
    );
}

export default Header;