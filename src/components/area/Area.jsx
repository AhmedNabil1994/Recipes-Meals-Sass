import style from "./area.module.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "../loader/Loader";

export default function Area() {
  const getAreas = async () => {
    return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
  };

  const { data: areas, isLoading } = useQuery({
    queryKey: ["areas"],
    queryFn: getAreas,
    select: (areas) => areas.data.meals,
  });

  console.log(areas, "all areas");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={style.areasContainer}>
          <h1>All Areas</h1>
          {areas && (
            <div className={`flex flex-wrap mt-24 ${style.areas}`}>
              {areas.map((area, idx) => (
                <div
                  key={idx}
                  className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 ${style.area}`}
                >
                  {/* <Link to={`/ingredients/${ingredient.strIngredient}`}>
                    </Link> */}
                  <div>
                    <h2>{area.strArea}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
