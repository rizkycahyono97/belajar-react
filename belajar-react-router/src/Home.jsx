import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate({
      pathname: '/data'
    });
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>Ini adalah home page</p>
      <button onClick={handleClick}>Halaman Data</button>
    </>
  );
}
