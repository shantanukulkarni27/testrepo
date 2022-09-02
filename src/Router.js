import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";

const Router=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignUp/>} ></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router