import React from 'react';
import './App.css'
// import {Provider} from "react-redux";
// import {BrowserRouter as Router} from "react-router-dom";
// import {store} from './store'
// import {AppRoute} from './routes'
import {Home} from "./pages";
import {Navbar} from "./components/header/navbar";

function App(props) {
    return (
        // <Provider store={store}>
        // <Router>
        //     <AppRoute/>
        // </Router>
        // </Provider>
        <>
            <Navbar />
            <Home  />
        </>


    );
}

export default App;
