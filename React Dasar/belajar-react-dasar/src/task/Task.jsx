import { useImmer } from 'use-immer';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function Task() {
  const [items, setItems] = useImmer([]);

  return (
    <div>
      <TaskForm setItems={setItems} />
      <TaskList items={items} />
    </div>
  );
}
