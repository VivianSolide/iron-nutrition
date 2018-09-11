import React, { Component } from "react";

class FoodBox extends Component {
	render() {
		return (
			<div className="box">
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={this.props.image} className="img" />
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{this.props.name}</strong> <br />
								<small>{this.props.calories} cal</small>
							</p>
						</div>
					</div>
					<div className="media-right">
						<div className="field has-addons">
							<div className="control">
								<input
									className="input"
									type="number"
									value={this.props.quantity}
								/>
								<button
									onClick={() => this.props.increment(this.props.index)}
									className="button"
								>
									+
								</button>
								<button
									onClick={() => this.props.decrement(this.props.index)}
									className="button"
								>
									-
								</button>
							</div>
							<div className="control">
								<button
									onClick={this.props.recordFood}
									className="button is-info"
								>
									+
								</button>
							</div>
						</div>
					</div>
				</article>
			</div>
		);
	}
}

export default FoodBox;
