import React, { Component } from "react";
import logo from "./logo.svg";
import FoodBox from "./FoodBox";
import data from "./foods.json";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			search: "",
			amountofcalories: 0,
			todaysFood: []
		};
	}

	componentDidMount() {
		this.setState({
			list: data
		});
	}

	render() {
		return (
			<div>
				<div className="container">
					<h1 className="title">IronNutrition</h1>
					<input
						type="search"
						onChange={this._search}
						className="input"
						placeholder="Search.."
					/>
				</div>
				<div className="columns">
					<div className="column">
						{this.state.list.map((e, i) => {
							return (
								<FoodBox
									key={i}
									index={i}
									name={e.name}
									image={e.image}
									calories={e.calories}
									quantity={e.quantity}
									increment={this._increment}
									decrement={this._decrement}
									recordFood={this._recordFood}
								/>
							);
						})}
					</div>
					<div className="column">
						<h2 className="title">Today's Food</h2>
						{this.state.todaysFood.map((e, i) => {
							return <li>{e.name} : </li>;
						})}
						<h4 className="subtitle">
							Total: {this.state.amountofcalories} cal
						</h4>
					</div>
				</div>
			</div>
		);
	}

	_search = e => {
		let searchList = this.state.list;
		const results = searchList.filter(food => {
			return food.name.indexOf(e.target.value) !== -1;
		});
		this.setState({
			list: results
		});
	};

	_increment = index => {
		const targetFood = this.state.list[index].name;
		let newList = this.state.list;
		this.state.list.map((e, i) => {
			if (targetFood === e.name) {
				newList[index].quantity++;
			}
		});
		this.setState({
			list: newList
		});
	};

	_decrement = index => {
		if (this.state.quantity > 0) this.setState({});
		const targetFood = this.state.list[index].name;
		let newList = this.state.list;
		this.state.list.map((e, i) => {
			if (targetFood === e.name) {
				newList[index].quantity--;
			}
		});
		this.setState({
			list: newList
		});
	};

	_recordFood = index => {
		console.log("toto");
	};
}

export default App;
