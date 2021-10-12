import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import SingleBook from './SingleBook'
// import PropTypes from 'prop-types'

class SearchPage extends Component {

//       state = {
//     /**
//      * TODO: Instead of using this state variable to keep track of which page
//      * we're on, use the URL in the browser's address bar. This will ensure that
//      * users can use the browser's back and forward buttons to navigate between
//      * pages, as well as provide a good URL they can bookmark and share.
//      */
//     // query: '',
//     // booksFromSearch: [],
//   }

//   componentDidMount(){
//       this.updateQuery = (query) => {
//         this.setState({query: query.trim()})
//         BooksAPI.search(query)
//           .then((res)=>{
//             this.setState({
//               booksFromSearch: res
//             })
//             console.log(this.state.booksFromSearch[0])
//           })
//         console.log(query)
//       }
// }




    render() {
    // console.log(this.state.booksFromSearch.length)
        // console.log(this.state.booksFromSearch.map((b)=>b.title))


        return (
            <div className="search-books">
                <div className="search-books-bar">
                       <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
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
                    
                        {this.props.booksFromSearch.map((book)=> (
                            // book.shelf === this.props.bookShelf && book.id ? 

                                <li key={book.id}>
                                    <SingleBook
                                        bookTitle={book.title}
                                        bookAuthors={book.authors}
                                        bookImage={book.imageLinks.thumbnail}
                                        currentValue={book.shelf}
                                        onShelfChange={(e)=> this.props.onShelfChange(book,e)}
                                        // newSlected={this.props.newSlected}
                                        />

                                </li> 
                            
                        ))}
                    </ol>
                </div>
          </div>
        )
    }
}
// SearchPage.prototype = {
//     // query: PropTypes.string.isRequired,
// }
export default SearchPage