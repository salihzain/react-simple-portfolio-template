import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from 'react-redux';



registerServiceWorker();

const render = () => {
    fancylog();
    return ReactDOM.render(
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        , document.getElementById('root'));
};

function fancylog() {
    console.log(store.getState());
    console.log("%c rendered with", "background: purple; color:#fff");
}


render();

fancylog();


