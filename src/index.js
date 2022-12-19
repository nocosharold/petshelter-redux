import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/fonts/DoHyeon-Regular.ttf';
import '../src/assets/fonts/Kanit-Regular.ttf';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.css';
import UserLayout from './views/layouts/user_layouts/UserLayout';
import { store } from './Store'
import { Provider } from 'react-redux'
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddPet from './views/user/dashboard/addPet';
import EditPet from './views/user/dashboard/editPet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <AddPet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit/:pet_id",
    element: <EditPet />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);