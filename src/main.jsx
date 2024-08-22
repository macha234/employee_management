import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App.jsx'
import "./index.css"
import ListEmployees from './pages/ListEmployees.jsx';
import Edit from './pages/Edit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/display",
    element: <ListEmployees />
  },
  {
    path: "/edit/:id",
    element: <Edit />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
