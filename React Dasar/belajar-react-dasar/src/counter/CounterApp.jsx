import { useState } from 'react';
import Counter from './Counter';

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <>
      {/* tidak akan kereset */}
      {/* {show2 ? <Counter name="Rizky" /> : <Counter name="Cahyono" />} */}
      {/* reset state  karena beda tag html */}
      {/* {show2 ? (
        <div>
          <Counter name="Rizky" />
        </div>
      ) : (
        <section>
          <Counter name="Cahyono" />
        </section>
      )} */}
      {/* reset state karena menggunakan !&& */}
      {/* {show2 && <Counter name="Rizky" />}
      {!show2 && <Counter name="Cahyono" />} */}
      {/* reset state menggunakan key */}
      {show2 ? (
        <Counter key="1" name="Rizky" />
      ) : (
        <Counter key="2" name="Cahyon" />
      )}
      <input type="checkbox" checked={show2} onChange={handleChange} />{' '}
      Tampilkan Checkbox
    </>
  );
}
