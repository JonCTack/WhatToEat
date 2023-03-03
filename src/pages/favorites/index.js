import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context'

const Favorites = () => {

    const { user } = useContext(AppContext);
    const navigate = useNavigate()


    const handleClick = (Id) => {
        navigate(`/recipe/${Id}`)
      }

    let favJSX 
    
    if (user._doc.favorites) {
        favJSX = user._doc.favorites.map(el => {
        return (<div key={el.recipe.id}>
            <h4>{el.recipe.title}</h4>
            <img className="favImg" src={el.recipe.image} onClick={() => handleClick(el.recipe.id)}/>
        </div>)
    })}
  return (
    <div>
        <h1>Favorites</h1>
        {favJSX}
    </div>
  )
}

export default Favorites