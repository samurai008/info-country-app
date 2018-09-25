import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCountry from './components/SearchCountry';
import CountryList from './components/CountryList';
import CountryService from './CountryService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  getSearchResults(params) {
    let countryService = new CountryService();
    console.log(params);
    console.log(countryService.getUri(params));
    let uri = countryService.getUri(params);
    countryService.getResults(uri)
    .then(res => res.json())
    .then(res => {
      this.setState({list: res});
    })
    .catch(error => console.log(error));
  }

  renderSearchCountry() {
    return (
      <SearchCountry 
      getSearchResults={this.getSearchResults.bind(this)}
      getCountryDetails={this.getCountryDetails}>
      </SearchCountry>
    )
  }

  renderPlaceholderListText() {
    const style = {
      color: 'gray',
      textAlign: 'center',
      margin: '1rem 0'
    };
    return (
      <div style={style}>Pick a criteria and search for a country</div>
    )
  }

  render() {
    return (
      <div className='container mt-2'>
      {this.renderSearchCountry()}
      <CountryList list={this.state.list}></CountryList>
      </div>
    );
  }
}

export default App;
