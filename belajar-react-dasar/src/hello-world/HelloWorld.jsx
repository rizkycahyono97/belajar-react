export default function HelloWorld() {
  const props = {
    text: 'spread Syntax',
    paragraph: 'spread Syntax'
  };

  return (
    <div>
      <HeaderHelloWorld text="Rizky Cahyono" />
      <ParagraphHelloWorld />
      <SpreadSyntax {...props} />
    </div>
  );
}

function HeaderHelloWorld({ text = 'Hai' }) {
  // 'Hai' itu default dari props jika yang dikirim null
  return (
    <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = 'Progammer Zaman Now';
  const style = {
    color: 'blue',
    backgroundColor: 'red'
  };

  return <p style={style}>{text.toLowerCase()}</p>;
}

function SpreadSyntax({ text, paragraph }) {
  return (
    <div>
      <h1>{text}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
