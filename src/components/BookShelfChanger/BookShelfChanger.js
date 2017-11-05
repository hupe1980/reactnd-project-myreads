import React from 'react';
import PropTypes from 'prop-types';

import * as BookPropTypes from '../../utils/BookPropTypes';

import './BookShelfChanger.css';

const propTypes = {
  book: BookPropTypes.book.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

const BookShelfChanger = ({ book, onShelfChange }) => (
  <div className="book-shelf-changer">
    <select
      value={book.shelf || 'none'}
      onChange={event => onShelfChange(book, event.target.value)}
    >
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);

BookShelfChanger.propTypes = propTypes;

export default BookShelfChanger;
