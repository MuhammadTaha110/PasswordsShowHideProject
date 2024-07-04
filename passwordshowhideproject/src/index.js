import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PasswordBox } from './PasswordBox';
import { Todo } from './Todo';
import { FAQ } from './FAQ';

const root = ReactDOM.createRoot(document.getElementById('root'));

let routes= [
  {
    path:'/',
    Element: <App/>
  },
  {
    path:'/passwordbox',
    Element: <PasswordBox/>
  },
  {
    path:'/faq',
    Element: <FAQ/>
  },
  {
    path:'/todo',
    Element: <Todo/>
  }
]
root.render(
  <React.StrictMode>
    <RouterProvider routes={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
