import { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import MealDetails from "./components/meal-details/MealDetails";
import NotFound from "./components/not-found/NotFound";
import './App.scss'

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "mealdetails",
        element: <MealDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
