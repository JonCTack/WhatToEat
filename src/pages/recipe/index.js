import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../contexts/app_context'
import { addFavorite, removeFavorite } from '../../utilities/user-functions'
import './index.css'

const Recipe = () => {

    const { recipeId } = useParams();
    const { user } = useContext(AppContext);
    const [recipeInfo, setRecipeInfo] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(()=> {
        const i = user._doc.favorites.findIndex(e => e.recipe.id == recipeId)
        if (i>-1){
            setRecipeInfo(user._doc.favorites[i].recipe);
            console.log("found favorite :", recipeInfo);
            setIsFavorite(true);
        } else {
        const loadRecipe = async () => {
            let response = await axios(`/get_instructions/${recipeId}`)
            setRecipeInfo(response.data)
            console.log(response)
        }
        loadRecipe()
        }
    },[])

    const handleFavorite = async () => {
        if(isFavorite === false){
            addFavorite(recipeInfo)
            setIsFavorite(true)
        }else {
            removeFavorite(recipeInfo)
            setIsFavorite(false)
        }
    }

    const recipeJSX = (recipe) => {
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
            <button onClick={() => handleFavorite()}>{isFavorite? "Unfavorite" : "Favorite" }</button>
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