

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import AddProduct from './pages/addProducts';
import Stats from './pages/stats';


function AllRoutes(){
    return (
        <Routes>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/stats' element={<Stats/>}/>
             <Route path='/addProduct' element={<AddProduct/>}/>
             
       </Routes>
    )
}
export default AllRoutes;
