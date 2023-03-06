import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../contexts/app_context'
import { addFavorite, removeFavorite } from '../../utilities/user-functions'
import './index.css'

const Recipe = () => {

    const { recipeId } = useParams();
    const { user, setUser } = useContext(AppContext);
    const [recipeInfo, setRecipeInfo] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(()=> {
        const i = user.favorites.findIndex(e => e.recipe.id == recipeId)
        if (i>-1){
            setRecipeInfo(user.favorites[i].recipe);
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
            let newUser = await addFavorite(recipeInfo)
            setIsFavorite(true)
            console.log(newUser)
            setUser(newUser.data)
        }else {
            let newUser = await removeFavorite(recipeInfo)
            setIsFavorite(false)
            setUser(newUser.data)
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
        <div className="recipeScreen pageSpace">
            <h1 className='recipeTitle'>{recipe.title}</h1>
            <div className="imgCard">
                <img src={recipe.image} alt={recipe.title}/>
                <button onClick={() => handleFavorite()}>{isFavorite? "Unfavorite" : "Favorite" }</button>
            </div>
            <div className='ingCard'>
                <ul>
                {ingredientJSX}
                </ul>
                <div className="recipeInstruct" dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
                <div className="recipeSummary" dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
            </div>
        </div>
        )
    }

  return (
    recipeJSX(recipeInfo)
  )
}

export default Recipe