
import { React } from "react";
import "./style.css"
import { useDispatch } from "react-redux";
import {increment} from "../actions"


function Increment() {
    let dispatch = useDispatch();
    return (
        <>
            <button onClick={() => {dispatch(increment())
            }}>+</button>
        </>
    )
}

export default Increment;