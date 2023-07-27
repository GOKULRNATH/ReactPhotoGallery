import React from 'react'
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>
      <div className='main_div_login d-flex justify-content-center align-items-center'>
        <form >
            <label className='label_loginMain'>Login</label>
            <div className="form_main">
                <div>
                    <input type="text" className="input_box_log" name="email"  placeholder='Email' />
                </div>
                <div>
                    <input type="Password" className="input_box_log" name="password"  placeholder='Password' />
                </div>
                <div className="submit_log d-flex justify-content-center">
                  <a href='/'>
                  <Link to="/" className='text-white'><input type="Submit" value="Login" className='submit_login  text-white' /></Link>
                  </a>
                </div>
            </div>
            <Link to="/" className=''>i have no account ?</Link>
        </form>
       
      
    <label className='fake_messege text-white p-1' >Apologies, but the page is currently undergoing maintenance.
    <p className='d-flex justify-content-center align-items-center'>gokulrnath197@gmail.com | 7902256328</p>
    <p className='d-flex justify-content-center align-items-center'>Thank You</p></label>
    </div>

    </div>
  )
}

export default Login
