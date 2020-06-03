import React, {Component} from 'react';
import './SearchBook.css';

class SearchBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            printType: 'all',
            categories: 'all'
        }
    }

    formChange(value, id){
        if(id === 'title'){
            this.setState({
                title: value
            });
        }
        else if(id === 'print-type'){
            this.setState({
                printType: value
            });
        }
        else{
            this.setState({
                categories: value
            });
        } 
    }

    handleSubmit(e){
        e.preventDefault();
        const {title, printType, categories} = this.state;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&printType=${printType}&categories=${categories}&maxResults=10&key=AIzaSyB6601I64jFHtM62Vs-qkh_iQsL-mQ-fTg`;

        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error('Something went wrong, please try again later');
            }
            return response.json();
        })
        .then(data => {
            this.setState({
                title: '',
                printType: 'all',
                categories: 'all'
            });
            this.props.displayBooks(data);
        })
        .catch(err => {
            this.setState({
                error: err.message
            });
        });
    }

    render(){
        return(
            <div>
                <form className="search-book-form" onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <label htmlFor="title">Search Book:</label>
                        <input 
                            type="text"
                            name="title" 
                            id="title"
                            placeholder="Book Title"
                            value={this.state.title}
                            onChange={e => this.formChange(e.target.value, e.target.id)}/>
                        <input type="submit" value="Search"/><br/><br/>
                    </fieldset>

                    <div className="search-book-filters">
                        <fieldset>
                            <label htmlFor="print-type">Print Type:</label>
                            <select 
                                name="print-type" 
                                id="print-type"
                                value={this.state.printType}
                                onChange={e => this.formChange(e.target.value, e.target.id)}>
                                    <option value="all">All</option>
                                    <option value="books">Books</option>
                                    <option value="magazines">Magazines</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="book-type">Book Type:</label>
                            <select 
                                name="book-type" 
                                id="book-type"
                                value={this.state.categories}
                                onChange={e => this.formChange(e.target.value, e.target.id)}>
                                    <option value="all">No Filter</option>
                                    <option value="mistery">Mistery</option>
                                    <option value="crime">Crime</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="mystery">Mystery</option>
                            </select>
                        </fieldset>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBook;