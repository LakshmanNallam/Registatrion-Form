import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    formSubmitted: false,
    passwordEmpty: false,
    usernameEmpty: false,
  }

  UsernameChanged = event =>
    event.target.value.length === 0
      ? this.setState({usernameEmpty: true})
      : this.setState({username: event.target.value, usernameEmpty: false})

  PasswordChanged = event =>
    event.target.value.length === 0
      ? this.setState({passwordEmpty: true})
      : this.setState({password: event.target.value, passwordEmpty: false})

  FormSubmitted = event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log(username, password)
    if (username.length === 0 && password.length === 0) {
      this.setState({passwordEmpty: true, usernameEmpty: true})
    } else if (username.length === 0) {
      this.setState({usernameEmpty: true, passwordEmpty: false})
    } else if (password.length === 0) {
      this.setState({passwordEmpty: true, usernameEmpty: false})
    } else {
      this.setState({
        formSubmitted: true,
        passwordEmpty: false,
        usernameEmpty: false,
      })
    }
  }

  anotherResponseBtnClicked = () => {
    this.setState({formSubmitted: false})
  }

  render() {
    const {
      username,
      password,
      formSubmitted,
      passwordEmpty,
      usernameEmpty,
    } = this.state
    return (
      <div className="MainDiv">
        <h1>Registration</h1>
        {formSubmitted ? (
          <div className="onSAu">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <div>
              <button type="button" onClick={this.anotherResponseBtnClicked}>
                Submit another response
              </button>
            </div>
          </div>
        ) : (
          <form className="FormCon" onSubmit={this.FormSubmitted}>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" onBlur={this.UsernameChanged} />
            {usernameEmpty ? <p>Required</p> : null}
            <label htmlFor="secondname">LAST NAME</label>
            <input id="secondname" onBlur={this.PasswordChanged} />
            {passwordEmpty ? <p>Required</p> : null}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
