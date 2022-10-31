import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./styles/main.css";

import Root from "./Root";
import Home from "./routes/Home";
import About from "./components/About";
import TwoMass from "./components/TwoMass";
import Fermi from "./components/Fermi";
import Iras from "./components/Iras";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <About />,
          },
          {
            path: "/two-mass",
            element: <TwoMass />,
          },
          {
            path: "/fermi",
            element: <Fermi />,
          },
          {
            path: "/iras",
            element: <Iras />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
