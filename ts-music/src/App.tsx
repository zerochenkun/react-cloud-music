import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import { renderRoutes } from "react-router-config";
import { IconStyle } from "./assets/iconfont/iconfont";
import store from "./store";
import routes from "./routes";
import "./fix.css";

export const App = () => {
    return (
        <Provider>
            <HashRouter>
            <GlobalStyle></GlobalStyle>
            <IconStyle></IconStyle>
            {renderRoutes(routes)}
            </HashRouter>
        </Provider>
    )
}