import axios from 'axios';
import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app_context';

const SearchButton = () => {
    const {ingredients, setRecipes} = useContext(AppContext)
 
    const searchRecipes = async () => {
        console.log(ingredients.toString())
        let response = await axios(`/get_recipe/${ingredients.toString()}`)
        console.log(response)
        setRecipes(response.data)
    }

    return (
    <button onClick={() => searchRecipes()}>Find Recipe</button>
  )
}

export default SearchButton