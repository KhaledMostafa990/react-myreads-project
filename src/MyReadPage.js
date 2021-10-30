import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class MyReadPage extends Component {


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
                    <Link className="button" to='/search'>
                        Add a book
                    </Link>
                </div>

                <div style={{fontSize: 12, textAlign: 'center'}}>Development by <a href="https://github.com/KhaledMostafa990">Khaled Farghly</a>.</div>
          </div>
        )
    }
}



export default MyReadPage
