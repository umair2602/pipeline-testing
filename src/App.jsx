import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/views/home-page/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
