import React from "react";
import {Link} from "react-router-dom";
import './Home.css';
function Home(){
    return (
    <div className="container text-center">
        <h1 className="box">Welcome to MERN Project</h1>
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
    </div>
    );
}
export default Home;