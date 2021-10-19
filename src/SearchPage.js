import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SingleBook from './SingleBook'
import PropTypes from 'prop-types'

class SearchPage extends Component {


    render() {


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>
                        Close
                    </Link>

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
                    {(typeof(this.props.booksFromSearch) !== 'string') ?

                            this.props.booksFromSearch.map((book)=> (

                                <li key={book.id}>
                                    <SingleBook
                                        bookTitle={book.title}
                                        bookAuthors={book.authors ? book.authors.join(' - ') : 'Unknown'}
                                        bookImage={book.imageLinks.thumbnail}
                                        currentValue={book.shelf}
                                        onShelfChange={(e)=> this.props.onShelfChange(book,e)}                                        
                                        />
                                </li> 
                            ))

                        : 
                        
                            
                            <div style={{textAlign: 'center'}}>
                                <h3 style={{marginBottom:20}}> Search for new books and Notice the valid queries : </h3>
                                {`
                                    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 
                                    'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 
                                    'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
                                    'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 
                                    'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 
                                    'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey',
                                    'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make',
                                    'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy',
                                    'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',
                                    'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
                                    'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'.
                                `}
                            </div>
                                       
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
}
export default SearchPage