import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  getDoubleCounter,
  getCounter
} from './CounterSlice';

export default function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  //   const doubleCounter = useSelector(getDoubleCounter);
  const tripleCounter = useSelector(state => getCounter(state, 3));

  return (
    <>
      <h1>Counter : {counter}</h1>
      {/* <h1>Double Counter : {doubleCounter}</h1> */}
      <h1>Triple Counter : {tripleCounter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => dispatch(increment(2))}>Increment +2</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement -1</button>
    </>
  );
}
