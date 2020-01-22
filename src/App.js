import React, { Component } from 'react';
import './App.scss';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import Footer from './layout/footer/Footer';

class App extends Component {
  state = {
    data: [],
    searchField: '',
  };

  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
  }

  handleChange = (ev) => {
    this.setState({
      searchField: ev.target.value,
    });
  };

  filterData = (searchFilter) => {
    return this.state.data.filter((item) => {
      return item.name.toLowerCase().includes(searchFilter);
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="app__title">Monsters Rolodex</h1>
        <SearchBox placeholder="search name" handleChange={this.handleChange} />
        <CardList cards={this.filterData(this.state.searchField)} />
        <Footer />
      </div>
    );
  }
}

export default App;
