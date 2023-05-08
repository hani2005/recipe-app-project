import React from "react"
import banner from "../assets/recipe-banner.png"
import { HiArrowSmRight } from "react-icons/hi"

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <h1>Let's Start Cooking</h1>
        <h2>With Popular Recipes</h2>
        <span>
          Want to learn how to cook but confused how to start?
          <br /> No need to worry again
        </span>
        <a href="#recipes" className="header-btn">
          <button>Explore Recipes</button>
          <HiArrowSmRight className="header-icon" />
        </a>
      </div>
      <div className="header-img">
        <div className="header-recipe">
          <div className="header-recipe-img">
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>Fruit sandwich</span>
          </div>
          <p>Bread, Strawberry, Jam, Blueberry, Orange, Rasberry</p>
        </div>
        <img className="banner-img" src={banner} alt="" />
        <div className="header-recipe2">
          <div className="header-recipe-img">
            <img
              src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>Fruit salad</span>
          </div>
          <p>Orange, Strawberry, Cerry, Blueberry, Kiwi</p>
        </div>
      </div>
    </div>
  )
}

export default Header
