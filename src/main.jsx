import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main.jsx';
import Home from './components/layout/Home.jsx';
import Login from './components/layout/Login.jsx';
import Register from './components/layout/Register.jsx';
import ThemProviders from './components/providers/ThemProviders.jsx';
import Orders from './Orders';
import PrivateRoute from './components/route/PrivateRoute';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/orders",
        element: <PrivateRoute> <Orders></Orders> </PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemProviders>
  <RouterProvider router={router} />
  </ThemProviders>
  </React.StrictMode>,
)
