import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"

const Recipe = () => {
  const [item, setItem] = useState()
  const [readMore, setReadMore] = useState(false);
  const { recipeId } = useParams()

  useEffect(() => {
    if (recipeId !== " ") {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data.meals[0])
        })
    }
  }, [])

  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="content">
          <Link to={"/"}>
            <BsFillArrowLeftSquareFill />
          </Link>
          <div className="content-header">
            <img src={item.strMealThumb} alt="" />
            <div className="inner-content">
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea} Food</h2>
              <h3>
                <strong>Category:</strong> {item.strCategory}
              </h3>
            </div>
          </div>

          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <span>
                <strong>{item.strIngredient1}:</strong> {item.strMeasure1}
              </span>
              <span>
                <strong>{item.strIngredient2}:</strong> {item.strMeasure2}
              </span>
              <span>
                <strong>{item.strIngredient3}:</strong> {item.strMeasure3}
              </span>
              <span>
                <strong>{item.strIngredient4}:</strong> {item.strMeasure4}
              </span>
              <span>
                <strong>{item.strIngredient5}:</strong> {item.strMeasure5}
              </span>
              <span>
                <strong>{item.strIngredient6}:</strong> {item.strMeasure6}
              </span>
              <span>
                <strong>{item.strIngredient7}:</strong> {item.strMeasure7}
              </span>
              <span>
                <strong>{item.strIngredient8}:</strong> {item.strMeasure8}
              </span>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <p>
                {readMore
                  ? item.strInstructions
                  : `${item.strInstructions.substring(0, 300)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "show less" : "show more"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Recipe
