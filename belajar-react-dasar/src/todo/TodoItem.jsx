export default function TodoItem({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return <li>{isCompleted ? <del>{text}</del> : text}</li>;
  }
}
