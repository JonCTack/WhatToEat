import React, {useState, useEffect, useContext} from 'react'
import {logIn, getUserFromSession} from '../../utilities/user-functions'
import { AppContext } from '../../contexts/app_context'


const Login = () => {

    let {setUser} = useContext(AppContext)

    const [formState, setFromState] = useState({email: '', password: ''})
    const [error, setError] = useState("")
    const [disabled, setDisabled] = useState(true)
    
    useEffect(() => {
        setDisabled(formState.email && formState.password ? false :true)
    }, [formState])

    const handleChange = (event) => {
        let propertyName = event.target.name;
        setFromState({
            ...formState,
            [propertyName]: event.target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await logIn(formState)

        let user = await getUserFromSession()
        setUser(user)
        }
    
    return (
    <div className="form-container">
            <div >
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={formState.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={formState.password} onChange={handleChange} required />
                <button type="submit" disabled={disabled}>LOG IN</button>
              </form>
            </div>
        <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}

export default Login