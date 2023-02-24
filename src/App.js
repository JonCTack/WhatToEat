import './App.css';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import SearchButton from './components/SearchButton';
import SetIngredients from './components/SetIngredients';

function App() {
  return (
    <div className="App">
      <IngredientInput/>
      <div className='searchAndSet'>
      <SetIngredients/>
      <SearchButton/>
      </div>
      <RecipeList/>
    </div>
  );
}

export default App;
