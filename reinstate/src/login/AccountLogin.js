import React from 'react';
import { useState } from 'react';

export function AccountLogin(props) {
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loginError, setLoginError] = useState(false);
  const {ChingIndex} = props

  async function authentication(username, password) {
    const loginRequest = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    loginRequest.status !== 200
      ? setLoginError(true)
      : console.log('התחברת בהצלחה!');
    console.log(loginRequest.status);
    console.log(await loginRequest.json());
  }

  function changInputValue(ev, setState) {
    setState(ev.target.value);
  }
  return (
    <>
      <h3>כניסה לחשבונך</h3>
      <form>
        <div>
          <input
            id="username"
            // autoFocus
            placeholder="שם משתמש"
            value={userNameValue}
            onFocus={(e) => {
              e.currentTarget.select();
              setLoginError(false);
            }}
            onChange={(ev) => changInputValue(ev, setUserNameValue)}
            style={inputStyle}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="סיסמה"
            onFocus={(e) => e.currentTarget.select()}
            onChange={(ev) => changInputValue(ev, setPasswordValue)}
            style={inputStyle}
            value={passwordValue}
          />
        </div>
        <div className="loginError">
          {loginError && <span className="error">אחד הנתונים שהזנת שגוי </span>}
        </div>
        <div className="center">
          <button
            className="to_coonect"
            type="button"
            onClick={() => {
              authentication(userNameValue, passwordValue);
            }}
          >
            כניסה
          </button>
        </div>
      </form>
      <div style={{ paddingTop: '30px', display: 'flex' }}>
        <span>פעם ראשונה כאן? - </span>
        <button className="create_account" style={createAccountStyle} onClick={ChingIndex}>
          צור חשבון
        </button>
      </div>
    </>
  );
}

const inputStyle = {
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  borderBottom: '1px solid blue',
  marginBottom: '30px',
  width: '85%',
};
const createAccountStyle = {
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  borderBottom: '1px solid blue',
  background: 'none',
};
