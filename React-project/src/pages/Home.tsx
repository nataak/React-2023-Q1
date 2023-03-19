/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import SearchBar from '../components/SearchBar';

import CardList from '../components/CardList';

class Home extends Component {
  render() {
    return (
      <>
        <SearchBar
          onSearch={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <CardList />
      </>
    );
  }
}

export default Home;
