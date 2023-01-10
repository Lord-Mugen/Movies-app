import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home";
import Popular from "./routes/Popular/Popular";
import TopRated from "./routes/Top Rated/TopRated";
import Upcoming from "./routes/Upcoming/Upcoming";
import "./index.css";
import "./sass/app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>, //debo hacer una pagina de error
  },
  {
    path: "/popular",
    element: <Popular />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "top-rated",
    element: <TopRated />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "upcoming",
    element: <Upcoming />,
    errorElement: <h1>Error</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
