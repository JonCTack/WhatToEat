import React, { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'
import './index.css'

const IngredientInput = () => {

    const {ingredients, setIngredients} = useContext(AppContext)
    

    const removeButton = (index) => {
        ingredients.splice(index, 1)
        setIngredients([...ingredients])
    }


let ingredientsJSX = ingredients.map((el, i) => {
  //the ingredients array is a user input of just ingredients 
    return (<div key={JSON.stringify(el)} className='ingredientDiv'>
                {el.toLowerCase()}
                <button className='removeIngredient' onClick={(el) => removeButton(i)}>-</button>
            </div>)
})

  return (
    <div className="ingredientInput">
        {ingredientsJSX}
    </div>
  )
}

export default IngredientInput