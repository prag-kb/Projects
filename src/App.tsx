import './App.css';
import React, { useState } from 'react'

const strengthLabels = ['weak', "medium", "strong"];
export const App = () => {

  const [strength, setStrength] = useState("");

  const getStrength = (password: string)=>{
    let strengthIndicator:number = -1
    let upper = false;
    let lower = false;
    let numbers = false;

    for (let index:number= 0; index < password.length; index++) {
      const char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true; strengthIndicator++;
      }
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true; strengthIndicator++;
      }
      if (!lower && char >= 97 && char <= 122) {
        lower = true; strengthIndicator++;
      }
    }
    setStrength(strengthLabels[strengthIndicator])
  }

  const handleChange = (e)=>{
    getStrength(e.target.value)
  }

  return (
    <div className='login-card'>
      <h2>Sign Up</h2>
      <form className='login-form' action="">
        <div className="username">
          <input
          autoComplete='off'
          spellCheck="false"
          className='control'
          type="email"
          placeholder='E-mail'
          />
          <div className="spinner"></div>
        </div>
        <input
          name='password'
          spellCheck="false"
          className='control'
          type="password"
          placeholder='Password'
          onChange={handleChange}
          />

          <div className={`bars ${strength}`}>
            <div className=""></div>
          </div>
            <div className="strength">
              {strength && <> {strength} password </>}
            </div>
            <button type='button' className='control'>
              Sign Up
            </button>
      </form>
    </div>
  )
}

export default App
