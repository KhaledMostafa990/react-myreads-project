import React, { Component } from 'react'
import SingleBook from './SingleBook'
import PropTypes from 'prop-types'

class BookShelf extends Component {


    render() {
        return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title"> {this.props.shelfTitle} </h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">    
                            {this.props.booksIn.map((book)=> (
                                
                                 this.props.shelfName.includes(book.shelf) ?
                                    <li key={book.id}>
                                        <SingleBook
                                            bookTitle={book.title}
                                            bookAuthors={book.authors ? book.authors : 'Unknown'}
                                            bookImage={book.imageLinks.thumbnail}
                                            currentValue={book.shelf}
                                            onShelfChange={(e)=> this.props.onShelfChange(book,e)}
                                            />                          
                                    </li> 
                            
                                : ''  )
                            )}

                        </ol>
                    </div>
                </div>         
            
        )
    }
}

BookShelf.propTypes = {
    booksIn: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookShelf