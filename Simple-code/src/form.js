import { useState, cloneElement } from "react";
import React from "react";

function MyForm({ children }) {
  const [idx, setIdx] = useState(0);
  const [data, setdata] = useState({});

  const forms = React.Children.toArray(children);
  const ElementForm = cloneElement(forms[idx], { saveData, data });

  function next() {
    setIdx((x) => x + 1);
  }
  function previous() {
    setIdx((x) => x - 1);
  }
  function saveData(ev) {
    const newData = data;
    newData[ev.target.id] = ev.target.value;
    setdata({ ...newData });
  }

  return (
    <>
      <div className="formSpas">
        {ElementForm}
        {idx < forms.length - 1 && <button onClick={next}>next</button>}
        {idx > 0 && <button onClick={previous}>previous</button>}
      </div>
    </>
  );
}

function Login({ saveData, data }) {
  const { yourName } = data || "";

  return (
    <p>
      what is your name?
      <input id="yourName" value={yourName} onChange={saveData}></input>
    </p>
  );
}
function Password({ saveData, data }) {
  const { yourPasseord } = data || "";

  return (
    <p>
      please choose a password:
      <input id="yourPasseord" value={yourPasseord} onChange={saveData}></input>
    </p>
  );
}
function Result({ data }) {
  const { yourName, yourPasseord } = data;

  return (
    <>
      <p>your name is: {yourName}</p>
      <p>the password you chose is: {yourPasseord}</p>
    </>
  );
}

export { MyForm, Login, Password, Result };
