import React from "react";
import {Routes, Route, Router} from "react-router-dom";
import Principal from "../views/tarefa/Principal";

const AppRoutes = _ => {
    return(
        <Router>
             <Routes>
                <Route path="/principal" element={<Principal/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;