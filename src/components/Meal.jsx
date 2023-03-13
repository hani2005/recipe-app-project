import React from "react"
import { useState, useEffect } from "react"
import MealItem from "./MealItem"
import ReacipeIndex from "./RecipeIndex"
import CategoryFilter from "./CategoryFilter"

const Meal = () => {
  const [search, setSearch] = useState()
  const [show, setShow] = useState(false)
  const [item, setItem] = useState("")
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  )

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals)
        setShow(true)
      })
  }, [url])

  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }
  const setCategory = (category) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  }

  return (
    <>
      <div className="main">
        <div className="header">
        <img
            src="https://github.com/prabinmagar/mealdb-food-recipe-app-with-axios/blob/master/src/assets/images/header_image.jpg?raw=true"
            alt=""
          />
        <div className="heading">
          <h1>Discover Recipes</h1>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
            placeholder="Search for recipes..."
          />
        </div>
        </div>
          <h2 className="suggested">Suggested Recipes For You</h2>
        <div className="container">
          {show ? <MealItem data={item} /> : "Not Found"}
        </div>
        <h2 className="categories-title">Categories</h2>
        <div className="categories-container">  
          <CategoryFilter categoryIndex={(category) => setCategory(category)} />
        </div>
        <div className="indexContainer">
          <ReacipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </>
  )
}
export default Meal
