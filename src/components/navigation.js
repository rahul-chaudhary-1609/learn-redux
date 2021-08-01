
import { React } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login,logout } from "../actions";



function Nav() {
    let count = useSelector((state => state.counter))
    let auth = useSelector((state => state.auth))
    let dispatch = useDispatch();

    function handleAuth() {
        if (auth) {
            dispatch(logout());
        }
        else {
            dispatch(login());
        }
    }
    return (
        <nav>
            <Link className="nav-link" to="/"><li className="nav-link-item" >Home</li></Link>
            <Link className="nav-link" to="/increase"><li className="nav-link-item">Increase</li></Link>
            <Link className="nav-link" to="/decrease"><li className="nav-link-item">Decrease</li></Link>
            <Link className="nav-link"><button className="nav-link-item" onClick={handleAuth}>{auth? "LOGOUT": "LOGIN" }</button></Link>
            {auth ? <Link className="nav-link">{count}</Link>:null}
        </nav>
    )
}

export default Nav;