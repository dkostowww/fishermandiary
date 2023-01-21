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
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user fa-fw"></i></div>	        		
                <input type="text" class="form-control" placeholder="johndoe@mail.com" />           
            </div>	
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-key fa-fw"></i></div>	        		
                <input type="password" class="form-control" placeholder="******" />           
            </div>	
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