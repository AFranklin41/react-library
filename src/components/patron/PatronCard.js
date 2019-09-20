import React, { Component } from "react";

class PatronCard extends Component {
	render() {
		const active = this.props.patronProp.active;
		return (
			<div className="card">
				<div className="card-content">
					{active ? (
						<p>
							Name:{" "}
							<span className="card-titleName">
								{this.props.patronProp.name}
							</span>
						</p>
					) : null}
				</div>
			</div>
		);
	}
}

export default PatronCard;
