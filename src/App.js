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

  // Get new books data from search to be add in my reads books
  onSearch = (query) => {

    const myBooks = this.state.currentBooks;
    const bID = this.state.bookID;

    this.setState({query: query})
    /**
     * - On search ask if the input not empty then the response > 0
     * - then get the books from a fake backend API  to modify and show them 
     * - if the input are empty or not empty but there's no response (mean invalid query)
     * - this will return invalid string to show massege with the valid queries
     * - other than that modify the response
     */
    
    // Get search result for books from fake API
    BooksAPI.search(query.trim())
      .then((res)=>{
        // console.log(res)
          if (query !== '' && res) {
            
            if(res.length > 0) {
              let searchBookID = res.map(b => b.id)
              // define the books that has a poster
              let hasCover = res.filter((b) => b.imageLinks)
              // console.log(hasCover)

              // add shelf key for new books obj = none
              let addDefShelf = hasCover.map( b => ({...b, shelf: 'none' }) ) 
              // console.log(addDefShelf)

              // filter the book that found on my shelves
              let newbooks = addDefShelf.filter((b)=> !bID.includes(b.id))

              // Get the same books from my book
              let oldbooks = myBooks.filter(b => searchBookID.includes(b.id))
              // console.log(oldbooks)

              // Then Merges the arrays
              let finalbook = oldbooks.concat(newbooks)
              // console.log(finalbook)
              
              this.setState({
                  booksFromSearch: finalbook
              })

            } else { 
            this.setState({ booksFromSearch: 'Invalid query'})
              
            } 

          } else { // to show message with the valid queries in search component
            this.setState({ booksFromSearch: 'Invalid query'})
              
          }     
      })
      .catch(error => (
        console.log(error)
      ))  
  }
  /**
   * - on the select options cliked define the book and the selected value (shelfName) 
   * - then move that book to the selected shelf in myreads page 
   * - then get the data again from the backend 
   */
  onShelfChange = (book , e) => {
    const selectedShelf = e.target.value;

    BooksAPI.update(book , selectedShelf)
        .then(
          BooksAPI.getAll()
            .then((allBooks)=> {
                this.setState({
                    currentBooks: allBooks
                })
            })
        )
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

            // bookIn={this.state.currentBooks}
            // currentShelf={this.state.shelfName}
          />
        )}
        />
          
      </div>
    )
  }
}

export default BooksApp
