import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'

import MyReadPage from './MyReadPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  // All Books data 
  state = {
    currentBooks: [],
    booksFromSearch: [],
    query: '',
    shelfName:'',
    bookID:'',
  }
  // Get the current books data in main read page from a fake API
  componentDidMount() {
    BooksAPI.getAll()
    .then((res)=> {
      this.setState({
          currentBooks:res,
          shelfName: res.map((b)=> b.shelf),
          bookID: res.map((b)=> b.id),
      })
    })
  }

  // Get new books data from search to be add in current books
  onSearch = (query) => {

    const myBooks = this.state.currentBooks;
    const bID = this.state.bookID;

    this.setState({query: query.trim()})

      // Get search result for books from fake API
      BooksAPI.search(query)
        .then((res)=>{
          let searchBookID = res.map(b => b.id)

          // add shelf key for new books obj = none
          let addDefShelf = res.map( b => ({...b, shelf: 'none' }) ) 
          console.log(addDefShelf)

          // filter the book that found on my shelves
          let newbooks = addDefShelf.filter((b)=> !bID.includes(b.id))

          // Get the same books from my book
          let oldbooks = myBooks.filter(b => searchBookID.includes(b.id))
          console.log(oldbooks)

          // Then Merges the arrays
          let finalbook = oldbooks.concat(newbooks)
          console.log(finalbook)
          return finalbook
        })
        .then((data)=>(
            this.setState({
              booksFromSearch: data
            })       
        ))     
  }

  onShelfChange = (book , e) => {
    const selectedShelf = e.target.value;
    // const currentShelf = book.shelf
    // console.log(book.id, selectedShelf, currentShelf);
    BooksAPI.update(book , selectedShelf)

    setInterval(() => {
        BooksAPI.getAll()
            .then((allBooks)=> {
                this.setState({
                    currentBooks: allBooks
                })
            })
    }, 200);
        
  }
    
 


  render() {
    
    return (
      <div className="app">
        <Route exact path='/' render={ ()=> (

          <MyReadPage 
            booksIn={this.state.currentBooks}
            onShelfChange={this.onShelfChange}
            shelfName={this.state.shelfName}
            /> 
        )}
        />

        <Route  path='/search' render={()=> (   

          <SearchPage
            query={this.state.query}
            updateQuery={this.onSearch}
            booksFromSearch={this.state.booksFromSearch}

            onShelfChange={this.onShelfChange}
            bookIn={this.state.currentBooks}
            currentShelf={this.state.shelfName}
            // wantShelf={'wantToRead'}
            // readShelf={'read'}
            // booksIn={this.state.currentBooks}
          />
        )}
        />
          
      </div>
    )
  }
}

export default BooksApp
