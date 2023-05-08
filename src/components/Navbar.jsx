import React from "react"

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-texts">
        <h2>Food</h2>
        <h3>Mood</h3>
      </div>
      <div className="nav-recipe">
        <a href="#recipes">Recipes</a>
      </div>
    </div>
  )
}

export default Navbar
