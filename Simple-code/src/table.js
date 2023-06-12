import { useState } from "react";

function newSort(data, keySort, ascendingOrder) {
  if (ascendingOrder) {
    if (typeof data[0][keySort] === "string") {
      return data.sort((a, b) => a[keySort].localeCompare(b[keySort]));
    }
    if (typeof data[0][keySort] === "number") {
      return data.sort((a, b) => a[keySort] - b[keySort]);
    }
  } else {
    if (typeof data[0][keySort] === "string") {
      return data.sort((b, a) => a[keySort].localeCompare(b[keySort]));
    }
    if (typeof data[0][keySort] === "number") {
      return data.sort((b, a) => a[keySort] - b[keySort]);
    }
  }
}
export const dataForTable = [
  [0, "דן", "ישראל", "dan@gmail.com"],
  [1, "חיים", "רוסיה", "dana@gmail.com"],
  [2, "הלל", "ארצות הברית", "anna@gmail.com"],
  [11, "תמר", "פולין", "zina@gmail.com"]
];

export function SortedTable({ data }) {
  const [keySort, setKeySort] = useState(1);
  const [ascendingOrder, setascendingOrder] = useState(true);

  const tHeadr = ["id", "Name", "Country", "Email"];
  const newData = newSort(data, keySort, ascendingOrder);

  function changeKeySort(index) {
    setKeySort(index);
  }
  function changeModeFoAscendingOrder(params) {
    setascendingOrder((mode) => mode === false);
  }

  return (
    <>
      <h4>Clicking on the column head changes the order of the items!</h4>
      <table>
        <thead>
          <tr>
            {tHeadr.map((column, index) => {
              return (
                <th
                  onClick={() => {
                    changeModeFoAscendingOrder();
                    changeKeySort(index);
                  }}
                >
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {newData.map((row, index) => {
            return (
              <tr>
                {row.map((item) => (
                  <th>{item}</th>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
