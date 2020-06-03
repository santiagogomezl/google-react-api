import React, {Component} from 'react';
import './BookList.css';
import Book from '../Book/Book';

class Booklist extends Component{

    render(){
        const books = this.props.books.map((book, i) => {
            return(
                <Book 
                    key={i}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    snippet={book.searchInfo.textSnippet}
                    description={book.volumeInfo.description}
                    categories={book.volumeInfo.categories}
                    thumbnailURL={book.volumeInfo.imageLinks.thumbnail}/>
            );
        });
        return(
            <div className="book-list">
            <h2>Results:</h2>
                {books}
            </div>
        );
    };
}

export default Booklist;