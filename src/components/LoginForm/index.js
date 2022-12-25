// eslint-disable-next-line
import {useState} from 'react'
import './index.css'

const LoginForm = () => {
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const onChangeUserName = event => {
    setUserInput(event.target.value)
  }

  const onChangePassword = event => {
    setPasswordInput(event.target.value)
  }

  const onSubmitSuccess = props => {
    const {history} = props
    history.push('/')
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    const userDetails = {userName: userInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      onSubmitSuccess()
    }
  }
  return (
    <div className="login-container">
      <div className="website-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          className="website-img"
          alt="website login"
        />
      </div>
      <div className="website-login">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />{' '}
        <br />
        <form onSubmit={onSubmitForm} className="form">
          <label htmlFor="nameId" className="Label1 input">
            USERNAME{' '}
          </label>{' '}
          <br />
          <input
            type="text"
            id="nameId"
            placeholder="Username"
            className="username input"
            value={userInput}
            onChange={onChangeUserName}
          />{' '}
          <br />
          <label htmlFor="passwordId" className="Label2 input">
            PASSWORD
          </label>{' '}
          <br />
          <input
            type="password"
            id="passwordId"
            placeholder="Password"
            className="password input"
            value={passwordInput}
            onChange={onChangePassword}
          />{' '}
          <br />
          <button type="submit" className="login-button input">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
