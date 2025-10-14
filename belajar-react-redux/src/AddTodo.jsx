import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addTodo } from './todoListSlice';

export default function AddTodo() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(addTodo({ name: name }));
    navigate('/todolist');
  }

  return (
    <div>
      <h1>Add Input</h1>
      <input
        type="text"
        placeholder="Enter Todo Name"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
