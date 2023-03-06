import React from 'react'
import IngredientInput from '../../components/IngredientInput'
import SetIngredients from '../../components/SetIngredients'
import SearchButton from '../../components/SearchButton'
import RecipeList from '../../components/RecipeList'
import './index.css'


const Search = () => {
  return (
    <div className='searchScreen pageSpace'>
        <IngredientInput/>
    <div className='searchAndSet'>
     <SetIngredients/>
     <SearchButton/>
    </div>
     <RecipeList/>
    </div>
  )
}

export default Search