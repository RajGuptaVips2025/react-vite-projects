import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
// import { store } from './app/store'
import { Provider } from 'react-redux'
import ShowMovies from './components/ShowMovies/ShowMovies.jsx';
import store from './app/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "signUp",
        element: <SignUp />
      },
      {
        path: "movies",
        element: <ShowMovies />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
