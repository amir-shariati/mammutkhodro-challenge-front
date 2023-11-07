import React from 'react';
import './App.css'
import {Provider} from "react-redux";
// import {BrowserRouter as Router} from "react-router-dom";
import {store} from './store'
// import {AppRoute} from './routes'
import {ToastContainer} from "react-toastify";
import {Home} from "./pages";
import {Navbar} from "./components/header/navbar";

function App(props) {
    return (
        // <Provider store={store}>
        // <Router>
        //     <AppRoute/>
        // </Router>
        // </Provider>

        <Provider store={store}>
            <ToastContainer />
            <>
                <Navbar />
                <Home  />
            </>
        </Provider>
        // <>
        //     <Navbar />
        //     <Home  />
        // </>


    );
}

export default App;
