import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCountry from './components/SeachCountry';

class App extends Component {
  constructor() {
    super();
    this.getCountryDetails = this.getCountryDetails.bind(this);
  }

  getUri(criteria, params) {
    let uri = 'https://restcountries.eu/rest/v2/';
    switch(criteria) {
      case 'name':
        return uri + 'name/' + params;
      case 'fullName':
        return uri + 'name/' + params + '?fullText=true';
      case 'code':
        return uri + 'aplha?codes=' + params;
      case 'currency':
        return uri + 'currency/' + params;
      case 'language':
        return uri + 'lang/' + params;
      case 'capitalCity':
        return uri + 'capital/' + params;
      case 'callingCode':
        return uri + 'callingcode/' + params;
      case 'region':
        return uri + 'region/' + params;
      case 'regionalBloc':
        return uri + 'regionalbloc/' + params;
    }
  }

  getCountryDetails(params) {
    console.log('Get da country details.....');
    const uri = this.getUri(params.criteria, params.term);
    console.log(uri);
    return fetch(uri);
  }

  renderSearchCountry() {
    return (
      <SearchCountry 
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
        <h3 className='text-center'>Country Deets!</h3>
        {this.renderSearchCountry()}

        {this.renderPlaceholderListText()}

      </div>
    );
  }
}

export default App;
