import { useParams } from 'react-router';

export default function Image() {
  let params = useParams();

  return (
    <>
      <h1>Image {params['*']}</h1>
      <p>Ini adalah Image page</p>
    </>
  );
}
