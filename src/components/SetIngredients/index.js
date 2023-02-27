import React, { useContext, useState } from 'react'
import { AppContext } from '../../contexts/app_context';

const Search = () => {


    const {ingredients, setIngredients} = useContext(AppContext)
    const [ingredientString, setIngredientString] = useState('');

    const handleChange = (e) => {
        setIngredientString(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!ingredients.includes(ingredientString) && ingredientString!==''){
      setIngredients([...ingredients, ingredientString])}
      setIngredientString('')
  };

  return (
    <section>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input
            type='text'
            name='ingredients'
            placeholder='Ingredients to use'
            value={ingredientString}
            onChange={(event) => handleChange(event)}
            />
            <button onClick={(event) => handleSubmit(event)}>Submit Ingredient</button>
        </form>
    </section>
  )
}

export default Search