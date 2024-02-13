import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Feed from './Feed';
import { loader as categoryLoader } from './Sidebar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
          path: 'category/:slug',
          element: <Feed />,
          loader: categoryLoader,
        },
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
