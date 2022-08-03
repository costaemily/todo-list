import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Principal from "./views/tarefa/Principal";


function App() {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path="/principal" element={<Principal/>}/>
            </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
