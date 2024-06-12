import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InputTransfer from './components/InputTransfer/InputTransfer';
import OutputTransfer from './components/OutputTransfer/OutputTransfer';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SelectTable from './components/SelectTable/SelectTable';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SelectTable/>
    ),
  },
  {
    path: "/InputTransfer",
    element: (
      <InputTransfer/>
    ),
  },
  {
    path: "/OutputTransfer",
    element: (
      <OutputTransfer/>
    ),
  },
]);

root.render(
 
  <RouterProvider router={router} />

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
