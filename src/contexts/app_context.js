import {useState, createContext} from 'react';

export const AppContext = createContext();

const AppContextProvide = (props) => {

    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([])

    return (
        <AppContext.Provider value={{
            ingredients, setIngredients,
            recipes, setRecipes,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvide;