import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class SingleBook extends Component {   

    render() {
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${this.props.bookImage})`}}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e)=> this.props.onShelfChange(e)} value={this.props.currentValue}>
                            <option value="" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title"> {this.props.bookTitle} </div>
                <div className="book-authors"> {this.props.bookAuthors} </div>
            </div>
        )
    }
}
SingleBook.propTypes = {
    bookTitle: PropTypes.string.isRequired,
    bookImage: PropTypes.string.isRequired,
    currentValue: PropTypes.string.isRequired,
}
export default SingleBook