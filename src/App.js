import { Route, Switch } from "react-router-dom";

import Home from './pages/home/home';
import Checkout from './pages/checkout/checkout';

import './App.css';

function App() {
  return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/checkout" component={Checkout} />
			</Switch>
		</div>
	);
}

export default App;
