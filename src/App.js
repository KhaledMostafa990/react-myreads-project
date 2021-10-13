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
    validQuery: [
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
      'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ]
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

    this.setState({query: query})
    let validQuery = this.state.validQuery.map(q => q.toLowerCase())
    /**
     * - On search defined the valied queries and transform to lower case
     * - loop over the valid queries to check if included the input value and input not empty
     * - then get the books from a fake backend API  to modify and show them 
     * - if the input not match set the bookfromsearch key as a string to show message instead books in search component
     */
    for(let i = 0;  i < validQuery.length ; i++) {
      if ( validQuery[i].includes(query) && query !== '' ) {
        

        // Get search result for books from fake API
        BooksAPI.search(query)
          .then((res)=>{
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
            return finalbook
          })
          .then((data)=>(
              this.setState({
                booksFromSearch: data
              })       
          ))
          .catch(error => (
            console.log(error)
          ))


      } else { // to show message with the valid queries in search comp
        this.setState({ booksFromSearch: 'Invalid query'})

        // console.log("false")
      }

    }
          
  }
  /**
   * - on the select options cliked define the book and the selected value (shelfName) 
   * - then move that book to the selected shelf in myreads page 
   * - then get the data again from the backend 
   */
  onShelfChange = (book , e) => {
    const selectedShelf = e.target.value;

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
