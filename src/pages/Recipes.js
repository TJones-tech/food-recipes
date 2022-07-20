import { useState, useEffect } from "react";
import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

 function Recipes() {
    const [recipes, setRecipes] = useState([])

   useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then(res => setRecipes(res))
   }, [])

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

export default Recipes;