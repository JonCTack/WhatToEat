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
      let unusedIng = null
      let neededIng = null
      let unusedArray = rec.unusedIngredients
      let neededArray = rec.missedIngredients
      if(unusedArray.length > 0){
        let unusedIngJSX = unusedArray.map(ing => {
          return <li key={ing.id}>{ing.originalName}</li>})
        unusedIng = <div>
          <h5 className='unusedList'>this recipe does not include:</h5>
          <ul className='unusedList'>{unusedIngJSX}</ul>
          </div>     
      }
      console.log(neededArray)
      if(neededArray.length > 0){
        let neededIngJSX = neededArray.map(ing => {
          return <li key={ing.id}>{ing.originalName}</li>})
        neededIng = <div>
          <h5 className='unusedList'>this does have additional ingredients:</h5>
          <ul className='unusedList'>{neededIngJSX}</ul>
          </div>     
      }

        return (<div key={rec.id} id={rec.id} className="recipeBox">
            <h1>{rec.title}</h1>
            <img src={rec.image} alt='' onClick={() => handleClick(recipeId)}/>
             {unusedIng}
             {neededIng}
            </div>)
    }) 
  return (
    <div className='recipeList'>
        {recipesJSX.length > 0 ? 
        recipesJSX 
        : 
        <>
        <p>Submit ingredients one item at a time in the above bar. They'll appear in the list on the left.</p>
        <p>Click on the images after the search to get more info on the recipe and favorite them to have fast access in the future.</p>
        </>}
    </div>
  )
}

export default RecipeList