export default function SayHelloForm() {
  function onClickHandler(e) {
    e.preventDefault();
    const name = document.getElementById('input_name').value;
    document.getElementById('text_hello').innerText = `Hello ${name}`;
  }

  return (
    <div>
      <form>
        <input id="input_name" />
        <button onClick={onClickHandler}>Click</button>
      </form>
      <h1 id="text_hello"></h1>
    </div>
  );
}
