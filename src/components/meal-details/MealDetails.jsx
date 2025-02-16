import React from "react";
import style from "./mealDetails.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "./../loader/Loader";
import NotFound from "../not-found/NotFound";

export default function MealDetails() {
  const { id } = useParams();

  const getMealDetails = async () => {
    return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  };

  const { data: meal, isLoading } = useQuery({
    queryKey: ["meal-details", id],
    queryFn: getMealDetails,
    select: (meal) => meal.data.meals[0],
  });

  console.log(meal, "meal details");

  return isLoading ? (
    <Loader />
  ) : meal === "I" ? (
    <NotFound />
  ) : (
    meal && (
      <section
        className={`flex flex-wrap flex-col lg:flex-row ${style.details} -mx-2`}
      >
        <div className={`w-full lg:w-2/3 px-2 ${style.left}`}>
          <h1 className="text-center sm:text-start text-4xl sm:text-5xl">
            {meal.strMeal}
          </h1>
          <div className="flex flex-wrap -mx-2 gap-y-10">
            <div className="w-full lg:w-1/2 px-2">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <ul>
                <li>
                  <Link target="blank" to={meal.strYoutube}>
                    <i className="fa-brands fa-youtube"></i>youtube
                  </Link>
                </li>
                <li>
                  <Link target="blank" to={meal.strSource}>
                    <i className="fa-solid fa-earth-americas"></i>source
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-2">
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        </div>
        <div className={`w-full lg:w-1/3 px-2 ${style.right}`}>
          <div>
            <h2>Ingredients</h2>
            <ul>
              {/* list all available ingredients and measures*/}
              {Array.from({ length: 20 }, (_, idx) => {
                const ingredient = meal[`strIngredient${idx + 1}`];
                const measure = meal[`strMeasure${idx + 1}`];
                if (ingredient && measure !== "") {
                  return (
                    <li key={idx}>
                      <span>{ingredient}</span>
                      <span>{measure}</span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  );
}
