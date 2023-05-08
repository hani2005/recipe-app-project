import React from "react"
import "./index.css"
import MealInfo from "./components/MealInfo"
import RecipeInfo from "./components/RecipeInfo"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<MealInfo />} />
        <Route exact path="/:recipeId" element={<RecipeInfo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
