import './App.css';
import {useState} from 'react';

// user obj
const user = {
	name: 'Hedy Lamarr',
	imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
	imageSize: 90,
};

const products = [
	{ name: 'Bread', isFood: true, id: 1 },
	{ name: 'Milk', isFood: false, id: 2 },
	{ name: 'Juice', isFood: false, id: 3 },
	{ name: 'Cereal', isFood: true, id: 4 },
]

// button component
function MyButton() {
	function btnClick() {
		alert('Clicked!!')
	}
	return (
		<button className="btn-color" onClick={btnClick}>
			I'm a button
		</button>
	);
}

function CountButton() {
	const [count, setCount] = useState(0);

	function btnClick() {
		setCount(count + 1)
	}

	return (
		<button className="btn-color" onClick={btnClick}>
			Counter : {count}
		</button>
	);
}

function SharedButton( {count, clickEvt}) {
	return (
		<button onClick={clickEvt}>
			Both Counter: {count}
		</button>
	)
}

// main component
function App() {
	const [count, setCount] = useState(0);

	function updateCounter() {
		setCount(count + 1);
	}

	const listItems = products.map(product => 
		<li 
			key={product.id}
			style={{
				color: product.isFood ? 'lightgreen' : 'yellow'
			}}
		>
			{product.name}
		</li>	
	)
	return (
		<div className="App">
			<header className="App-header">
				<img 
					className='avatar'
					src={user.imageUrl}
					alt={'photo of ' + user.name}
					style={{
						width: user.imageSize,
						height: user.imageSize,
						borderRadius: '50%'
					}}
				/>
				<div>
					<MyButton/>
				</div>
				<ul>
					{listItems}
				</ul>
				<div>
					<CountButton/>
				</div>
				<div>
					<CountButton/>
				</div>
				<div>
					<SharedButton count={count} clickEvt={updateCounter}/>
				</div>
				<div>
					<SharedButton count={count} clickEvt={updateCounter}/>
				</div>
			</header>
		</div>
	);
}

export default App;
