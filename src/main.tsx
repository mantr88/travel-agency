import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import Home from "./pages/Home";
import AllAds from "./pages/AllAds.tsx";
import MainLoyout from "./loyouts/MainLoyout/MainLoyout.tsx";

export const router = createBrowserRouter([
  {
    path: "/travel-agensy/",
    element: <MainLoyout />,
    children: [
      { path: "/travel-agensy/", element: <Home /> },
      { path: "/travel-agensy/all-ads", element: <AllAds /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
