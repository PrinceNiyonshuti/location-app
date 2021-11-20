/** @format */

import React from "react";

class Header extends React.Component {
	state = { country: "" };

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.country);
	};

	render() {
		return (
			<div className="container">
				<div className="current-info">
					<div className="date-container">
						<form onSubmit={this.handleSubmit}>
							<div>
								<label>Choose Country </label>
								<select
									value={this.state.country}
									onChange={(event) =>
										this.setState({ country: event.target.value })
									}>
									<option value="">-- Choose Country --</option>
									<option value="Rwanda">Rwanda</option>
									<option value="Burundi">Burundi</option>
									<option value="Uganda">Uganda</option>
									<option value="Tanzania">Tanzania</option>
									<option value="Kenya">Kenya</option>
									<option value="Russia">Russia</option>
									<option value="USA">USA</option>
									<option value="Australia">Australia</option>
								</select>
								<button className="go-btn">Go</button>
								{/* <input
										type="text"
										value={this.state.country}
										onChange={(event) =>
											this.setState({ country: event.target.value })
										}
									/> */}
							</div>
						</form>
					</div>

					<div className="date-container">
						<div className="time" id="time">
							Location
						</div>
						<div className="date" id="date">
							Weather App
						</div>
					</div>

					<div className="place-container">
						<div className="time-zone" id="time-zone">
							{this.props.city}
						</div>
						<div id="country" className="country">
							Country Details
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
