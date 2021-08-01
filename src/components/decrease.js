
import { React } from "react";
import "./style.css"
import { useDispatch } from "react-redux";
import { decrement } from "../actions";



function Decrement() {
    let dispatch = useDispatch();
    return (
        <>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
        </>
    )
}

export default Decrement;