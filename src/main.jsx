import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home";
import Popular from "./routes/Popular/Popular";
import TopRated from "./routes/Top Rated/TopRated";
import Upcoming from "./routes/Upcoming/Upcoming";
import Error from "./routes/Error/Error";
import "./index.css";
import "./sass/app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/popular",
    element: <Popular />,
    errorElement: <Error />,
  },
  {
    path: "top-rated",
    element: <TopRated />,
    errorElement: <Error />,
  },
  {
    path: "upcoming",
    element: <Upcoming />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
