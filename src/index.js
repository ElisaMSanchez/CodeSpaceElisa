import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainWeb from "./mainweb/mainweb";
import Admin from "./admin/admin";
import NewCustomer from "./admin/customer/new-customer";
import Summary from './admin/summary/summary';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<MainWeb/>}/>
                    <Route path="admin" element={<Admin/>}>
                        <Route index element={<Summary/>}/>
                        <Route path="new-customer" element={<NewCustomer/>}/>
                    </Route>
                    <Route index path="*" element={<MainWeb/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
