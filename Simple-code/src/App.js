import "./styles.css";
import { StrictMode } from "react";
// import { MyCounter } from "./counter";
import { MyForm, Login, Password, Result } from "./form";
import CheckableList from "./map";
import { dataForTable, SortedTable } from "./table";

export function App() {
  return (
    <StrictMode>
      <MyForm>
        <Login />
        <Password />
        <Result />
      </MyForm>
      <CheckableList />
      <SortedTable data={dataForTable} />
    </StrictMode>
  );
}
