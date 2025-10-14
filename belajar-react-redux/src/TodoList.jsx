import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { removeTodo } from './todoListSlice';

export default function TodoList() {
  const todos = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  function handleDeleteTodo(id) {
    dispatch(removeTodo({ id: id }));
  }

  return (
    <div>
      <h1>List Todo</h1>
      <Link to={'/todolist/add'}>Add Todo</Link>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>
                <Link to={`/todolist/${todo.id}/edit`}>Update</Link>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
