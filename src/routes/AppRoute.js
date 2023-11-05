import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import {Home} from '../pages'



const AppRoute = ()=> {
    return (
        <>

                <Routes>

                    <Route path='/home' element={<Home />} />

                </Routes>

        </>
    )
}

export {AppRoute}