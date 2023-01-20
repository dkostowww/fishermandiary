import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from './redux'
import App from './components/App'
import Error from './components/pages/Error'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "login", element: <Login /> },
      // { path: "post/add", element: <AddPost /> },
      // {
      //   path: "post/:id",
      //   element: <Details />,
      //   loader: postParamHandler,
      // },
      // {
      //   path: "post/:id/edit",
      //   element: <EditPost />,
      //   loader: postParamHandler,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
)
