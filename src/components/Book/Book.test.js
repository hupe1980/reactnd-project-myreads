import React from 'react';
import { shallow } from 'enzyme';

import Book from './Book';

describe('tests for Book component', () => {
  const book = {
    authors: [''],
    id: '123',
    title: 'title',
    shelf: 'none',
    imageLinks: {
      thumbnail: 'http://',
    },
  };

  const onShelfChange = jest.fn();

  it('renders without crashing', () => {
    const wrapper = shallow(<Book book={book} onShelfChange={onShelfChange} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders book title', () => {
    const wrapper = shallow(<Book book={book} onShelfChange={onShelfChange} />);
    expect(wrapper.find('.book-title').text()).toBe(book.title);
  });
});
