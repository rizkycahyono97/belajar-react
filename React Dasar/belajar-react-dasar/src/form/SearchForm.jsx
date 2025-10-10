export default function SearchForm() {
  return (
    <form action="">
      <input type="text" />
      <button onClick={e => (e.preventDefault(), alert('Hai'))}>Kirim</button>
    </form>
  );
}
