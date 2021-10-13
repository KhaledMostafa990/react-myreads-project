import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SingleBook from './SingleBook'
import PropTypes from 'prop-types'

class SearchPage extends Component {


    render() {


        return (
            <div className="search-books">
                <div className="search-books-bar">
                       <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                  
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            value={this.props.query}
                            onChange={(e) => this.props.updateQuery(e.target.value)}
                             />

                    </div>
                </div>
                
                <div className="search-books-results">
                    <ol className="books-grid">
                    {(typeof(this.props.booksFromSearch) !== 'string') && this.props.query !== '' ?

                            this.props.booksFromSearch.map((book)=> (

                                <li key={book.id}>
                                    <SingleBook
                                        bookTitle={book.title}
                                        bookAuthors={book.authors ? book.authors : 'Unknown Writer'}
                                        bookImage={book.imageLinks.thumbnail}
                                        currentValue={book.shelf}
                                        onShelfChange={(e)=> this.props.onShelfChange(book,e)}                                        
                                        />
                                </li> 
                            ))

                        : <div> Search for new books and Notice the keywords should be : </div>
                        
                        
                    }
                    </ol>
                </div>
          </div>
        )
    }
}
SearchPage.propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    
    // booksFromSearch: PropTypes.array.isRequired,
    // currentShelf: PropTypes.string.isRequired,
}
export default SearchPage