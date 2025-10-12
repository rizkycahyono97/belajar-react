import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import About from './About';
import Product from './Product';
import Customer from './Customer';
import Seller from './Seller';
import Data from './Data';
import DataLayout from './DataLayout';
import ProductDetail from './ProductDetail';
import Image from './Image';
import NotFound from './NotFound';
import ProductSearch from './ProductSearch';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images/*" element={<Image />} />

        {/* nested */}
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="product" element={<Product />} />
          <Route path="customer" element={<Customer />} />
          <Route path="seller" element={<Seller />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="product/search" element={<ProductSearch />}></Route>
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
