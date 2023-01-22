import React from 'react'
import './styles.css'

const SignUpForm = () => {
  return (
    <div class="sign-up-form">
      <div class="fd-content-widget fd-login-widget white-bg col-12">
        <header class="text-center">
          <div class="square"></div>
          <h1>Fisherman Diary</h1>
        </header>
        <form action="index.html" class="fd-login-form">
          <div class="form-group">                  
            <label for="inputFirstName">First Name</label>
            <input type="text" class="form-control" id="inputFirstName" placeholder="David" />                  
          </div>
          <div class="form-group">                  
              <label for="inputLastName">Last Name</label>
              <input type="text" class="form-control" id="inputLastName" placeholder="Johnson" />                  
          </div>
          <div class="form-group">                  
              <label for="inputUsername">Username</label>
              <input type="text" class="form-control" id="inputUsername" placeholder="Example-user" />                  
          </div>
          <div class="form-group">                  
              <label for="inputEmail">Email</label>
              <input type="email" class="form-control" id="inputEmail" placeholder="example@mail.com" />                  
          </div>
          <div class="form-group">                  
              <label for="inputPassword">Password</label>
              <input type="password" class="form-control" id="inputPassword" />
          </div>
          <div class="form-group">                  
              <label for="inputConfirmPassword">Confirm Password</label>
              <input type="password" class="form-control" id="inputConfirmPassword" />
          </div>
          <div class="form-group">
            <button type="submit" class="fd-blue-button width-100">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm