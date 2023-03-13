import React from "react"
import "./index.css"
import Meal from "./Components/Meal"
import Recipe from "./Components/Recipe"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
    </div>
  )
}

export default App
