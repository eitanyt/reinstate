import React from 'react';
import { useState } from 'react';
// import { useRef } from 'react';
import { AccountLogin } from './AccountLogin';
import { CreateAccount } from './CreateAccount';

export function Login() {
  const [theChildLogin, setTheChildLogin] = useState(true);

  const Child = theChildLogin ? AccountLogin : CreateAccount;
  function ChingIndex() {
    setTheChildLogin(!CreateAccount);
  }
  const loginAppStyle = {
    boxShadow: '7px 7px 10px grey',
    height: '350px',
    width: '230px',
  };

  return (
    <>
      <div className="loginApp contaner" style={loginAppStyle} dir="rtl">
        <div>
          <button className="close">x</button>
        </div>
        <Child ChingIndex={ChingIndex} />
        {/* <CreateAccount />
        <AccountLogin/> */}
      </div>
    </>
  );
}

function closeElement(element) {
  element.style.display = 'none';
}
