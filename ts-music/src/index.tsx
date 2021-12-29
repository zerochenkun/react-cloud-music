import React from "react";
import ReactDom from "react-dom";
import {App} from './App';
import FastClick from "fastclick";

FastClick.attach(document.body);

ReactDom.render(<App/>, document.getElementById('root'))