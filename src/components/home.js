import { React } from "react";
import "./style.css";
import { useSelector} from "react-redux";



function Home() {
    let count = useSelector(store => store.counter);
    return (
        <div >
            <h1>Count: {count}</h1>
</div>
    )
}

export default Home;

