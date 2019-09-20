import React, { Component } from "react";
//import the components we will need
import BookCard from "./BookCard"
import BookManager from "../../modules/BookManager.js"

class BookList extends Component {
	//define what this component needs to render
	state = {
		books: []
	};

	componentDidMount() {
		console.log("BOOKS LIST: ComponentDidMount");
		//getAll from AnimalManager and hang on to that data; put it in state
		BookManager.getAll().then(books => {
			this.setState({
				books: books
			});
		});
	}

	render() {
		console.log("BOOKS LIST: Render");

		return (
			<div className="container-cards">
				{this.state.books.map(singleBook => (
					<BookCard key={singleBook.id} bookProp={singleBook} />
				))}
			</div>
		);
	}
}

export default BookList;