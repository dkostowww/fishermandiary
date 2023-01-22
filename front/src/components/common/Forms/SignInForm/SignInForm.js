import React from 'react'
import './styles.css'

const SignInForm = () => {
  return (
    <div className="sign-in-form">
      <div className="fd-content-widget fd-login-widget white-bg col-12">
        <header className="text-center">
          <div className="square"></div>
          <h1>Fisherman Diary</h1>
        </header>
        <form action="index.html" className="fd-login-form">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-user fa-fw"></i></div>	        		
              <input type="text" className="form-control" placeholder="johndoe@mail.com" />           
            </div>	
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-key fa-fw"></i></div>	        		
              <input type="password" className="form-control" placeholder="******" />           
            </div>	
          </div>	          	
          <div className="form-group">
            <div className="checkbox squaredTwo">
              <input type="checkbox" id="c1" name="cc" />
              <label for="c1">
                <span></span>Remember me
              </label>
            </div>				    
          </div>
          <div className="form-group">
            <button type="submit" className="fd-blue-button width-100">Sign In</button>
          </div>
        </form>
      </div>
      <div className="fd-content-widget fd-login-widget fd-register-widget white-bg">
        <p>Not a registered user yet? <strong><a href="/" className="blue-text">Sign up now!</a></strong></p>
      </div>
    </div>
  )
}

export default SignInForm