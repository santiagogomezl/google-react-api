import React, {Component} from 'react';
import './Book.css';

class Book extends Component{

    render(){
        const { title, authors, snippet, description, categories, thumbnailURL } = this.props; 

        return(
            <div className="book-item">
                <div className="book-thumb">
                    <img 
                        alt={`${title} Thumbnail`}
                        src={thumbnailURL}/>
                </div>
                <div className="book-info">
                    <h3>{title}</h3>
                    <span>by: {authors}</span>
                    <p>{snippet}</p>
                    {categories? <p>categories</p>:''}
                    <a className="read-more" href="#">more+</a>
                </div>
            </div>
        );
    };
}

export default Book;