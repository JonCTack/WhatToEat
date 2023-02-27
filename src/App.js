import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Recipe from './pages/recipe';
import Search from './pages/search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/recipe/:recipeId' element={<Recipe/>}/>
        <Route path='/*' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
