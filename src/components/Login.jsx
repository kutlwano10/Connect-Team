import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Sign In</h1>
        <form action="">
            <label>Username</label>
            <input className='border' type="text" placeholder='@username' />
            <label>Password</label>
            <input className='border' type="password" placeholder='Password'/>

        </form>
      
    </div>
  )
}

export default Login
