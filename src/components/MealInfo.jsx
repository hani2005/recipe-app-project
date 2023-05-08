import React from "react"
import { useState, useEffect } from "react"
import MealItem from "./MealItem"
import CategoryFilter from "./CategoryFilter"
import Navbar from "./Navbar"
import Header from "./Header"
import { GoSearch } from "react-icons/go"

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

  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }

  const setCategory = (category) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  }

  return (
    <div className="">
      <Navbar />
      <Header />
      <h2 className="categories-title">
        Popular <strong>Categories</strong>
      </h2>
      <div className="categories-container">
        <CategoryFilter categoryIndex={(category) => setCategory(category)} />
      </div>
      <div className="search-container" id="recipes">
        <h2 className="featured">
          Featured <strong>Recipes</strong>
        </h2>
        <div className="search-bar">
          <GoSearch className="search-icon" />
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchRecipe}
            placeholder="Search for recipes..."
          />
        </div>
      </div>
      <div className="card-container">
        {show ? <MealItem data={item} /> : "Not Found"}
      </div>
    </div>
  )
}
export default Meal
