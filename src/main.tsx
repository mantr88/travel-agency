import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./styles/variables.css";
import Home from "./pages/Home";
import AllAds from "./pages/AllAds.tsx";

export const router = createBrowserRouter([
  {
    path: "/travel-agensy/",
    element: <App />,
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
