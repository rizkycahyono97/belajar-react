import { NavLink, Outlet, useLocation } from 'react-router';
import './data.css';

export default function DataLayout() {
  const location = useLocation();

  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="product">Product</NavLink>
          </li>
          <li>
            <NavLink to="customer">Customer</NavLink>
          </li>
          <li>
            <NavLink to="seller">Seller</NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: '/data/products',
                search: '?category=shoes',
                hash: '#top'
              }}
            >
              Product
            </NavLink>
          </li>
        </ul>
        <h1>This is Header</h1>
        <div>==========================</div>
      </div>

      {/* outlet */}
      <Outlet />

      <div>
        <div>==========================</div>
        <p>This is Footer</p>
        <p>
          Location : {location.search}
          {location.pathname}
        </p>
      </div>
    </>
  );
}
