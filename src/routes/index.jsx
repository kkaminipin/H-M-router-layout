// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../pages/Root';
import Products from '../pages/Products';
import ErrorPage from '../pages/ErrorPage';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import { useState } from 'react';

const Routers = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Root loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/products/:id',
      element: <ProductDetail loginStatus={loginStatus} />,
    },
    {
      path: '/login',
      element: <Login setLoginStatus={setLoginStatus} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
