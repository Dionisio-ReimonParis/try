import React from 'react';
import './App.css';

function App() {
	const handleClick = () => {
		window.open('https://www.facebook.com/Nomierparis/', '_blank');
	};

	return (
		<div className="App">
			<div className="modern-container" onClick={handleClick}>
				<h1 className="paris-text">I am Paris</h1>
			</div>
		</div>
	);
}

export default App;
