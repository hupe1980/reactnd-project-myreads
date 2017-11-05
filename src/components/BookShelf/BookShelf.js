import React from 'react';
import PropTypes from 'prop-types';

import BookGrid from '../BookGrid';
import * as BookPropTypes from '../../utils/BookPropTypes';

import './BookShelf.css';

const propTypes = {
  books: BookPropTypes.books.isRequired,
  title: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

const BookShelf = ({ books, title, onShelfChange }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BookGrid books={books} onShelfChange={onShelfChange} />
    </div>
  </div>
);

BookShelf.propTypes = propTypes;

export default BookShelf;
