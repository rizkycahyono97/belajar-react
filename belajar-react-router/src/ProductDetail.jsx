import { useParams } from 'react-router';

export default function ProductDetail() {
  let params = useParams();

  return (
    <>
      <h1>ProductDetail Page {params.id}</h1>
      <p>Ini adalah ProductDetail page</p>
    </>
  );
}
