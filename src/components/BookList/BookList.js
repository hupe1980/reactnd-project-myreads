import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookShelf from '../BookShelf';
import * as BookPropTypes from '../../utils/BookPropTypes';

import './BookList.css';

const propTypes = {
  books: BookPropTypes.books.isRequired,
  shelves: BookPropTypes.shelves.isRequired,
  title: PropTypes.string,
  onShelfChange: PropTypes.func.isRequired,
};

const defaultProps = {
  title: 'MyReads',
};

const BookList = ({
  books, shelves, title, onShelfChange,
}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
    <div className="list-books-content">
      <div>
        {shelves.map(shelf => (
          <BookShelf
            key={shelf.id}
            title={shelf.name}
            books={books.filter(book => book.shelf === shelf.id)}
            onShelfChange={onShelfChange}
          />
          ))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

BookList.propTypes = propTypes;
BookList.defaultProps = defaultProps;

export default BookList;
