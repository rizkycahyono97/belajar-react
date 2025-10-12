import TodoItem from './TodoItem';

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: 'HTML',
      isCompleted: true
    },
    {
      id: 1,
      text: 'CSS',
      isCompleted: true
    },
    {
      id: 2,
      text: 'JAVASCRIPT',
      isCompleted: false
    },
    {
      id: 3,
      text: 'REACT',
      isCompleted: false
    },
    {
      id: 4,
      text: 'VUE',
      isCompleted: false
    }
  ];

  //   const todos = data.map(todo => <TodoItem {...todo} />); //spread operator

  return (
    <ul>
      {data.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
