import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Recipe from './pages/recipe';
import Search from './pages/search';
import { getUserFromSession } from './utilities/user-functions';
import { AppContext } from './contexts/app_context';
import { useContext, useEffect, useState } from 'react';
import Auth from './pages/auth';
import Favorites from './pages/favorites';
import Nav from './components/Nav';

function App() {
  let { user, setUser } = useContext(AppContext)
  const [callMade, setCallMade] = useState(false)

  useEffect( ()=> {
    const getSession = async () => {
      let userResponse = await getUserFromSession()
      setUser(userResponse._doc)
    } 
      getSession()
      //this prevents the log in page being shown to a logged in user
    setTimeout(() => {
      setCallMade(true)
    }, 100)},[])
  
  if(callMade){
  return ( 
    <div className="App">
  {user? 
    <div className="loggedApp">
    <Nav/>
    <Routes>
      <Route path='/recipe/:recipeId' element={<Recipe/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/*' element={<Search/>}/>
    </Routes>
  </div>
  :
  <Auth/>
  }
  </div>
  )}
}
export default App;
