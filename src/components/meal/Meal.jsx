import React from "react";
import { Link } from "react-router-dom";
import style from "./meal.module.scss";

export default function Meal({ meal }) {
  return (
    <div className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 ${style.meal}`}>
      <div >
        <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
        <h2 className="truncate" >{meal.strMeal.split(" ").slice(0,2).join(" ")}</h2>
        {meal.strArea && (
          <h3>
            <i className="fa-solid fa-earth-americas"></i>
            {meal.strArea}
          </h3>
        )}
        <button>
          <Link to={`/mealdetails/${meal.idMeal}`}>View Recipe</Link>
        </button>
      </div>
    </div>
  );
}
