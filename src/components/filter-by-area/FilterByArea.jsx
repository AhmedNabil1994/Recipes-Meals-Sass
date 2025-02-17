import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import style from "./filterByArea.module.scss";
import Meal from "./../meal/Meal";

export default function FilterByArea() {
  const { areaName } = useParams();

  const getMealByArea = async () => {
    return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
    );
  };

  const { data: meals, isLoading } = useQuery({
    queryKey: ["meals-by-area", areaName],
    queryFn: getMealByArea,
    select: (meals) => meals.data.meals,
  });

  console.log(meals, "all meals in area");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={style.filterByArea}>
          <h1>All meals in {areaName}</h1>
          {meals && (
            <div className={`flex flex-wrap mt-24 ${style.meals}`}>
              {meals.map((meal) => (
                <Meal meal={meal} key={meal.idMeal} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
