import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

const Recipe = () => {

    let { recipeId } = useParams()
    let [recipeInfo, setRecipeInfo] = useState({})

    useEffect(()=> {
        let loadRecipe = async () => {
            let response = await axios(`/get_instructions/${recipeId}`)
            setRecipeInfo(response.data)
            console.log(response)
        }
        loadRecipe()
    },[])

    let recipeJSX = (recipe) => {
        let ingredientJSX
        recipe.extendedIngredients ? ingredientJSX = recipe.extendedIngredients.map(ing => {
            return(
                <li className='ingredientList' key={ing.id}>
                    {ing.original}
                </li>
            )
        }) :
        ingredientJSX = null
        return (
        <div className="recipeScreen">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title}/>
            {ingredientJSX}
            <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
            <div className="recipeSummary" dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
        </div>
        )
    }

  return (
    recipeJSX(recipeInfo)
  )
}

export default Recipe