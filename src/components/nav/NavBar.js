import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<header>
				<h1 className="site-title">
					Library Stuff
					<br />
					<small>Books and Bears with lots of hair.</small>
				</h1>
				<nav>
					<ul className="container">
						<li>
							<Link className="nav-link" to="/Books">
								Books
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/Patrons">
								Patrons
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default NavBar;
