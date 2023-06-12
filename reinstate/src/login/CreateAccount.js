import React from 'react';
import { useState } from 'react';

export function CreateAccount(props) {
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [createError, setCreateError] = useState(false);
  const {ChingIndex} = props

  async function addUser(username, password) {
    const createRequest = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    createRequest.status !== 200
      ? setCreateError(true)
      : console.log('משתמש נוסף בהצלחה!');
    console.log(createRequest.status);
    console.log(await createRequest.json());
  }

  function changInputValue(ev, setState) {
    setState(ev.target.value);
  }
  return (
    <>
      <h3>צור חשבון</h3>
      <form>
        <div>
          <input
            id="username"
            // autoFocus
            placeholder="בחר שם משתמש"
            value={userNameValue}
            onFocus={(e) => {
              e.currentTarget.select();
              setCreateError(false);
            }}
            onChange={(ev) => changInputValue(ev, setUserNameValue)}
            style={inputStyle}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="בחר סיסמה"
            onFocus={(e) => e.currentTarget.select()}
            onChange={(ev) => changInputValue(ev, setPasswordValue)}
            style={inputStyle}
            value={passwordValue}
          />
        </div>
        <div className="createError">
          {createError && <span className="error"></span>}
        </div>
        <div className="center">
          <button
            className="to_coonect"
            type="button"
            onClick={() => {
              addUser(userNameValue, passwordValue);
            }}
          >
            התחבר
          </button>
        </div>
      </form>
      <div style={{ paddingTop: '30px', display: 'flex' }}>
        <span>יש לך כבר חשבון? - </span>
        <button className="create_account" style={createAccountStyle} onClick={ChingIndex}>
          לחשבונך
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

// const prams = {
//   url:'https://dummyjson.com/users/add',
//   h2: 'צור חשבון',
//   userNameValue: 'בחר שם משתמש',
//   passwordValue: 'בחר סיסמה',
//   buttonValue: 'התחבר',
//   changChild:
// }