import { lazy, Suspense } from "react";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
const Home = lazy(() => import("./components/home/Home"));

// import Home from "./components/home/Home";
import MealDetails from "./components/meal-details/MealDetails";
const Ingredients = lazy(() => import("./components/ingredients/Ingredients"));

// import Ingredients from "./components/ingredients/Ingredients";
import NotFound from "./components/not-found/NotFound";
import Loader from "./components/loader/Loader";
const FilterByIngredients = lazy(() =>
  import("./components/filter-by-ingredients/FilterByIngredients")
);

// import FilterByIngredients from "./components/filter-by-ingredients/FilterByIngredients";
import Area from "./components/area/Area";

const query = new QueryClient();

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "category/:category",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "mealdetails/:id",
        element: <MealDetails />,
      },
      {
        path: "ingredients",
        element: (
          <Suspense fallback={<Loader />}>
            <Ingredients />
          </Suspense>
        ),
      },
      {
        path: "area",
        element: <Area />,
      },
      {
        path: "ingredients/:mealName",
        element: (
          <Suspense fallback={<Loader />}>
            <FilterByIngredients />,
          </Suspense>
        ),
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
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
