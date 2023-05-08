import React from "react"
import { useNavigate } from "react-router-dom"

const MealItem = ({ data }) => {
  let navigate = useNavigate()
  
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                className="card"
                key={item.idMeal}
                onClick={() => navigate(`/${item.idMeal}`)}
              >
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
                <p>Click to view Instructions</p>
              </div>
            )
          })}
    </>
  )
}
export default MealItem
