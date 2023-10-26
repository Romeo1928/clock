import React, {useEffect, useState} from 'react';
import './App.css';
import {Time} from "./components/Time";
import {Clock} from "./components/Clock";


function App() {

	return (
		<div className="App">
			<Time/>
			<Clock/>
		</div>
	);
}

export default App;

