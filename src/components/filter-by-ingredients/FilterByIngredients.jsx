import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import style from "./filterByIngredients.module.scss";
import Meal from './../meal/Meal';


export default function FilterByIngredients() {
  const { mealName } = useParams();

  const getMealByIngredients = async () => {
    return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`
    );
  };

  const { data: meals, isLoading } = useQuery({
    queryKey: ["meals-by-ingredients", mealName],
    queryFn: getMealByIngredients,
    select: (meals) => meals.data.meals,
  });

  console.log(meals, "all meals");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={style.filterByIngredients}>
          <h1>All meals containing {mealName}</h1>
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
