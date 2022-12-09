import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/fonts/DoHyeon-Regular.ttf';
import '../src/assets/fonts/Kanit-Regular.ttf';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.css';
import UserLayout from './views/layouts/user_layouts/UserLayout';
import { store } from './Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <UserLayout/>
  </Provider>
);