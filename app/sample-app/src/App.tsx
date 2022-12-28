import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogLayout from "./pages/BlogLayout";

const router = createBrowserRouter([{}]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
