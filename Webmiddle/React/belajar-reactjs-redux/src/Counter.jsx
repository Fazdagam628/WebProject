import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getCounter,
  getDoubleCounter,
  increment,
} from "./counterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  function handleIncreament() {
    dispatch(increment());
  }
  function handleDecreament() {
    dispatch(decrement());
  }

  const doubleCounter = useSelector(getDoubleCounter);
  const tripleCounter = useSelector((state) => getCounter(state, 3));
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h1>Double Counter : {doubleCounter}</h1>
      <h1>Triple Counter : {tripleCounter}</h1>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      <button onClick={() => dispatch(increment(2))}>Increament + 2</button>
      <button onClick={() => dispatch(decrement(2))}>Decreament + 2</button>
    </div>
  );
}
