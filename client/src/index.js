import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import Dashboard, { loader as dashboardLoader } from './pages/Dashboard';
import Editor, { editAction, loader as editorLoader, writeAction } from './pages/Editor';
import ErrorPage from './pages/ErrorPage';
import Home, { loader as homeLoader } from './pages/Home';
import Reader, { loader as readerLoader } from './pages/Reader';
import reportWebVitals from './reportWebVitals';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: homeLoader
      },
      {
        path: ':page',
        element: <Home />,
        loader: homeLoader
      },
      {
        path: 'read/:articleId',
        element: <Reader />,
        loader: readerLoader,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: 'edit/:articleId',
        element: <Editor />,
        loader: editorLoader,
        action: editAction
      },
      {
        path: 'write',
        element: <Editor />,
        action: writeAction
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
