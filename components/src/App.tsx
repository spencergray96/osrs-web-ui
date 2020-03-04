import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sandbox from "./pages/Sandbox";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Sandbox}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
