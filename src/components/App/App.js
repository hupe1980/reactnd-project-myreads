import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BookList from '../BookList';
import BookSearch from '../BookSearch';
import BookDetails from '../BookDetails';
import NoMatch from '../NoMatch';

import * as BooksAPI from '../../utils/BooksAPI';
import shelves from '../../constants/shelves';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      query: '',
      results: [],
    };

    this.changeBookShelf = this.changeBookShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  updateBookState(changedBook) {
    this.setState((previousState) => {
      const { books } = previousState;
      // remove book from state
      if (changedBook.shelf === 'none') {
        return {
          books: books.filter(b => b.id !== changedBook.id),
        };
      }

      const index = books.findIndex(b => b.id === changedBook.id);

      // add book to state
      if (index === -1) {
        return {
          books: [...books, changedBook],
        };
      }

      // change shelf for book in state
      const newBooks = [...books];
      newBooks[index] = changedBook;
      return {
        books: newBooks,
      };
    });
  }

  updateResultState(changedBook) {
    this.setState((previousState) => {
      const { results } = previousState;

      const index = results.findIndex(b => b.id === changedBook.id);

      if (index !== -1) {
        const newResults = [...results];
        newResults[index] = changedBook;
        return {
          results: newResults,
        };
      }

      return {
        results,
      };
    });
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(() => {
        const changedBook = book;
        changedBook.shelf = shelf;

        this.updateBookState(changedBook);
        this.updateResultState(changedBook);
      });
  }

  updateQuery(query) {
    this.setState({ query }, this.searchBooks);
  }

  searchBooks() {
    const { query } = this.state;

    if (!query) {
      this.setState({ results: [] });
      return;
    }

    BooksAPI.search(query).then((results) => {
      if (results.error) {
        this.setState({ results: [] });
        return;
      }

      this.setState(state => ({
        results: results.map((result) => {
          const bookInShelf = state.books.find(book => book.id === result.id);
          return bookInShelf || result;
        }),
      }));
    });
  }

  render() {
    const { books, results, query } = this.state;

    return (
      <div className="app">
        <Switch>
          { /* Book list page */ }
          <Route
            exact
            path="/"
            render={() => (
              <BookList
                books={books}
                shelves={shelves}
                onShelfChange={this.changeBookShelf}
              />
            )}
          />

          { /* Search books page */ }
          <Route
            path="/search"
            render={() => (
              <BookSearch
                results={results}
                query={query}
                onQueryChange={event => this.updateQuery(event.target.value)}
                onShelfChange={this.changeBookShelf}
              />
            )}
          />

          { /* Book details page */ }
          <Route
            path="/details/:bookId"
            render={props => (
              <BookDetails
                onBackLinkClick={() => props.history.goBack()}
                bookId={props.match.params.bookId}
                onShelfChange={this.changeBookShelf}
              />
            )}
          />
          { /* 404 error page */ }
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
