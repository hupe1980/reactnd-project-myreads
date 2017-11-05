import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookShelfChanger from '../BookShelfChanger';
import * as BookPropTypes from '../../utils/BookPropTypes';

import './Book.css';

const propTypes = {
  book: BookPropTypes.book.isRequired,
  hasDetailsLink: PropTypes.bool,
  onShelfChange: PropTypes.func.isRequired,
};

const defaultProps = {
  hasDetailsLink: true,
};

const authorsString = ({ authors }) => (authors ? authors.join(', ') : 'Unknown');

const Book = ({ book, hasDetailsLink, onShelfChange }) => (
  <div className="book">
    <div className="book-top">
      {hasDetailsLink ?
        <Link to={`/details/${book.id}`}>
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.thumbnail}')` }} />
        </Link>
        :
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.thumbnail}')` }} />
      }
      <BookShelfChanger book={book} onShelfChange={onShelfChange} />
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{authorsString(book)}</div>
  </div>
);

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
