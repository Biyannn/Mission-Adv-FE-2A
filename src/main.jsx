// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Pages/login";
// import App from './App.jsx'
import RegisterPage from "./components/Pages/register";
import ErrorPage from "./components/Pages/404";
import Homepage from "./components/Pages/home";
import DetailProduct from "./components/Fragments/DetailProduct";
import Profile from "./components/Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />,
  },

  {
    path: "/error",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/homepage",
    element: <Homepage />,
  },

  {
    path: "/detailproduct/:id",
    element: <DetailProduct />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
