import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/app_context'
import './index.css'

const RecipeList = () => {

    const {recipes} = useContext(AppContext)
    const navigate = useNavigate()

    const handleClick = (Id) => {
      navigate(`/recipe/${Id}`)
    }

    let recipesJSX = recipes.map((rec, i)=> {
      let recipeId = rec.id
        return (<div key={rec.id} id={rec.id} className="recipeBox">
            <h1>{rec.title}</h1>
            <img src={rec.image} alt='' onClick={() => handleClick(recipeId)}/>
            </div>)
    }) 

  return (
    <div className='recipeList'>
        {recipesJSX}
    </div>
  )
}

export default RecipeList