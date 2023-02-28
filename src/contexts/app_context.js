import {useState, createContext} from 'react';

export const AppContext = createContext();

const AppContextProvide = (props) => {

    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [user, setUser] = useState(null);

    return (
        <AppContext.Provider value={{
            ingredients, setIngredients,
            recipes, setRecipes,
            user, setUser,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvide;