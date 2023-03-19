/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

interface SearchBarState {
  searchText: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchText: 'Search Bar....',
    };
  }

  handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: event.target.value });
  };

  handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleSearchInputChange}
          className="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
