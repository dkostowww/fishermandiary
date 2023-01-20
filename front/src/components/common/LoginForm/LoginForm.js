import React from 'react'

const LoginForm = () => {
  return (
    <div class="light-gray-bg">
      <div class="fd-content-widget fd-login-widget white-bg">
        <header class="text-center">
          <div class="square"></div>
          <h1>Visual Admin</h1>
        </header>
        <form action="index.html" class="fd-login-form">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user fa-fw"></i></div>	        		
                  <input type="text" class="form-control" placeholder="js@dashboard.com" />           
              </div>	
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-key fa-fw"></i></div>	        		
                  <input type="password" class="form-control" placeholder="******" />           
              </div>	
          </div>	          	
            <div class="form-group">
          <div class="checkbox squaredTwo">
              <input type="checkbox" id="c1" name="cc" />
              <label for="c1">
                <span></span>Remember me
              </label>
            </div>				    
          </div>
          <div class="form-group">
            <button type="submit" class="fd-blue-button width-100">Login</button>
          </div>
        </form>
        </div>
        <div class="fd-content-widget fd-login-widget fd-register-widget white-bg">
          <p>Not a registered user yet? <strong><a href="/" class="blue-text">Sign up now!</a></strong></p>
      </div>
    </div>
  )
}

export default LoginForm