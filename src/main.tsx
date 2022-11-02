//* dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//* stylesheet
import "./styles/main.css";

//* routes / components
import Home from "./routes/Home";
import Telescopes from "./routes/Telescopes";
import Error from "./routes/Error";

import About from "./components/About";
import TwoMass from "./components/TwoMass";
import Fermi from "./components/Fermi";
import Iras from "./components/Iras";
import UC from "./components/UnitConverter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "two-mass",
        element: <TwoMass />,
      },
      {
        path: "fermi",
        element: <Fermi />,
      },
      {
        path: "iras",
        element: <Iras />,
      },
      {
        path: "unit-converter",
        element: <UC />,
      },
    ],
  },
  {
    path: "telescopes",
    element: <Telescopes />,
    children: [
      {
        path: "iras",
      },
      {
        path: "fermi",
      },
      {
        path: "two-mass",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
