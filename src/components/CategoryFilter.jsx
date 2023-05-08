import React from "react"

const CategoryFilter = ({ categoryIndex }) => {
  const categories = [
    {
      id: 1,
      img: "https://www.themealdb.com/images/category/beef.png",
      name: "Beef"
    },
    {
      id: 2,
      img: "https://www.themealdb.com/images/category/chicken.png",
      name: "Chicken"
    },
    {
      id: 3,
      img: "https://www.themealdb.com/images/category/dessert.png",
      name: "Dessert"
    },
    {
      id: 4,
      img: "https://www.themealdb.com/images/category/lamb.png",
      name: "Lamb"
    },
    {
      id: 5,
      img: "https://www.themealdb.com/images/category/miscellaneous.png",
      name: "Miscellaneous"
    },
    {
      id: 6,
      img: "https://www.themealdb.com/images/category/pasta.png",
      name: "Pasta"
    },
    {
      id: 7,
      img: "https://www.themealdb.com/images/category/pork.png",
      name: "Pork"
    },
    {
      id: 8,
      img: "https://www.themealdb.com/images/category/seafood.png",
      name: "Seafood"
    },
    {
      id: 9,
      img: "https://www.themealdb.com/images/category/side.png",
      name: "Side"
    },
    {
      id: 10,
      img: "https://www.themealdb.com/images/category/starter.png",
      name: "Starter"
    },
    {
      id: 11,
      img: "https://www.themealdb.com/images/category/vegan.png",
      name: "Vegan"
    },
    {
      id: 12,
      img: "https://www.themealdb.com/images/category/vegetarian.png",
      name: "Vegetarian"
    },
    {
      id: 13,
      img: "https://www.themealdb.com/images/category/breakfast.png",
      name: "Breakfast"
    },
    {
      id: 14,
      img: "https://www.themealdb.com/images/category/goat.png",
      name: "Goat"
    }
  ]

  return (
    <>
      {categories.map((category) => {
        return (
          <div
            className="categories"
            key={category.id}
            onClick={() => categoryIndex(category.name)}
          >
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        )
      })}
    </>
  )
}

export default CategoryFilter
