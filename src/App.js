import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'

import MyReadPage from './MyReadPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
        // Defined array for all Books data 
    currentBooks: [],
    query: '',
    booksFromSearch: [],
  }
componentDidMount() {
    BooksAPI.getAll()
      .then((res)=> {
        this.setState({
            currentBooks:res,
    
        })
      })
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
    
    updateQuery = (query) => {
      this.setState({query: query.trim()})
      BooksAPI.search(query)
        .then((res)=>{
          this.setState({
            booksFromSearch: res
          })
          // console.log(this.state.booksFromSearch)
        })
      // console.log(query)
    }




  render() {
    
    return (
      <div className="app">
        <Route exact path='/' render={ ()=> (

          <MyReadPage 
            booksIn={this.state.currentBooks}
            onShelfChange={this.onShelfChange}
          
            /> 
        )}
        />

        <Route  path='/search' render={()=> (   

          <SearchPage
            query={this.state.query}
            updateQuery={this.updateQuery}
            booksFromSearch={this.state.booksFromSearch}

            onShelfChange={this.onShelfChange}
            bookIn={this.state.currentBooks}
            currentShelf={'currentlyReading'}
            wantShelf={'wantToRead'}
            readShelf={'read'}
            // booksIn={this.state.currentBooks}
          />
        )}
        />
          
      </div>
    )
  }
}

export default BooksApp
