import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const MyRoutes = _ => {
    return(
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default MyRoutes;