import CustomImage from "./CustomImage";
import React from 'react'

function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
            <CustomImage imgSrc="/img/foods/cooking.jpg" pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}

export default RecipeCard