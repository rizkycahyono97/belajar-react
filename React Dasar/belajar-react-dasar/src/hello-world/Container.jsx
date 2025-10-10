import { Children } from 'react';

export default function Container({ children }) {
  return (
    <div>
      <p>Rizky Cahyono Putra</p>
      {children}
      <footer>all right reserved</footer>
    </div>
  );
}
