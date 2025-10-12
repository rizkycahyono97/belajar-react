import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

export default function ProductSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const urlSearchTerm = searchParams.get('search') || '';
    setSearch(urlSearchTerm);
  }, [searchParams]);

  function handleSearch() {
    if (search) {
      navigate({
        pathname: '/data/products/search',
        search: `?search=${search}`
      });
    }
  }

  return (
    <>
      <h1>Search Product</h1>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <p>Kamu Mencari : {searchParams.get('search')}</p>
    </>
  );
}
