import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

jest.mock('../../utils/BooksAPI', () => ({
  getAll: jest.fn().mockImplementation(() => Promise.resolve({ books: [] })),
}));

describe('tests for App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
