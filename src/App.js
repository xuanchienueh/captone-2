import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getDSFilm, getListUserAction } from "./counter/actionsFilm";
import { giam, tang } from "./counter/demSoSlice";

function App() {
  const dispatch = useDispatch();
  const { value1, loaiNguoiDung, listUser } = useSelector((state) => state.demSo);
  console.log(listUser);

  /*   useEffect(() => {
    dispatch(getDSFilm());
  }, [value1]); */

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <h2>{value1}</h2>
      <button onClick={() => dispatch(tang())}>tang len</button>
      <button onClick={() => dispatch(giam())}>giam</button>
      <button onClick={() => dispatch(getListUserAction())}>get List user</button>
    </div>
  );
}

export default App;
