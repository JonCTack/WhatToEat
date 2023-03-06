import React, { Component } from 'react'
import {signUp} from "../../utilities/user-functions.js"

export default class SignUpForm extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
     };


     handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
          error: ''
        });
      };

      handleSubmit = async (event) => {
        event.preventDefault();
        let data = {...this.state};
        delete data.confirm;
        delete data.error;
        let response = await signUp(data);
        this.props.setIsSignup(false)
      }
    
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div className="form-container">
            <div >
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}
