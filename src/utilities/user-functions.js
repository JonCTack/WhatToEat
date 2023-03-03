import axios from 'axios'

export const signUp = async (formData) => {
    let serverResponse = await axios({
        method: 'POST',
        url: '/users/signup',
        data: formData
    })
    return serverResponse
}

export const logIn = async (formData) => {
    let serverResponse = await axios({
        method: 'PUT',
        url: '/users/login',
        data: formData
    })
    return serverResponse
}
export const logOut = async () => {
    let serverResponse = await axios({
        method: 'POST',
        url: '/users/logout',
    })
    return serverResponse
}

export const getUserFromSession = async () => {
    let session = await axios("/session-info")
        if(session.data.session.passport.user){
        let user = session.data.session.passport.user;
        return user
    } else {
        return false
    }
}

export const addFavorite = async (recipe) => {
    let serverResponse = await axios({
        method: 'POST',
        url: '/users/addFav',
        data: recipe
    })
    return serverResponse
}

export const removeFavorite = async (recipe) => {
    let serverResponse = await axios({
        method: 'DELETE',
        url: '/users/delFav',
        data: recipe
    })
    return serverResponse
}