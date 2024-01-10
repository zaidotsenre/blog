import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Reader, { loader as readerLoader } from './pages/Reader';
import Home, { loader as homeLoader } from './pages/Home';
import Editor, { loader as editLoader, editAction, writeAction } from './pages/Editor';
import DeletePrompt, { loader as deleteLoader, deleteAction } from './components/DeletePrompt';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



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
        path: 'read/:articleId',
        element: <Reader />,
        loader: readerLoader,
        children: [
          {
            path: 'delete',
            element: <DeletePrompt />,
            loader: deleteLoader,
            action: deleteAction
          },
        ]
      },
      {
        path: 'write/',
        element: <Editor />,
        action: writeAction
      },
      {
        path: 'edit/:articleId',
        element: <Editor />,
        loader: editLoader,
        action: editAction
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
