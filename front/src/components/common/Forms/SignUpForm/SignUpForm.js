import React from 'react'
import './styles.css'

const SignUpForm = () => {
  return (
    <div className="sign-up-form">
      <div className="fd-content-widget fd-login-widget white-bg col-12">
        <header className="text-center">
          <div className="square"></div>
          <h1>Fisherman Diary</h1>
        </header>
        <form action="index.html" className="fd-login-form">
          <div className="form-group">                  
            <label htmlFor="inputFirstName">First Name</label>
            <input type="text" className="form-control" id="inputFirstName" placeholder="David" />                  
          </div>
          <div className="form-group">                  
              <label htmlFor="inputLastName">Last Name</label>
              <input type="text" className="form-control" id="inputLastName" placeholder="Johnson" />                  
          </div>
          <div className="form-group">                  
              <label htmlFor="inputUsername">Username</label>
              <input type="text" className="form-control" id="inputUsername" placeholder="Example-user" />                  
          </div>
          <div className="form-group">                  
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="example@mail.com" />                  
          </div>
          <div className="form-group">                  
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" />
          </div>
          <div className="form-group">                  
              <label htmlFor="inputConfirmPassword">Confirm Password</label>
              <input type="password" className="form-control" id="inputConfirmPassword" />
          </div>
          <div className="form-group">
            <button type="submit" className="fd-blue-button width-100">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm