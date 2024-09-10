import { useState } from "react";

function Counter () {
    const [num, Setnum] = useState(1)

    const addNum = () => {
        Setnum(num + 1)
    }
    const minusNum = () => {
        Setnum(num - 1)
    }
    const timesNum = (time:number) => {
        Setnum(num * time)
    }
    return (
        <div>
            <span> number is {num} </span>
            <button onClick={addNum}>
                <span>add number</span>
            </button>
            <button onClick={minusNum}>
                <span>minus number</span>
            </button>
            <button onClick={() => timesNum(2)}>
                <span>times number</span>
            </button>
        </div>
    )
}

export default Counter