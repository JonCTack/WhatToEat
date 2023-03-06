import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context'
import './index.css'


const Favorites = () => {

    const { user } = useContext(AppContext);
    const navigate = useNavigate()


    const handleClick = (Id) => {
        navigate(`/recipe/${Id}`)
      }

    let favJSX 
    
    if (user._doc.favorites) {
        favJSX = user._doc.favorites.map(el => {
        return(<div key={el.recipe.id} className='favElement'>
            <h4>{el.recipe.title}</h4>
            <img className="favImg" src={el.recipe.image} onClick={() => handleClick(el.recipe.id)}/>
        </div>)
      })
      console.log(favJSX)
      console.log(user._doc.favorites)
    } else {
      return (<div>you have yet to set any favorites</div>)
    }
  return (<div>
    <h1>Favorites</h1>
    <div className='favPage'>
        {favJSX}
    </div>
    </div>
  )
}

export default Favorites