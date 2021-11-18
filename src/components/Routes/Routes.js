import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Products from '../Products/Products';

const Rutas = (Items) =>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Products />}>
   
                </Route> 
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}
export default Rutas;