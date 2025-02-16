import { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import MealDetails from "./components/meal-details/MealDetails";
import NotFound from "./components/not-found/NotFound";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const query = new QueryClient();

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
        path: "/category/:category",
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
  return (
    <>
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />;
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
