export default function Toolbar({ onClick }) {
  return (
    <div onClick={onClick}>
      <button onClick={onClick}>Satu</button>
      <button onClick={onClick}>Dua</button>
    </div>
  );
}
