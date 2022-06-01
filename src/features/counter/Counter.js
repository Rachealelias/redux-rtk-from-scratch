import React, {useState} from 'react'
import { increment, decrement, reset, incrementByAmount, fetchRandomDogImageAsync } from './CounterSlice'
import {useSelector, useDispatch} from "react-redux"
import "./Counter.css"

const Counter = () => {
    //const [count, setCount] = useState(0)
    const count = useSelector(state => state.counter.value)
    const image = useSelector(state => state.counter.image)
    const status = useSelector(state => state.counter.status)
    const dispatch = useDispatch()

    // const increment = () => setCount(currentCount => currentCount + 1)
    // const decrement = () => setCount(currentCount => currentCount - 1)
    // const incrementBy = (amount) => setCount(currentCount => currentCount + amount)

    return (
        <div className={status === "idle" ? "green" : "red"}>
            <h2>Counter</h2>
            <p>Current Count: {count}</p><br/>
            <img src={image || window.location.origin + "/logo192.png"} alt="An Animal"/><br/>
            <button onClick={() => dispatch(reset())}>Reset</button><br/>
            <button onClick={() => dispatch(increment())}>Increment</button><br/>
            <button onClick={() => dispatch(decrement())}>Decrement</button><br/>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button><br/>
            <button onClick={() => dispatch (fetchRandomDogImageAsync())}>Fetch Dog</button>
        </div>
    )
}

export default Counter