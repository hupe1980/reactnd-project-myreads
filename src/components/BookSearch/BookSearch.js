import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookGrid from '../BookGrid';
import * as BookPropTypes from '../../utils/BookPropTypes';

import './BookSearch.css';

const propTypes = {
  results: BookPropTypes.books.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

const BookSearch = ({
  results, onShelfChange, onQueryChange, query,
}) => (
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={onQueryChange}
        />
      </div>
    </div>
    <div className="search-books-results">
      <BookGrid books={results} onShelfChange={onShelfChange} />
    </div>
  </div>
);

BookSearch.propTypes = propTypes;

export default BookSearch;
