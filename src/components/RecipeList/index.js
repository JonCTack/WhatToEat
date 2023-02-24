import React, { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'

const RecipeList = () => {

    const {recipes} = useContext(AppContext)

    let recipesJSX = recipes.map(rec => {
        return (<div key={rec.id} id={rec.id}>
            <h1>{rec.title}</h1>
            <img src={rec.image} alt=''/>
            </div>)
    }) 

  return (
    <div className='recipeList'>
        {recipesJSX}
    </div>
  )
}

export default RecipeList