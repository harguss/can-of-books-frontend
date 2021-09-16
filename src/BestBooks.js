import React from 'react';
import axios from 'axios';

import CreateBooks from './CreateBooks';
const SERVER = process.env.REACT_APP_SERVER;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    
    let apiUrl = `${SERVER}/books`;

    try {
      let results = await axios.get(apiUrl);
      this.setState({ books: results.data });
      console.log(results);
    }
    catch (err) {
      console.log(err);
    }
  }
  
handleSave = async bookInfo => {
    let apiUrl = `${SERVER}/books`;
    let results = await axios.post(apiUrl, bookInfo);
    let newBook = results.data;
    console.log(newBook);
  }

   render() {

  //   /* TODO: render user's books in a Carousel */

    return (
      <>
      
        <CreateBooks onSave={this.handleSave} />
          {this.state.books.length > 0 &&
                <>
                  <h2>Books!</h2>
                  {this.state.books.map(book => (
                    <p key={book._id}>{book.title}</p>
                  ))}
                </>
                }
           </>
    )
  }
 }

        

export default BestBooks;
