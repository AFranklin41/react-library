import React, { Component } from "react";

class BookCard extends Component {
	render() {
		const availability = this.props.bookProp.available;
		return (
			<div className="card">
				<div className="card-content">
					{availability ? (
						<p>
							Title:{" "}
							<span className="card-titleName">
								{this.props.bookProp.title}
							</span>
						</p>
					) : null}
					{/* {availability ? (
						<h4>
							Status: {availability ? "Available" : "Unavailable"}
							<p>
								Title:{" "}
								<span className="card-titleName">
									{this.props.bookProp.title}
								</span>
							</p>
							<br />
						</h4>
					) : (
						<h4>
							Status: {availability ? "Available" : "Unavailable"}
							<p>
								Title:{" "}
								<span className="card-titleName">
									{this.props.bookProp.title}
								</span>
							</p>
						</h4>
					)} */}
				</div>
			</div>
		);
	}
}

export default BookCard;
