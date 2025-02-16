import React from "react";
import style from "./home.module.scss";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Meal from "./../meal/Meal";
import Loader from "./../loader/Loader";

export default function Home() {
  const allCategories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];
  const { category } = useParams();
  const navigate = useNavigate();
  console.log(category);

  const getMeals = async () => {
    const url = category
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      : `https://themealdb.com/api/json/v1/1/search.php?s=`;
    return await axios.get(url);
  };

  const { data: meals, isLoading } = useQuery({
    queryKey: category ? ["all-meals", category] : ["all-meals"],
    queryFn: getMeals,
    select: (meals) => meals.data.meals,
  });

  console.log(meals, "all meals");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={`${style.home}`}>
          <h1>Learn, Cook, Eat Your Food</h1>
          <div className="sm:hidden mt-8">
            <select
              value={category}
              onChange={(e) =>
                navigate(
                  e.target.value === "All" ? "/" : `/category/${e.target.value}`
                )
              }
            >
              <option value="All">All</option>
              {allCategories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <ul className="hidden mt-8 sm:flex flex-wrap gap-4">
            {/* "/" ==> resets the route */}
            <li>
              <NavLink className={"link"} to={"/"}>
                All
              </NavLink>
            </li>
            {allCategories.map((cat, idx) => (
              <li key={idx}>
                <NavLink className={"link"} to={`/category/${cat}`}>
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>
          {meals ? (
            <div className={`flex flex-wrap mt-24 ${style.meals}`}>
              {meals.map((meal) => (
                <Meal meal={meal} key={meal.idMeal} />
              ))}
            </div>
          ) : (
            <p className={style.notFound}>No current meals match your result</p>
          )}
        </section>
      )}
    </>
  );
}
