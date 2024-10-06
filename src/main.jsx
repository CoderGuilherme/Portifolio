import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home/index.jsx";
import About from "./Pages/About/index.jsx";
import ProjectDetailPage from "./Pages/DetailsProject/index.jsx";
import Contato from "./Pages/Contato/index.jsx"
import ErrorPage from "./Pages/ErrorPage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <About /> },
      { path: "projetos/:id", element: <ProjectDetailPage /> },
      { path: "contato", element: <Contato/> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
