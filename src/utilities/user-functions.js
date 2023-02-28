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

export const getUserFromSession = async () => {
    let session = await axios("/session-info")
        if(session.data.session.passport.user){
        let user = session.data.session.passport.user;
        return user
    } else {
        return false
    }
}