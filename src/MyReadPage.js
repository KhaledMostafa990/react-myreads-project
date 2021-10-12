import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
// import * as BooksAPI from './BooksAPI'
// import SearchPage from './SearchPage'
// import PropTypes from 'prop-types'
// import SearchPage from './SearchPage'
// import {Route} from 'react-router-dom'

class MyReadPage extends Component {

//     state = {
//         // Defined array for all Books data 
//         books: [],
//     }
// componentDidMount() {
//     BooksAPI.getAll()
//       .then((res)=> {

//         this.setState({
//             books:res,
    
//         })
//       })
//   }
//   onShelfChange = (book , e) => {
//     const selectedShelf = e.target.value;
//     // const currentShelf = book.shelf
//     // console.log(book.id, selectedShelf, currentShelf);
//     BooksAPI.update(book , selectedShelf)

//     setInterval(() => {
//         BooksAPI.getAll()
//             .then((allBooks)=> {
//                 this.setState({
//                     books: allBooks
//                 })
//             })
//     }, 200);
        
//   }

// updateQuery = (query) => {
//     this.setState({query: query.trim()})
//     BooksAPI.search(query)
//         .then((res)=>{
//              this.setState({
//             booksFromSearch: res
//         })
//             console.log(this.state.booksFromSearch[0])
//         })
//     console.log(query)
// }

  render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>

                    <BookShelf
                        booksIn={this.props.booksIn}
                        shelfName={this.props.shelfName.includes('currentlyReading') ? 'currentlyReading' : ''}
                        shelfTitle={'Currently Reading'} 
                        onShelfChange={this.props.onShelfChange}
                        /> 

                    <BookShelf     
                        booksIn={this.props.booksIn}
                        shelfName={this.props.shelfName.includes('wantToRead') ? 'wantToRead' : ''}
                        shelfTitle={'Want To Read'}
                        onShelfChange={this.props.onShelfChange}
                        />
                    
                    <BookShelf
                        booksIn={this.props.booksIn}
                        shelfName={this.props.shelfName.includes('read') ? 'read' : ''}
                        shelfTitle={'Read'}
                        onShelfChange={this.props.onShelfChange}
                    />
                                             
                    </div>
                </div>

                {/* To search page*/}
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>

          
          </div>
        )
    }
}



export default MyReadPage

//  <div className="bookshelf">
//                             <h2 className="bookshelf-title">{`Want to Read`}  </h2>

//                             <div className="bookshelf-books">
//                                 <ol className="books-grid">
//                                 {this.state.books.map((book)=> ( 
//                                     book.shelf === 'wantToRead' ? 

//                                         <li key={book.id}>
//                                             <SingleBook 
//                                                 bookTitle={book.title}
//                                                 bookAuthors={book.authors}
//                                                 bookImage={book.imageLinks.thumbnail}
//                                             />
//                                         </li>
//                                     : ''
//                                 ))}
//                                 </ol>
//                             </div>
//                         </div>

//                         <div className="bookshelf">
//                             <h2 className="bookshelf-title"> {`Read`}  </h2>

//                             <div className="bookshelf-books">
//                                 <ol className="books-grid">
//                                 {this.state.books.map((book)=> ( 
//                                     book.shelf === 'read' ? 
//                                         <li key={book.id}>
//                                             <SingleBook 
//                                                 bookTitle={book.title}
//                                                 bookAuthors={book.authors}
//                                                 bookImage={book.imageLinks.thumbnail}
//                                             />
//                                         </li>
//                                     : ''
//                                 ))}
//                                 </ol>
//                             </div>
//                         </div>
