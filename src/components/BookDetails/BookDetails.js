import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from '../Book';
import * as BooksAPI from '../../utils/BooksAPI';

import './BookDetails.css';

const propTypes = {
  bookId: PropTypes.string.isRequired,
  onBackLinkClick: PropTypes.func.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

const defaultProps = {
  title: 'MyReads',
};

class BookDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null,
    };
  }

  componentDidMount() {
    BooksAPI.get(this.props.bookId)
      .then((book) => {
        this.setState({ book });
      });
  }

  render() {
    const { book } = this.state;
    const { onBackLinkClick, onShelfChange, title } = this.props;

    if (!book) return null;

    return (
      <div className="details-book">
        <div className="details-book-title">
          <a href="#back" onClick={onBackLinkClick}>Back</a>
          <h1>{title}</h1>
        </div>
        <div className="details-book-content">
          <Book book={book} hasDetailsLink={false} onShelfChange={onShelfChange} />
          <div className="details-book-description">
            <h2>Description:</h2>
            <p>{book.description}</p>
          </div>
          <div className="details-book-info">
            <ul>
              <li>Number of pages: {book.pageCount}</li>
              <li>Published by {book.publisher}</li>
              <li>Published on {book.publishedDate}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

BookDetails.propTypes = propTypes;
BookDetails.defaultProps = defaultProps;

export default BookDetails;
