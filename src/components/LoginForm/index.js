// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

/*import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', errorMsg: '', showSubmitError: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    this.setState({showSubmitError: false})
    const {userName, password} = this.state

    // Validation errors required by tests
    if (userName === '') {
      this.setState({showSubmitError: true, errorMsg: 'Username is required'})
      return
    }

    if (password === '') {
      this.setState({showSubmitError: true, errorMsg: 'Password is required'})
      return
    }

    // FIX: API expects "username" not "userName"
    const userDetails = {username: userName, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    // FIX: Missing showSubmitError
    const {userName, password, errorMsg, showSubmitError} = this.state

    return (
      <div className="LoginForm-page-container">
        <div className="LoginForm-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="LoginForm-image"
            alt="website login"
          />
        </div>
        <div className="LoginForm-page-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <form onSubmit={this.submitForm}>
            <div className="input-container">
              <label className="lable" htmlFor="userName">
                USERNAME
              </label>
              <input
                type="text"
                className="input"
                id="userName"
                value={userName}
                onChange={this.onChangeUserName}
                placeholder="Username"
              />

              <label className="lable" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                className="input"
                id="password"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />

              <button type="submit" className="Login-form-button">
                Login
              </button>

              {showSubmitError && <p className="errorMsg">*{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm*/

/*import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', errorMsg: '', showSubmitError: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state

    if (userName === '') {
      this.setState({errorMsg: 'Username is required'})
      return
    }

    if (password === '') {
      this.setState({errorMsg: 'password is required'})
      return
    }

    const userDetails = {userName, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password, errorMsg} = this.state

    return (
      <>
        <div className="LoginForm-page-container">
          <div className="LoginForm-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="LoginForm-image"
              alt="website login"
            />
          </div>
          <div className="LoginForm-page-card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo"
              alt="website logo"
            />
            <form onSubmit={this.submitForm}>
              <div className="input-container">
                <label className="lable" htmlFor="userName">
                  USERNAME
                </label>
                <input
                  type="text"
                  className="input"
                  id="userName"
                  value={userName}
                  onChange={this.onChangeUserName}
                  placeholder="Username"
                />

                <label className="lable" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  value={password}
                  onChange={this.onChangePassword}
                  placeholder="Password"
                />
                <button type="submit" className="Login-form-button">
                  Login
                </button>

                {showSubmitError && <p className="errorMsg">{errorMsg}</p>}
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default LoginForm*/
