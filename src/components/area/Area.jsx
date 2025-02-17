import React from "react";

export default function Area() {
  const getIngredients = async () => {
    return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
  };

  const { data: ingredients, isLoading } = useQuery({
    queryKey: ["ingredients"],
    queryFn: getIngredients,
    select: (ingredients) => ingredients.data.meals,
  });

  console.log(ingredients, "all ingredients");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1>All Ingredients</h1>
          {ingredients && (
            <div className={`flex flex-wrap mt-24 ${style.ingredients}`}>
              {ingredients.map((ingredient) => (
                <div
                  key={ingredient.idIngredient}
                  className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 ${style.ingredient}`}
                >
                  <Link to={`/ingredients/${ingredient.strIngredient}`}>
                    <div>
                      <img
                        src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
                        alt={ingredient.strIngredient}
                      />
                      <h2>{ingredient.strIngredient}</h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
