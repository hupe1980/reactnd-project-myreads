import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book';
import * as BookPropTypes from '../../utils/BookPropTypes';

import './BookGrid.css';

const propTypes = {
  books: BookPropTypes.books.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

const BookGrid = ({ books, onShelfChange }) => (
  <ol className="books-grid">
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} onShelfChange={onShelfChange} />
      </li>
    ))}
  </ol>
);

BookGrid.propTypes = propTypes;

export default BookGrid;
