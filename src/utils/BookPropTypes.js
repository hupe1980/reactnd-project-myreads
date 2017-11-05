import PropTypes from 'prop-types';

export const book = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
});

export const books = PropTypes.arrayOf(book);

export const shelf = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const shelves = PropTypes.arrayOf(shelf);
